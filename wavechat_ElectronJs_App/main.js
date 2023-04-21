const { app, BrowserWindow } = require("electron");
const fs = require("fs");

//const { winHeight, winWidth } = require("settings.json");
function createWindow() {
     const data = JSON.parse(fs.readFileSync("settings.json"));
     // Create the browser window.
     let win = new BrowserWindow({
          width: data.winWidth,
          height: data.winHeight,
          icon: "icon.png",
          webPreferences: {
               nodeIntegration: true,
          },
     });
     
     win.setMenuBarVisibility(false);
     // and load the index.html of the app.
     win.loadFile("index.html");
}

// DATABASE TESTS
app.whenReady().then(createWindow);