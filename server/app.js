const express = require("express")
const app = express()
const routes = require("./routes")
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
app.use(cors())


app.listen(PORT, () => {
    console.log(`She is ${PORT} miles away from you :(`);
})