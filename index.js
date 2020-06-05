const electron = require('electron');
const {app, BrowserWindow, Tray} = electron;
const path = require('path');

let mainWindow;
let tray;

app.on('ready', ()=> {
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
		},
		height: 500,
		width: 300,
		resizable: false,
		frame: false,
		show: false,
	});
	mainWindow.loadFile('./src/index.html');

	const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
	const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
	tray = new Tray(iconPath);
	tray.on('click', (event, bounds)=>{
		//click event bounds
		const { x, y } = bounds;
		// Window height & width
		const { height, width} = mainWindow.getBounds();

		if (mainWindow.isVisible()) {
			mainWindow.hide();
		} else {
			mainWindow.setBounds({
				x: x - width/2,
				y: y - height,
				height,				// height: height,
				width				// width: width	(ES6)	
			})
			mainWindow.show(); 
		}
	});
});

