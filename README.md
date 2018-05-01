# xara_rectangle_test
Xara editable rectangle test answer by Benjamin Moses
Rounded Rectangle edit test

This is a simple test of your Javascript / CSS / HTML and architectural skills.

Please create a small single page application that allows for editing of rectangles with rounded corners. The application should accept the list with rectangles data that will be available as a global variable called rectanglesData. It should draw those rectangles and allow for basic editing capabilities:

    Editing corner radius by dragging corner handle (all of the corners simultaneously by dragging one corner handle). The rectangle with corner handle may look like thisDescription: Description: Description: Description: image
    Moving rectangles around by dragging them

Each rectangle should also have an API that allows for:

    Setting its position on the screen: rectangle.setPosition(100,200);
    Setting its size: rectangle.setSize(50, 60);
    Setting the corner radius: rectangle.setCornerRadius(10);
    Serialising its state to JSON data: rectangle.toJSON(); Object returned by that invocation should contain rectangle’s id, x, y, width, height and radius.

The application should also allow for accessing particular rectangle object by its id with API call application.getRectById(1);, so we can use automatic tests to check if your solution behaves correctly. The simplest test looks like this:

var rect = application.getRectById(1); rect.setSize(100, 100); rect.setPosition(10, 10); rect.setCornerRadius(5); expect(rect.toJSON()).eql({ id: 1, width: 100, height: 100, x: 10, y: 10, radius: 5 });

You can use the following list to initialize the application:

window.rectanglesData = [ { id: 0, x: 100, y: 100, width: 200, height: 150, radius: 10 }, { id: 1, x: 400, y: 150, width: 300, height: 100, radius: 30 }, { id: 2, x: 150, y: 400, width: 250, height: 150, radius: 20 } ];

We prefer solutions that don’t use any external libraries - it should work at least in current Chrome, IE and Firefox, and ideally on current iOS and Android tablets.
Documentation

The code should be written to a professional standard so that others can easily understand how you’ve done it.

In addition, there should be accompanying documentation giving an overview of the methodologies and why you have made the decisions you have.

Ideally please send zip file with your solution for this test, but also publish your solution and provide the URL, so it’s easy for us to try them out in different browsers and devices.
