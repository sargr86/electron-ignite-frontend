const {app, BrowserWindow, Menu} = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  // mainWindow.setIcon(path.join(__dirname, '/src/assets/images/png/logo.png'));

  // load the dist folder from Angular
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  ).then(r => r);

  // The following is optional and will open the DevTools:
  // mainWindow.webContents.openDevTools();

  // Building menu from given template
  const mainMenuTemplate = [
    {
      label: 'File',
      submenu: [
        {role: 'reload'},
        {type: 'separator'},
        {
          label: 'Exit',
          click() {
            app.quit();
          }
        }
      ]
    }
  ];

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  // Insert menu
  Menu.setApplicationMenu(mainMenu);

  // Handles closing the main window
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
