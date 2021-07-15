const mongoose = require('mongoose');

const { MONGO_URL } = require('./index');

const init = async () => {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

init();
