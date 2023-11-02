const userRouter = require('./user.js');
const quoteRouter = require('./quote.js')

module.exports = (app) => {
  app.use('/api/users', userRouter);
  app.use('/api/quote', quoteRouter)
};
