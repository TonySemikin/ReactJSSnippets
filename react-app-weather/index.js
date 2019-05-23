const electron = require('electron');
const path = require('path');
const { app, BrowserWindow, Tray, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 850,
    width: 1200,
    frame: false,
    resizable: false,
    transparent: true,
    show: true,
    webPreferences: { backgroundThrottling: false },
  });

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  // Menu.setApplicationMenu(mainMenu);

  const iconPath = path.join(__dirname, `./assets/intoTask_logo_transparent_B_16px_default.png`);

  new Tray(iconPath, mainWindow);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

const menuTemplate = [
  {
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    label: 'Tasks',
    submenu: [
      {
        label: 'Create New Task',
        accelerator: process.platform === 'darwin' ? 'Command+N' : 'Ctrl+N',
      },
      {
        label: 'Assign Task',
        accelerator: process.platform === 'darwin' ? 'Command+Shift+A' : 'Ctrl+Shift+A',
      },
      {
        label: 'Delete Task',
        accelerator: process.platform === 'darwin' ? 'Command+D' : 'Ctrl+D',
      },
    ],
  },
  {
    label: 'Messages',
    submenu: [
      {
        label: 'See Messages',
        accelerator: process.platform === 'darwin' ? 'Command+N' : 'Ctrl+N',
      },
    ],
  },
  {
    label: 'People',
    submenu: [
      {
        label: 'See People',
        accelerator: process.platform === 'darwin' ? 'Command+Shift+Alt+P' : 'Ctrl+N',
      },
    ],
  },
];
