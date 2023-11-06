const express = require("express")
const auth = require("../middlewares/auth.middleware")
const showProperty = require("../controllers/property/showMySellProperties")
const createProperty = require("../controllers/property/createProperty")
const deleteProperty = require("../controllers/property/deleteProperty")
const updateProperty = require("../controllers/property/updateProperty")
const bookProperty = require("../controllers/property/bookProperty")
const showRentProperties = require("../controllers/property/showRentProperties")
const showSellProperties = require("../controllers/property/showSellProperties")
const showMySellProperty = require("../controllers/property/showMySellProperties")
const showMySoldProperties = require("../controllers/property/showMySoldProperties")
const showMyLeasedProperties = require("../controllers/property/showMyLeasedProperties")
const showMyRentProperty = require("../controllers/property/showMyRentProperties")
const search = require("../controllers/property/search")
const propertyRoute = express.Router()

propertyRoute.get("/rent", showRentProperties)
propertyRoute.get("/buy", showSellProperties)
propertyRoute.get("/search", search)
propertyRoute.use(auth)
propertyRoute.get("/bought", showMySellProperty)
propertyRoute.get("/rented", showMyRentProperty)
propertyRoute.get("/sold", showMySoldProperties)
propertyRoute.get("/leased", showMyLeasedProperties)
propertyRoute.post("/add", createProperty)
propertyRoute.delete("/delete/:_id", deleteProperty)
propertyRoute.patch("/update/:_id", updateProperty)
propertyRoute.patch("/book/:_id", bookProperty)

module.exports = propertyRoute
