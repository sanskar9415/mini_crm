const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const cors = require('cors');

const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const audienceRoutes = require('./routes/audienceRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:3001' // Replace with your frontend URL
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true}));

app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);
app.use('/audience', audienceRoutes);
app.use('/campaigns', campaignRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
