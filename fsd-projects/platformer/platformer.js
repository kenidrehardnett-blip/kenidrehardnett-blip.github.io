$(() => {
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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
 createPlatform(400, 700, 200, 10);
  createFakePlatform(700, 630, 150, 10);
  createPlatform(500, 530, 150, 10);
  createPlatform(700, 630, 20, 10);
  createPlatform(300, 450, 100, 10);
  createPlatform(570, 313, 95, 10);
  // TODO 3 - Create Collectables
  createCollectable("database", 570, 170, 0.5, 0.7);
  createCollectable("database", 620, 170, 0.5, 0.7);
  createCollectable("database", 320, 170, 0.5, 0.7);
 // TODO 4 - Create Cannons
 createCannon("top", 800, 1200);
  createCannon("right", 475, 1200);
  createCannon("left", 150, 1200);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
