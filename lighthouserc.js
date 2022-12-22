module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:1313/'],
      startServerCommand: 'hugo server',
      staticDistDir: './public', // hugo builds to public
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
