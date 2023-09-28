const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
