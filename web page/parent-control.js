var message = document.getElementById("detail").value;
var time = document.getElementById("hour").value * 3600000) + (document.getElementById("minute").value * 60000;
// var BANGLE_CODE = `
// Bangle.loadWidgets();
// Bangle.drawWidgets();
// require("sched").getAlarms();
// require("sched").newDefaultAlarm();
// require("sched").setAlarm("myalarm", {
//   t: (2 * 3600000) + (16 * 60000),
// });
// require("sched").reload();
// Bangle.buzz();
// Bangle.setLCDPower(1);
// E.showMessage(message).then(function(v) {
//   if (v) print("'Yes' chosen");
//   else print("'No' chosen");
// });
// `;

var BANGLE_CODE = `
Bangle.loadWidgets();
Bangle.drawWidgets();
require("sched").getAlarms();
require("sched").newDefaultAlarm();
require("sched").setAlarm("myalarm", {
  msg: message,
  t: time,
  rp: 
});
require("sched").reload();
Bangle.buzz();
Bangle.setLCDPower(1);
E.showMessage(message).then(function(v) {
  if (v) print("'Yes' chosen");
  else print("'No' chosen");
});
`;

var connection;
document.getElementById("save").addEventListener("click", function() {
  // disconnect if connected already
  if (connection) {
    connection.close();
    connection = undefined;
  }

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
