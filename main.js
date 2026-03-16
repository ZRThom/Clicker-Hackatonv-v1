const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // Create the app window
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // Load the game
  win.loadFile('index.html')

  // OPTIONAL: Uncomment the next line to see DevTools/errors
  // win.webContents.openDevTools()
}

// Create the window when Electron is ready
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})