const message = document.getElementById("detail");
const hour = document.getElementById("hour");
const min = document.getElementById("minute");

var connection;
document.getElementById("save").addEventListener("click", function() {
  // disconnect if connected already
  if (connection) {
    connection.close();
    connection = undefined;
  }

// set snooze
// test 2 alarms at the same time
  var BANGLE_CODE = `
Bangle.loadWidgets();
Bangle.drawWidgets();
require("sched").getAlarms();
require("sched").newDefaultAlarm();
require("sched").setAlarm("myalarm", {
  msg: "${mess}",
  t: ${time},
  rp: true
});
require("sched").reload();
Bangle.buzz();
Bangle.setLCDPower(1);
`;
  
  // Connect
  Puck.connect(function(c) {
    if (!c) {
      alert("Couldn't connect!");
      return;
    }
    connection = c;
    // First, reset the Bangle
    connection.write("reset();\n", function() {
      // Wait for it to reset itself
      setTimeout(function() {
        // Now upload our code to it
        connection.write(BANGLE_CODE);
      }, 1000);
    });

  });
});

// create a button to connect the watch first
// maybe load the alarms from the watch to the web page
// if alarms are loaded, maybe create a button to delete alarm

// create a button to add new alarm
// create a button to save it into the watch
// hide the alarm icon on watch bar
// maybe remove the alarm app from the watch so the kids could not modify the alarm

// create a parent div element
// create child div element x 6
// create h2 element x 6
// create input element x 6
// append child div to parent div
// append child h2 and input to div
