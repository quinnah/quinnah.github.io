module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:1313/'],
      startServerCommand: 'hugo serve -d',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
