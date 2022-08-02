const {app, BrowserWindow } = require('electron')
const path = require('path')
require('@electron/remote/main').initialize()
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
function createWindow() {
    const mywindow = new BrowserWindow({
       
        width: 500,
        height: 400,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            enableRemoteModule:true,
            contextIsolation: false,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            webSecurity: false,
            allowRunningInsecureContent: true
                    

        }
    })
    mywindow.loadURL('http://localhost:3000/')
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})
app.on('activate', function () {
    if(BrowserWindow.getAllWindows().length === 0)createWindow()
})