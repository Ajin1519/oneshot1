import app from "./server.js";
import mongodb from "mongodb"
import dotenv from "dotenv"
import oneshotDAO from "./dao/oneshotDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.ONESHOT_DB_URI,
  {
    wtimeoutMS: 2500,
    useNewUrlParser: true }
  )
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await oneshotDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })