module.exports = {
  pwa: {
    name: 'Yellow Pages Nepal', // Name of your PWA
    themeColor: '#42b883', // Theme color
    msTileColor: '#ffffff', // Tile color for Windows
    appleMobileWebAppCapable: 'yes', // Apple Mobile Web App Capable
    appleMobileWebAppStatusBarStyle: 'black', // Status bar style for iOS
    manifestOptions: {
      // Options for manifest file
      icons: [
        {
          src: './img/icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
      // Any other options you want to include in the manifest
    },
  },
};
