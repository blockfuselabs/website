const app = require('./app');
const { sequelize } = require('./config/db');

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error("Unable to connect to the database:", error);
});
