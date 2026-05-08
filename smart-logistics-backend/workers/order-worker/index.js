const { Worker } = require('bullmq');

const redis = require('../../shared/config/redis');

const worker = new Worker(

  'orderQueue',

  async (job) => {

    console.log('Processing:', job.data);

    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );

    console.log('Order Completed');

  },

  {
    connection: redis,
  }

);

