const { Queue } = require('bullmq');

const redis = require('../shared/config/redis');

const orderQueue = new Queue('orderQueue', {
  connection: redis,
});

module.exports = { orderQueue };


