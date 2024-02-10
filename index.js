const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

let portfolios = []
let contacts = []
let bookings = []

app.get("/bookings", async (req, res) => {
    return res.send(bookings)
})

app.get("/portfolios", async (req, res) => {
    return res.send(portfolios)
})

app.get("/contacts", async (req, res) => {
    return res.send(contacts)
})

app.post("/bookings", async (req, res) => {
    const bookingObj = req.body.bookingObj
    bookings.push(bookingObj)
    return res.send(bookingObj)
})

app.post("/portfolios", async (req, res) => {
    const portObj = req.body.portfolioObj
    portfolios.push(portObj)
    return res.send(portObj)
})

app.post("/contacts", async (req, res) => {
    const contactObj = req.body.contactObj
    contacts.push(contactObj)
    return res.send(contactObj)
})

app.listen(3001, () => console.log("Listening on port: 3001"))
