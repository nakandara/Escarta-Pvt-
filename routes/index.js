const express = require("express")
const router = express.Router();
const bookRouter = require("./books")
const authRouter = require("./auth")
const path = require("path")





router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/../page/home.html"));


})

router.use('/books', bookRouter)
router.use('/auth', authRouter)

router.post("/", (req, res) => {
    res.json({ data: "Helo world the Post data" })
})



router.all("/*", (req, res) => {
    res.send('pge not found!')
})

module.exports = router