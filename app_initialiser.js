
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
} //end of app

app_init.getRectById = function(Identifier){ //return the object of the rectangle
    return window.currentState[Identifier];
}