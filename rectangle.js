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
        window.currentState[i] = new rectangle( curr.id,
                                                curr.x,
                                                curr.y,
                                                curr.width,
                                                curr.height,
                                                curr.radius);
    }


    this.getRectById = function(Identifier){ //return the object of the rectangle
        return window.currentState[Identifier];
    }

} //end of app

function rectangle(id, x = 0, y = 0, width = 100, height = 100, radius = 0){
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.element;

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
        rect.style.borderRadius = `${this.radius}px`;
        app.appendChild(rect);
        return rect;
    }
    this.element = this.draw();

    this.redraw = function(){
        var rect = document.querySelector(`[rect-data="${this.id}"]`); //get the edited element
        rect.style.width = window.currentState[this.id].width + "px";
        rect.style.height = window.currentState[this.id].height + "px";
        rect.style.left = window.currentState[this.id].x + "px";
        rect.style.top = window.currentState[this.id].y + "px";
        rect.style.borderRadius = window.currentState[this.id].radius + "px";
        return true;
    }

    
    this.toJSON = function(){
        return { id: this.id, width: this.width, height: this.height, x: this.x, y: this.y, radius: this.radius };
    }

    this.setSize = function(width, height){
        this.width = width;
        this.height = height;
        this.redraw();
    }

    this.getPosition = function(){
        return {x: window.currentState[this.id].x, y: window.currentState[this.id].y};
    }

    this.setPosition = function(x, y){
        window.currentState[this.id].x = x;
        window.currentState[this.id].y = y;
        this.redraw();
    }

    this.setCornerRadius = function(radius){
        this.x = x;
        this.y = y;
        this.redraw();
    }

    var mousedown = false;
    var start = {};

    function startDrag(event){
        mousedown = true;
        start.x = event.x;
        start.y = event.y;         
        event.target.style.zIndex = 100;
    }
    function endDrag(event){
        mousedown = false;
        start.x = null;
        start.y = null; 
        event.target.style.zIndex = 0;  
    }

    this.dragMove = function(event){
        if(mousedown == false){
            //do nothing
        }else{
            dx = event.x - start.x;
            dy = event.y - start.y;
            current = this.getPosition();
            this.setPosition(current.x + dx, current.y + dy);
            this.redraw();
            start.x = event.x;
            start.y = event.y;
            
        }
    }
    
    this.element.addEventListener('mousedown', startDrag);
    this.element.addEventListener('touchstart', startDrag);

    this.element.addEventListener('mouseup', endDrag);
    this.element.addEventListener('touchend', endDrag);

    this.element.addEventListener('mouseleave',endDrag);

    document.addEventListener('touchmove', this.dragMove.bind(this))
    document.addEventListener('mousemove', this.dragMove.bind(this))

} //end of rectangle



/*
var rect = application.getRectById(1); 
rect.setSize(100, 100); 
rect.setPosition(10, 10); 
rect.setCornerRadius(5); 
expect(rect.toJSON()).eql({ id: 1, width: 100, height: 100, x: 10, y: 10, radius: 5 });
*/
