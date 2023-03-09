const message = document.getElementById("detail");
const hour = document.getElementById("hour");
const min = document.getElementById("minute");
// const buzz = false;
// const beep = false;
// const vibrate = false;
// const reminderType = document.getElementById("type");



var connection;
document.getElementById("save").addEventListener("click", function() {
  
  // disconnect if connected already
  if (connection) {
    connection.close();
    connection = undefined;
  }
//

  // const msgValue = message.value;
  // const msgObj = {value: ""};
  // msgObj.value = msgValue;
  // const msgJSON = JSON.stringify(msgObj);
  // const time = JSON.stringify(hour.value * 3600000 + min.value * 60000);
//   function loadAlarm() {
//     var alarms = require("sched").getAlarms();
//     var alarm = require("sched").newDefaultAlarm();
//     alarm.msg = JSON.stringify(message.value);
//     alarm.time = hour.value * 3600000 + min.value * 60000;
//     alarms.push(alarm);
//     require("sched").setAlarm(alarms);
//     require("sched").reload();
    
// Bangle.buzz();
// Bangle.setLCDPower(1);
//   }
  var BANGLE_CODE = `
    Bangle.loadWidgets();
    Bangle.drawWidgets();
    require("sched").getAlarms();
    require("sched").newDefaultAlarm();
    require("sched").setAlarm("myalarm", () {
      msg: "Hello",
      t: 3*3600000
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
    connection.write("reset();\n", function () {
        // Wait for it to reset itself
        setTimeout(function () {
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
// 

// const list = document.querySelector('#myUL');
// const input = document.querySelector('#usrInput');
// const button = document.querySelector('#addBtn');
// button.addEventListener('click', () => {
//     const myItem = input.value;
//     input.value = '';
//     const listItem = document.createElement('li');
//     listItem.textContent = myItem;
//     const listBtn = document.createElement('button');
//     listBtn.textContent = "Delete";
//     listItem.appendChild(listBtn);
//     list.appendChild(listItem);
//     listBtn.addEventListener('click', () => {
//         list.removeChild(listItem);
//     });
//     input.focus();
// });
