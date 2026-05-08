const Order = require('../models/Order');

const { orderQueue } = require('../../../queues/orderQueue');

exports.createOrder = async (req, res) => {

  try {

    const order = await Order.create(req.body);

    await orderQueue.add('process-order', {
      orderId: order._id,
    });

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};

