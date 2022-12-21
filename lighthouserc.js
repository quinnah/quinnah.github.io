module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:1313/'],
      startServerCommand: 'hugo server',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
