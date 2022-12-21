module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:1313/'],
      startServerCommand: 'hugo server -D',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
