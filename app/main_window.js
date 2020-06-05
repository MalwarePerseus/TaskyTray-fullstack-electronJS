const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
	constructor(filePath){
		super({
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
		this.loadFile(filePath);
		this.on('blur', this.onBlur.bind(this));
		}

		onBlur(){
			this.hide();
		}
}

module.exports = MainWindow;