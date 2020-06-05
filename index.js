const electron = require('electron');
const {app, BrowserWindow, Tray} = electron;
const path = require('path');
const TimerTray = require('./app/timer_tray');

let mainWindow;
let tray;

app.on('ready', ()=> {
	if(process.platform === 'darwin') {app.dock.hide();};
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
		},
		height: 500,
		width: 300,
		resizable: false,
		frame: false,
		show: false,
		skipTaskbar:true
	});
	mainWindow.loadFile('./src/index.html');
	mainWindow.on('blur', ()=>{
		mainWindow.hide();
	});

	const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
	const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
	tray = new TimerTray(iconPath, mainWindow);
});

