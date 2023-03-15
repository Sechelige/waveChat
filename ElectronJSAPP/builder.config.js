module.exports = {
  "appId": "com.your-company.your-app",
  "productName": "Your App Name",
  "directories": {
    "output": "build"
  },
  "files": [
    "**/*",
    "!node_modules",
    "!build",
    "!.gitignore",
    "!package-lock.json",
    "!builder.config.js",
    "!README.md"
  ],
  "mac": {
    "category": "your.app.category",
    "icon": "build/icon.icns"
  },
  "win": {
    "target": "nsis",
    "icon": "build/icon.ico"
  },
  "linux": {
    "category": "your.app.category",
    "icon": "build/icon.png"
  },
  "nsis": {
    "oneClick": false,
    "perMachine": true,
    "allowElevation": true,
    "allowToChangeInstallationDirectory": true,
    "installerIcon": "build/icon.ico",
    "uninstallerIcon": "build/icon.ico",
    "installerHeaderIcon": "build/icon.ico",
    "createDesktopShortcut": true,
    "createStartMenuShortcut": true
  }
}
