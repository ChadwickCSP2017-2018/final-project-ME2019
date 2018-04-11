var WINDOW_WIDTH = screen.width - (screen.width/5);
var WINDOW_HEIGHT = screen.height - (screen.height/4);
var BACKGROUND_COLOR = 0;

// TODO: Make the buttons work
// How to button
// Start button

  Title title = new Title();


void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window
  frameRate(30); //how many times the draw function is called per second
}


void draw() {
  background(BACKGROUND_COLOR); //needed in the draw function to "clear" the screen between updates

  title.drawTitle();

}

// Title

class Title {

  var xPosition, yPosition, width, height;

  Title() {

    xPosition = WINDOW_WIDTH/2;
    yPosition = WINDOW_HEIGHT/4;
    width = WINDOW_WIDTH/20;
    height = WINDOW_HEIGHT/5;
  }

  void drawTitle(){

    noStroke();
    fill(color(255, 255, 255));
    //d
    rect(xPosition - xPosition/2.5, yPosition, width/2, height);
    rect(xPosition - xPosition/2.5 - width/1.3, yPosition + height/2, width, height/2);
    fill(color(0, 0, 0));
    rect(xPosition - xPosition/2.5 - width/1.7, yPosition + height/4 * 2.7, width/2, width/2);
    //S
    fill(color(255, 255, 255));
    rect(xPosition - xPosition/3.5, yPosition, width * 1.6, height/4);
    rect(xPosition - xPosition/3.5, yPosition, width/2, height/2);
    rect(xPosition - xPosition/3.5, yPosition + yPosition/3, width * 1.6, height/4);
    rect(xPosition - xPosition/3.5 + width * 1.09, yPosition + yPosition/3, width/2, height/2);
    rect(xPosition - xPosition/3.5, yPosition + yPosition/1.5, width * 1.6, height/4);
    //T
    rect(xPosition, yPosition, width/1.5, height + height/3);
    rect(xPosition - xPosition/10, yPosition, width * 6.25, height/3);
    //r
    rect(xPosition + xPosition/8, yPosition + yPosition/2.5, width/4, height/2);
    rect(xPosition + xPosition/8, yPosition + yPosition/2.5, width * 4, height/5);
    //y
    rect(xPosition + xPosition/6, yPosition + yPosition/1.5, width/4, height/3);
    rect(xPosition + xPosition/6, yPosition + yPosition/1.5 + yPosition/5.5, width, height/10);
    rect(xPosition + xPosition/6 + xPosition/12, yPosition + yPosition/1.5, width/4, height/1.5);
    rect(xPosition + xPosition/6, yPosition + yPosition/1.5 + yPosition/2.23, width, height/10);
    rect(xPosition + xPosition/6, yPosition + yPosition/1.5 + yPosition/3, width/4, height/5);
    //r
    rect(xPosition + xPosition/3.5, yPosition + yPosition/1.5, width/4, height/2);
    rect(xPosition + xPosition/3.5, yPosition + yPosition/1.5, width * 2.4, height/5);
  }


}


// "How To" button

class HowTo {

}



// Start button
