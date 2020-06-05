const electron = require('electron');
const {app, BrowserWindow} = electron;

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
});