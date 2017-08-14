if (process.env.NODE_ENV === 'production') {
  console.log('PRODUCTION STORE');
  module.exports = require('./configureStore.prod'); // eslint-disable-line global-require
} else {
	console.log('DEVELOP STORE');
  module.exports = require('./configureStore.dev'); // eslint-disable-line global-require
}
