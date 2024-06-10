const { sequelize, Customer, Order, CommunicationLog } = require('./models');

async function syncModels() {
    try {
        // Sync all defined models with the database
        await sequelize.sync({ alter: true });
        console.log('Models synced successfully.');
    } catch (error) {
        console.error('Error syncing models:', error);
    }
}

// Call the syncModels function to start syncing
syncModels();