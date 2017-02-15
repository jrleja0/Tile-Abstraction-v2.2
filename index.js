
  
var mainCanvas = document.getElementById('mainCanvas');
var start = document.getElementById('start');


//-- getting "tile" canvas elements in DOM --//
var canvas0 = document.getElementById("tileCanvas1");
var canvas1 = document.getElementById("tileCanvas2");
var canvas2 = document.getElementById("tileCanvas3");
var canvas3 = document.getElementById("tileCanvas4");
var canvas4 = document.getElementById("tileCanvas5");
var canvas5 = document.getElementById("tileCanvas6");
var canvas6 = document.getElementById("tileCanvas7");
var canvas7 = document.getElementById("tileCanvas8");
var canvas8 = document.getElementById("tileCanvas9");
var canvas9 = document.getElementById("tileCanvas10");
var canvas10 = document.getElementById("tileCanvas11");
var canvas11 = document.getElementById("tileCanvas12");
var canvas12 = document.getElementById("tileCanvas13");
var canvas13 = document.getElementById("tileCanvas14");
var canvas14 = document.getElementById("tileCanvas15");
var canvas15 = document.getElementById("tileCanvas16");
//-- END -- getting "tile" canvas elements in DOM --//

//-- array of all "tile" canvases --//
var canvases = document.querySelectorAll('canvas');
var canvasArray = [canvas0, canvas1, canvas2, canvas3, canvas4, canvas5, canvas6, canvas7, canvas8, canvas9, canvas10, canvas11, canvas12, canvas13, canvas14, canvas15];


// Github hosted images //
// RED TILE //
var redTileImage = new Image();
var redTile = document.createElement("canvas");
redTile.style.visibility = "hidden";
var ctxR = redTile.getContext("2d");
// var src = "https://raw.githubusercontent.com/jrleja0/tile-swapping-game-jrleja0/master/Image/covent_garden.jpg"
// var src = "file:///Users/jrleja/Documents/Tile%20App%202_4%20Colors/Abstraction_files/Red%20Tile.jpeg";
var srcR = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Red%20Tile.jpeg";

redTileImage.crossOrigin = "Anonymous";

redTileImage.onload = function() {
    redTile.width = redTileImage.width;
    redTile.height = redTileImage.height;
    ctxR.drawImage(redTileImage, 0, 0);
}

redTileImage.src = srcR;

// BLUE TILE //
var blueTileImage = new Image();
var blueTile = document.createElement("canvas");
blueTile.style.visibility = "hidden";
var ctxB = blueTile.getContext("2d");
var srcB = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Blue%20Tile.jpeg";

blueTileImage.crossOrigin = "Anonymous";

blueTileImage.onload = function() {
    blueTile.width = blueTileImage.width;
    blueTile.height = blueTileImage.height;
    ctxB.drawImage(blueTileImage, 0, 0);
}

blueTileImage.src = srcB;

// GREEN TILE //
var greenTileImage = new Image();
var greenTile = document.createElement("canvas");
greenTile.style.visibility = "hidden";
var ctxG = greenTile.getContext("2d");
var srcG = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Green%20Tile.jpeg";

greenTileImage.crossOrigin = "Anonymous";

greenTileImage.onload = function() {
    greenTile.width = greenTileImage.width;
    greenTile.height = greenTileImage.height;
    ctxG.drawImage(greenTileImage, 0, 0);
}

greenTileImage.src = srcG;

// YELLOW TILE //
var yellowTileImage = new Image();
var yellowTile = document.createElement("canvas");
yellowTile.style.visibility = "hidden";
var ctxY = yellowTile.getContext("2d");
var srcY = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Yellow%20Tile.jpeg";

yellowTileImage.crossOrigin = "Anonymous";

yellowTileImage.onload = function() {
    yellowTile.width = yellowTileImage.width;
    yellowTile.height = yellowTileImage.height;
    ctxY.drawImage(yellowTileImage, 0, 0);
}

yellowTileImage.src = srcY;
/////////////////////////////////
// END of Github hosted image //


//--//--//--//--//--//--//----//--//--//--//--//--//--//
//--//--//--//--//-- START FUNCTION --//--//--//--//--//

var start = function() {
    
  function rotate0(canvas, tileColor) {
    tileColor = this.tileColor || tileColor;
    canvas.style.display = "block";
    var cx = canvas.getContext("2d");
    //cx.clearRect(0, 0, canvas.width, canvas.height);   
    cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.width, canvas.height);
    return [canvas, tileColor];
  }  
    
    function rotate90(canvas, tileColor) {      
      tileColor = this.tileColor || tileColor;
      canvas.style.display = "block";
      var cx = canvas.getContext("2d"); 
      cx.save();
      cx.translate(canvas.width, 0);
      cx.rotate(90*Math.PI/180);    
      //cx.clearRect(0, 0, canvas.height, canvas.width);   
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.height, canvas.width);
      cx.restore();
      return [canvas, tileColor];
    }           
     
    function rotate180(canvas, tileColor) {  
      tileColor = this.tileColor || tileColor;
      canvas.style.display = "block";
      var cx = canvas.getContext("2d");
      cx.save();
      cx.translate(canvas.width, canvas.height);
      cx.rotate(180*Math.PI/180);
      //cx.clearRect(0, 0, canvas.width, canvas.height);   
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.width, canvas.height);
      cx.restore();
      return [canvas, tileColor];
    }
  
    function rotate270(canvas, tileColor) { 
      tileColor = this.tileColor || tileColor;
      canvas.style.display = "block";
      var cx = canvas.getContext("2d");
      cx.save();
      cx.translate(0, canvas.height);
      cx.rotate(270*Math.PI/180);
      //cx.clearRect(0, 0, canvas.height, canvas.width);   
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.height, canvas.width);
      cx.restore();
      return [canvas, tileColor];
    }

    function clearCanvas(canvas) {
      var cx = canvas.getContext("2d");
      cx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
  
  
///  
/// Calling Functions:
///     
  
  var tilePath0 = [canvas0, canvas4, canvas8, canvas12, canvas12, canvas13, canvas13, canvas9, canvas5, canvas1, canvas1, canvas0]
  var tilePath2 = [canvas2, canvas6, canvas10, canvas14, canvas14, canvas15, canvas15, canvas11, canvas7, canvas3, canvas3, canvas2];
  var tilePath4 = [canvas4, canvas4, canvas8, canvas8, canvas9, canvas10, canvas11, canvas11, canvas7, canvas7, canvas6, canvas5];
  var tilePath5 = [canvas5, undefined, undefined, canvas6, canvas7, canvas4, canvas5, undefined, undefined, canvas6, canvas7, canvas4];
  var tilePath6 = [canvas6, undefined, undefined, canvas5, canvas4, canvas7, canvas6, undefined, undefined, canvas5, canvas4, canvas7];
  var tilePath9 = [canvas9, undefined, undefined, canvas10, canvas11, canvas8, canvas9, undefined, undefined, canvas10, canvas11, canvas8];
  var tilePath10 = [canvas10, undefined, undefined, canvas9, canvas8, canvas11, canvas10, undefined, undefined, canvas9, canvas8, canvas11]; 
  
  // pathEditClock() creates a new clockwise path from the original counter-clockwise path.
  function pathEditClock(path, startIndex) {
    var newPath = [];
    //var startIndex = [path.length-3]
    for (var i = startIndex; i >= 0; i--)
        newPath.push(path[i]);
    for (var j = path.length-1; j > startIndex; j--)
        newPath.push(path[j]);
    return newPath;    
  }
  
  // pathEditCounter() creates a new counter-clockwise path from the original counter-clockwise path.
  function pathEditCounter(path, startIndex) {
    var newPath = [];
    for (var i = startIndex; i < path.length; i++)
      newPath.push(path[i]);
    for (var j = 0; j < startIndex; j++)
      newPath.push(path[j]);
    return newPath;
  }


  var tilePath1 = pathEditClock(tilePath0, 9);
  var tilePath3 = pathEditClock(tilePath2, 9);
  var tilePath12 = pathEditClock(tilePath0, 3);
  var tilePath13 = pathEditCounter(tilePath0, 6);
  var tilePath14 = pathEditClock(tilePath2, 3);
  var tilePath15 = pathEditCounter(tilePath2, 6);
  var tilePath8 = pathEditClock(tilePath4, 9);
  var tilePath11 = pathEditCounter(tilePath4, 6);
  var tilePath7 = pathEditClock(tilePath4, 3);
  

 function TileObj(path) {
   //this.tileColor = tileColor;     
   this.path = path;
   this.rotate0 = rotate0;
   this.rotate90 = rotate90;
   this.rotate180 = rotate180;
   this.rotate270 = rotate270;
 }
  
   
  function RedTileObj(path) {
    this.tileColor = redTile;    
    this.path = path;
  }
  
  function BlueTileObj(path) {
    this.tileColor = blueTile;
    this.path = path;
  }
  
  function GreenTileObj(path) {
    this.tileColor = greenTile;
    this.path = path;
  }
  
  function YellowTileObj(path) {
    this.tileColor = yellowTile;
    this.path = path;
  }
  
  RedTileObj.prototype = new TileObj();
  BlueTileObj.prototype = new TileObj();
  GreenTileObj.prototype = new TileObj();
  YellowTileObj.prototype = new TileObj();
       

  var red_1 = new RedTileObj(tilePath0);
  red_1.direction = "counterTop";
  red_1.rotate270(canvas0);
  
    
  var blue_1 = new BlueTileObj(tilePath1);
  blue_1.direction = "clockTop";
  blue_1.rotate90(canvas1);
  
  
  var red_2 = new RedTileObj(tilePath2);
  red_2.direction = "counterTop";
  red_2.rotate270(canvas2);
  
  
  var blue_2 = new BlueTileObj(tilePath3);
  blue_2.direction = "clockTop";
  blue_2.rotate90(canvas3);
    
    
  var red_3 = new RedTileObj(tilePath13);
  red_3.direction = "counterBottom";
  red_3.rotate90(canvas13);
  
    
  var blue_3 = new BlueTileObj(tilePath12);
  blue_3.direction = "clockBottom";
  blue_3.rotate270(canvas12);
  
  
  var red_4 = new RedTileObj(tilePath15);
  red_4.direction = "counterBottom";
  red_4.rotate90(canvas15);
  
  
  var blue_4 = new BlueTileObj(tilePath14);
  blue_4.direction = "clockBottom";
  blue_4.rotate270(canvas14);
  
  
  var yellow_1 = new YellowTileObj(tilePath4);    // 90  0  270 180
  yellow_1.direction = "counterLeft";
  yellow_1.rotate180(canvas4);
  
    
  var green_1 = new GreenTileObj(tilePath8);     // 90 180 270 0 
  green_1.direction = "clockLeft";
  green_1.rotate0(canvas8);
  
  
  var yellow_2 = new YellowTileObj(tilePath11);    // 270 180 90 0
  yellow_2.direction = "counterRight";
  yellow_2.rotate0(canvas11);
  
  
  var green_2 = new GreenTileObj(tilePath7);    // 270 0 90 180
  green_2.direction = "clockRight";
  green_2.rotate180(canvas7);
  
  var yellow_3 = new YellowTileObj(tilePath6);    
  yellow_3.direction = "down";
  yellow_3.rotate180(tilePath6[0]);
  
  
  var green_3 = new GreenTileObj(tilePath5);    
  green_3.direction = "down";
  green_3.rotate180(tilePath5[0]);
  
  var yellow_4 = new YellowTileObj(tilePath9);   
  yellow_4.direction = "up";
  yellow_4.rotate0(tilePath9[0]);
  
  
  var green_4 = new GreenTileObj(tilePath10);    
  green_4.direction = "up";
  green_4.rotate0(tilePath10[0]);
  
  
  
  // //
  // Animate Tiles
  // //
  
  // direction: clockTop = clockwise from top // clockBottom = clockwise from bottom // 
  //            counterTop = counter-clockwise from top // clockbottom = counter-clockwise from bottom //
  function animateTile_Y(object, direction) {
      direction = object.direction || direction;
      var path = object.path; 
      var cyc = 0;  // cycle
      var rotateOrderArray = [];
      var tileColor = object.tileColor;
      if (direction === "clockTop") {
        rotateOrderArray = [object.rotate180, object.rotate270, object.rotate0, object.rotate90];
      }
      else if (direction === "clockBottom") {
        rotateOrderArray = [object.rotate0, object.rotate90, object.rotate180, object.rotate270];
      }    
      else if (direction === "counterTop") {
        rotateOrderArray = [object.rotate180, object.rotate90, object.rotate0, object.rotate270];
      }
      else if (direction === "counterBottom") {
        rotateOrderArray = [object.rotate0, object.rotate270, object.rotate180, object.rotate90];
      }          
           
        var loop_animate_Y = setInterval(function() {
            // erase previous tile at cyc = 1 7 for all; cyc = 3 9 for only paths: 0, 3, 12, 15 
             if (cyc === 1 || cyc === 7) 
               path[cyc-1].style.display = "none";
            if (path !== tilePath0 || path !== tilePath3 || path !== tilePath12 || path !== tilePath15) {
              if (cyc === 3 || cyc === 9)
                path[cyc-1].style.display = "none";
            }                  
                
            if (cyc < 4)
              rotateOrderArray[0](path[cyc], tileColor);  // rot180
            else if (cyc > 3 && cyc < 6)
              rotateOrderArray[1](path[cyc], tileColor);   // rot270
            else if (cyc > 5 && cyc < 10)
              rotateOrderArray[2](path[cyc], tileColor);   // rot0
            else if (cyc > 9)
              rotateOrderArray[3](path[cyc], tileColor);  // rot90            
                    
            cyc = (cyc+1) % path.length;                 
        }, 2400);  // medium speed: 800
    
  }
  
  
  function animateTile_X(object, direction) {
      direction = object.direction || direction;
      var path = object.path; 
      var cyc = 0;  // cycle
      var rotateOrderArray = [];
      var tileColor = object.tileColor;      
      if (direction === "clockLeft") {
        rotateOrderArray = [object.rotate90, object.rotate180, object.rotate270, object.rotate0];
      }
      else if (direction === "clockRight") {
        rotateOrderArray = [object.rotate270, object.rotate0, object.rotate90, object.rotate180];
      }    
      else if (direction === "counterLeft") {
        rotateOrderArray = [object.rotate90, object.rotate0, object.rotate270, object.rotate180];
      }
      else if (direction === "counterRight") {
        rotateOrderArray = [object.rotate270, object.rotate180, object.rotate90, object.rotate0];
      }
           
        var loop_animate_X = setInterval(function() {    // 0 3 6 9
              if (cyc === 4 || cyc === 6 || cyc === 10 || cyc === 0) {    // erase at cyc = 4 6 10 0
                var erase;
                cyc === 0 ? erase = 11 : erase = cyc-1; 
                path[erase].style.display = "none";
             } 
            
            if (cyc < 4 && cyc !== 1 && cyc !== 2)   // skip 1 2 7 8
              rotateOrderArray[0](path[cyc], tileColor);  
            else if (cyc > 3 && cyc < 6)
              rotateOrderArray[1](path[cyc], tileColor);   
            else if (cyc > 5 && cyc < 10 && cyc !== 7 && cyc !== 8)   // skip 1 2 7 8
              rotateOrderArray[2](path[cyc], tileColor);   
            else if (cyc > 9)
              rotateOrderArray[3](path[cyc], tileColor);             
                    
            cyc = (cyc+1) % path.length;                 
        }, 2400);  // medium speed: 800
    
  }
  
  
  function animateCenter(object) {       
      var cyc = 0;  // cycle
      var path = object.path;
      var direction = object.direction;
      var tileColor = object.tileColor;
      var loop_animate_center = setInterval(function() {
        if (cyc !== 1 && cyc !== 2 && cyc !== 7 && cyc !== 8) {
           if (path[cyc] === canvas4 || path[cyc] === canvas8)
              rotate90(path[cyc], tileColor);
           else if (path[cyc] === canvas7 || path[cyc] === canvas11)
              rotate270(path[cyc], tileColor);
           else if (direction === "up")
              rotate0(path[cyc], tileColor);
           else if (direction === "down")
              rotate180(path[cyc], tileColor);             
        }
        cyc = (cyc+1) % path.length;    
      }, 2400);  // medium speed: 800
    
  }    
  
  
  function animateEdges() {
      var cyc = 0;  // cycle
      var loop_animate_edges = setInterval(function() {
      if (cyc === 1 || cyc === 7) {
      rotate0(canvas0, greenTile);
      rotate0(canvas2, greenTile);
      rotate0(canvas1, yellowTile);
      rotate0(canvas3, yellowTile);        
      rotate180(canvas13, greenTile);
      rotate180(canvas15, greenTile);
      rotate180(canvas12, yellowTile);
      rotate180(canvas14, yellowTile);       
      }  
      else if (cyc === 2 || cyc === 8) {
      rotate0(canvas1, greenTile);
      rotate0(canvas3, greenTile);
      rotate0(canvas0, yellowTile);
      rotate0(canvas2, yellowTile);        
      rotate180(canvas12, greenTile);
      rotate180(canvas14, greenTile);
      rotate180(canvas13, yellowTile);
      rotate180(canvas15, yellowTile);            
      }        
      cyc = (cyc+1) % 12;  
    }, 2400);  // medium speed: 800       
  }
   
  
  /// ///
  // Starting the Animation Functions/Setting Intervals
  /// ///
  function startAnimationsTopRow() {  
    animateTile_Y(red_1);
    animateTile_Y(blue_1);     
    animateTile_Y(red_2);
    animateTile_Y(blue_2);   
  }
  
  function startAnimationsBottomRow() {
    animateTile_Y(red_3);
    animateTile_Y(blue_3);
    animateTile_Y(red_4);
    animateTile_Y(blue_4);
  }
  
  function startAnimationsMiddleRows() {
    animateTile_X(yellow_1);
    animateTile_X(green_1);
    animateTile_X(yellow_2);
    animateTile_X(green_2);    
  }
    
  function startAnimationsCenter() {
    animateCenter(yellow_3);
    animateCenter(green_3);
    animateCenter(yellow_4);
    animateCenter(green_4);   
  }  
  
  function startAnimations_All() {      
    startAnimationsTopRow();
    startAnimationsBottomRow();   
    startAnimationsMiddleRows();
    startAnimationsCenter();
    animateEdges();
  }
    
  startAnimations_All();     

  
}