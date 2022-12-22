module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:1313/'],
      staticDistDir: './public', // hugo builds to public
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
