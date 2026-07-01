const prisma = require("./prisma.js")

async function ConnectDB(params) {
    try {
        await prisma.$connect()
        console.log("==========================================")
        console.log("Postgress conencted sexxecfull")
    console.log("==========================================")
    } catch (error) {
        console.error("Database connection faild")
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = ConnectDB;