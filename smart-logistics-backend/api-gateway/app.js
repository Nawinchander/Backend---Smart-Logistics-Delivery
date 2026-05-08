const express = require('express');

const dotenv = require('dotenv');

const cors = require('cors');

const helmet = require('helmet');

const connectMongo = require('../shared/config/mongo');

const sequelize = require('../shared/config/mysql');

const authRoutes = require('../services/auth-service/routes/authRoutes');

const orderRoutes = require('../services/order-service/routes/orderRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

connectMongo();

sequelize.sync();

app.use('/api/auth', authRoutes);

app.use('/api/orders', orderRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server Started');
});