//window.rectanglesData == [{},{},{}]
/*window.rectanglesData = [
    {
        id: 0,
        x: 100,
        y: 100,
        width: 200,
        height: 150,
        radius: 10
    }, {},{}
];
*/  
/*
{
    id: 0,
    x: 100,
    y: 100,
    width: 200,
    height: 150,
    radius: 10,
    setSize: function(100, 100) 
    setPosition: function(10, 10); 
    setCornerRadius: function(5); 
    toJSON: function();
}

*/
window.currentState = {};

function app_init(initialValues){

    var app = document.querySelector('#app');

    for(i=0; i<initialValues.length; i++){
        var curr = initialValues[i];
        this.currentState[i] = new rectangle(   curr.id,
                                                curr.x,
                                                curr.y,
                                                curr.width,
                                                curr.height,
                                                curr.radius);
    }

    window.currentState = initialValues;


    this.getRectById = function(Identifier){ //return the object of the rectangle
        return window.currentState[Identifier];
    }

    this.updateControls = function(){
        initRectangleControls();
    }

    this.updateControls(); //if we allow adding / removing of rectangles


} //end of app

function rectangle(id, x = 0, y = 0, width = 100, height = 100, radius = 0){
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;


    this.toJSON = function(){
        return { id: this.id, width: this.width, height: this.height, x: this.x, y: this.y, radius: this.radius };
    }

    this.setSize = function(width, height){
        this.width = width;
        this.height = height;
        this.draw();
    }

    this.getPosition = function(){
        return {x: this.x, y: this.y}; 
    }

    this.setPosition = function(x, y){
        this.x = x;
        this.y = y;
        this.draw();
    }

    this.setCornerRadius = function(radius){
        this.x = x;
        this.y = y;
        this.draw();
    }

    this.draw = function(){
        var app = document.querySelector('#app');
        var rect = document.createElement('div');
        rect.setAttribute('rect-data', `${this.id}`);
        rect.className = `editable rectangle`;
        rect.style.backgroundColor = `black`;
        rect.style.position = `absolute`;
        rect.style.width = `${this.width}px`;
        rect.style.height = `${this.height}px`;
        rect.style.left = `${this.x}px`;
        rect.style.top = `${this.y}px`;
        app.appendChild(rect);
    }

    
    this.draw();

} //end of rectangle


function rect_translate(id, dx, dy){
    
    window.currentState[id].x = window.currentState[id].x + dx;
    window.currentState[id].y = window.currentState[id].y + dy;
    redraw(id);
}


function redraw(identifier){
    var rect = document.querySelector(`[rect-data="${identifier}"]`); //get the edited element
    rect.style.width = window.currentState[identifier].width + "px";
    rect.style.height = window.currentState[identifier].height + "px";
    rect.style.left = window.currentState[identifier].x + "px";
    rect.style.top = window.currentState[identifier].y + "px";
    return true;
}

function initRectangleControls(){
    var rectangles = document.querySelectorAll('.rectangle');
    var rectangle;
    var mousedown = false;
    var start = {};
    var rectID, dx, dy;

    function startDrag(event){
        mousedown = true;
        start.x = event.x;
        start.y = event.y;         
        this.style.zIndex = 100;
    }
    function endDrag(event){
        mousedown = false;
        start.x = null;
        start.y = null; 
        this.style.zIndex = 0;  
    }

    function dragMove(event){
        if(mousedown == false){
            //do nothing
        }else{
            rectID = event.target.getAttribute('rect-data');
            dx = event.x - start.x;
            dy = event.y - start.y;
            rect_translate(rectID, dx,dy);
            redraw(rectID);  
            start.x = event.x;
            start.y = event.y;   
            
        }
    }

    for(i=0; i<rectangles.length; i++){
        rectangles[i].addEventListener('mousedown', startDrag);
        rectangles[i].addEventListener('touchstart', startDrag);

        rectangles[i].addEventListener('mouseup', endDrag);
        rectangles[i].addEventListener('touchend', endDrag);

        rectangles[i].addEventListener('mouseleave',endDrag);

        document.addEventListener('touchmove', dragMove)
        document.addEventListener('mousemove', dragMove)
    }

}


/*
var rect = application.getRectById(1); 
rect.setSize(100, 100); 
rect.setPosition(10, 10); 
rect.setCornerRadius(5); 
expect(rect.toJSON()).eql({ id: 1, width: 100, height: 100, x: 10, y: 10, radius: 5 });
*/
