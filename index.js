const electron = require('electron');
const {app, BrowserWindow, Tray} = electron;
const path = require('path');

let mainWindow;

app.on('ready', ()=> {
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
		},
		height: 500,
		width: 300,
		resizable: false,
		frame: false,

	});
	mainWindow.loadFile('./src/index.html');

	const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
	const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
	new Tray(iconPath);
});

