const express = require("express");
const cors = require("cors");
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const utils = require("./utils/house.js");

const port = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.get("/house", async (req, res) => {
    const house = await utils.getHouse();
    return res.send(house);
})

app.post("/house", async (req, res) => {
    const body = req.body;
    const house = body.house;
    return res.send(await utils.createHouse(house));
})

app.put("/house", async (req, res) => {
    const body = req.body;
    const house = body.house;
    return res.send(await utils.updateHouse(house));
})

app.listen(port, () => {
    console.log("Server started on port " + port);
});