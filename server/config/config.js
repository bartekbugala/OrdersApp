module.exports = {
  PORT: process.env.PORT || 8000,
  // Uncomment bottom line for local DB
  MONGO_URL: 'mongodb://localhost:27017/orderlist',
  secretOrKey: 'secret'
  //MONGO_URL: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0-dbftg.mongodb.net/test?retryWrites=true&w=majority`
};
