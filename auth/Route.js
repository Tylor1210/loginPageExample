const express = require('express')
const router = express.Router()
const {register, login, update, deleteUser, getUsers} = require('./Auth')
const {adminAuth} = require("../middleware/auth")
router.route('/register').post(register) // register route
router.route('/login').post(login) // login route
router.route('/update').put(adminAuth, update) // update route
router.route('/deleteUser').delete(adminAuth, deleteUser) //delete route
router.route('/getUsers').get(getUsers) //get users route 
module.exports = router
