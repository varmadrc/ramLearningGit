const {app, BrowserWindow} = require('electron');

let window = null;

function boot() {
	window = new BrowserWindow({width: 1080,height: 768/*,backgroundColor: "#4c6580",frame: false*/});
	//window.setMenu(null);
	window.loadURL('file://'+__dirname+'/index.html');
	window.webContents.openDevTools();
};

app.on('ready',boot);