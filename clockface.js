require("Font7x11Numeric7Seg").add(Graphics);
// position on screen
const X = 125, Y = 60;

function draw() {
  // work out how to display the current time
  var d = new Date();
  var h = d.getHours(), m = d.getMinutes();
  var time = (" "+h).substr(-2) + ":" + m.toString().padStart(2,0,10);
  // Reset the state of the graphics library
  g.reset();
  // draw the current time (4x size 7 segment)
  g.setFont("7x11Numeric7Seg",3);
  g.setFontAlign(1,1); // align right bottom
  g.drawString(time, X, Y, true /*clear background*/);
  // draw the seconds (2x size 7 segment)
  g.setFont("7x11Numeric7Seg",1);
  g.drawString(("0"+d.getSeconds()).substr(-2), X+15, Y, true /*clear background*/);
  // draw the date, in a normal font
  g.setFont("6x8",2);
  g.setFontAlign(0,2); // align center bottom
  // pad the date - this clears the background if the date were to change length
  var dateStr = "    "+require("locale").date(d)+"    ";
  g.drawString(dateStr, g.getWidth()/2, Y+17, true /*clear background*/);
  if (d.getHours() >=5 && d.getHours() < 18) g.setBgColor(g.setBgColor(0x0000FF)); // blue - day
  else g.setBgColor(0); // black - night
}

function bg() {
  var d = new Date();
  if (d.getHours() == 1) {
    if (d.getMinutes == 59 && d.getSeconds() == 59) {
      g.getBgColor(); 
      g.fillCircle(0,175,10);
    }
    g.setColor(0x808080);
    g.fillCircle(1,162,10);
  } else if (d.getHours() == 2) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(7,170,10);
      }
    g.setColor(0x808080);
    g.fillCircle(3,152,10);
  } else if (d.getHours() == 3) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(1,162,10);
      }
    g.setColor(0x808080);
    g.fillCircle(7,141,10);
  } else if (d.getHours() == 4) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(7,141,10);
      }
    g.setColor(0x808080);
    g.fillCircle(12,131,10);
  } else if (d.getHours() == 5) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(12,131,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(18,122,10);
  } else if (d.getHours() == 6) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(18,122,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(25,114,10);
  } else if (d.getHours() == 7) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(25,114,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(35,106,10);
  } else if (d.getHours() == 8) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(35,106,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(44,100,10);
  } else if (d.getHours() == 9) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(44,100,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(53,95,10);
  } else if (d.getHours() == 10) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(53,95,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(65,91,10);
  } else if (d.getHours() == 11) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(65,91,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(72,89,10);
  } else if (d.getHours() == 12) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(72,89,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(88,88,10);
  } else if (d.getHours() == 13) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(88,88,10);
      }
    g.setColor(0XFFFF00);
    g.fillCircle(100,89,10);
  } else if (d.getHours() == 14) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(100,89,10);
      }
      g.setColor(0XFFFF00);
      g.fillCircle(109,91,10);
  } else if (d.getHours() == 15) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(109,91,10);
      }
      g.setColor(0XFFFF00);
      g.fillCircle(121,95,10);
  } else if (d.getHours() == 16) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(121,95,10);
      }
      g.setColor(0XFFFF00);
      g.fillCircle(131,100,10);
  } else if (d.getHours() == 17) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(131,100,10);
      }
      g.setColor(0XFFFF00);
      g.fillCircle(141,106,10);
  } else if (d.getHours() == 18) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(141,106,10);
      }
      g.setColor(0x808080);
      g.fillCircle(150,114,10);
  } else if (d.getHours() == 19) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(150,114,10);
      }
      g.setColor(0x808080);
      g.fillCircle(157,122,10);
  } else if (d.getHours() == 20) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(157,122,10);
      }
      g.setColor(0x808080);
      g.fillCircle(164,131,10);
  } else if (d.getHours() == 21) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(164,131,10);
      }
      g.setColor(0x808080);
      g.fillCircle(168,141,10);
  } else if (d.getHours() == 22) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
        g.getBgColor();
        g.fillCircle(168,141,10);
      }
    g.setColor(0x808080);
    g.fillCircle(172,152,10);
  } else if (d.getHours() == 23) {
      if (d.getMinutes == 59 && d.getSeconds() == 59) {
    g.getBgColor();
    g.fillCircle(172,152,10);
      }
    g.setColor(0x808080);
    g.fillCircle(174,162,100);
  } else {
    if(d.getMinutes >= 30) {
      g.getBgColor();
      g.fillCircle(175,175,10);
      g.setColor(0x808080);
      g.fillCircle(0,175,10);
    } else {
      g.getBgColor();
      g.fillCircle(174,162,100);
      g.setColor(0x808080);
      g.fillCircle(175,175,10);
    }
  }
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
bg();
// now draw every second
var secondInterval = setInterval(draw, 1000);
var background = setInterval(bg, 3600000);
//g.drawImage(require("Storage").read("sun.img"),0,0,10);
// Stop updates when LCD is off, restart when on
Bangle.on('lcdPower',on=>{
  if (secondInterval) clearInterval(secondInterval);
  secondInterval = undefined;
  background = undefined;
  if (on) {
    secondInterval = setInterval(draw, 1000);
    draw(); // draw immediately
    background = setInterval(bg, 3600000);
    bg();
  }
});

/* Show launcher when middle button pressed
This should be done *before* Bangle.loadWidgets so that widgets know if they're being loaded into a clock app or not */
Bangle.setUI("clock");
// Load widgets
Bangle.loadWidgets();
Bangle.drawWidgets();

/**
./TCPEchoServer 4400 5
-> server: port 4400, 5 child process
./TCPEchoClient 127.0.0.1 "H" 4400
-> client: 
each cmd gives each child to process

use $ps -a to see the processes
The child process runs forever, could kill them with $kill -kill ID

if (processID = fork() < 0)
-> use fork() to make child process first,
-> then assign processID() = fork()
-> then check if it is less than 0
*/