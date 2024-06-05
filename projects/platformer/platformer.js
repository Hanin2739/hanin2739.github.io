$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
     createPlatform(750,680,450,15);
     createPlatform(195,680,450,15);
     createPlatform(472,578,450,15);
     createPlatform(1000,500,300,15);
     createPlatform(130,480,300,15);
     createPlatform(130,380,200,15);
     createPlatform(1100,385,200,15);
     createPlatform(472,370,450,15);
     createPlatform(575,250,250,15);
     createPlatform(850,130,450,15);
     createPlatform(130,130,450,15);
     
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable('database', 550,480,24,0.5);
    createCollectable('database',800,480,24,0.5);
    createCollectable('database',214,310,24,0.5);
    createCollectable('database',1174,315,24,0.5);
    createCollectable('database',265,585,24,0.5);
    createCollectable('database',535,585,24,0.5);
    createCollectable('database',835,585,24,0.5);
    createCollectable('database',1090,585,24,0.5);
    createCollectable('database', 725,200,24,0.5);
    createCollectable('database',635,200,24,0.5);
    createCollectable('database',200,90,24,0.5);
    createCollectable('database',460,90,24,0.5);
    createCollectable('database',925,90,24,0.5);
    createCollectable('database',1190,90,24,0.5);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('top',300,1000);
    createCannon('bottom',642,1000);
    createCannon('top',758,1000);
    createCannon('top',1200,1000);


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
