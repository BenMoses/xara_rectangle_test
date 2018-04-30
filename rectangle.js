//window.rectanglesData == [{},{},{}]

//init : 
/*
var application = document.querySelector('#app');

var rectangle = (id, x, y, width, height, radius){

}
*/

function app(initialValues){

    var app = document.querySelector('#app');
    this.currentState = {};
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
    for(i=0; i<initialValues.length; i++){
        var curr = initialValues[i];
        this.currentState[i] = new rectangle(curr.id,
                                        curr.x,
                                        curr.y,
                                        curr.width,
                                        curr.height,
                                        curr.radius);
    }

    this.getRectById = function(Identifier){ //return the object of the rectangle
        return this.currentState[Identifier];
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


function initRectangleControls(){
    var rectangles = document.querySelectorAll('.rectangle');
    var rectangle;
    var mousedown = false;
    var current = {};
    var rectID;

    for(i=0; i<rectangles.length; i++){
        rectangles[i].addEventListener('mousedown', function(ev){
            mousedown = true;            
        })
        rectangles[i].addEventListener('mouseup', function(ev){
            mousedown = false;
        })

        rectangles[i].addEventListener('mousemove', function(ev){
            if(mousedown == false){
                //do nothing
            }else{
                rectID = this.getAttribute('rect-data');
                rectangle = app.getRectById(rectID);
                rectangle.setPosition(10,10);
            }
            
        })

        
        
    }

}


/*
var rect = application.getRectById(1); 
rect.setSize(100, 100); 
rect.setPosition(10, 10); 
rect.setCornerRadius(5); 
expect(rect.toJSON()).eql({ id: 1, width: 100, height: 100, x: 10, y: 10, radius: 5 });
*/

