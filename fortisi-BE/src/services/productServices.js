const Electronic = require("../models/Electronic");

module.exports.createElectronicProduct = (productData) => Electronic.create(productData)

module.exports.getAllElectronicProducts = () => Electronic.find()

module.exports.getSingleElectronicProductById = (productId) => Electronic.findById(productId)

module.exports.canBuySpecificElectronicProduct = (productId, userId) => {
    return Electronic.findOneAndUpdate({ _id: productId, buyingList: { $ne: userId } }, { $push: { buyingList: userId } }, { new: true })
}

module.exports.editSingleElectronicProductById = (productId, productData) => Electronic.findOneAndUpdate({ _id: productId }, productData, { runValidators: true })

module.exports.deleteSingleElectronicProductById = (productId) => Electronic.findOneAndDelete({ _id: productId })

module.exports.searchElectronicProducts = (searchName, searchType) => {
    let searchRegexName = searchName ? new RegExp(`.*${searchName}.*`, 'i') : null
    let searchRegexType = searchType ? new RegExp(`.*${searchType}.*`, 'i') : null

    let query = { $or: [] }

    if (searchRegexName) {
        query.$or.push({ name: { $regex: searchRegexName } })
    }
    if (searchRegexType) {
        query.$or.push({ type: { $regex: searchRegexType } })
    }

    return Electronic.find(query)
}