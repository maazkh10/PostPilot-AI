require("dotenv").config();

const app = require("./app.js");
const ConnectDB = require("./config/db.js");

const PORT = 9000;

async function startServer(params) {
    await ConnectDB()



    
app.listen(PORT, () => {
  console.log(`
==========================================
🚀 Server Started Successfully
🌍 URL  : http://localhost:${PORT}
==========================================
`);
});
}

startServer();