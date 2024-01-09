const express = require('express')
const { addTransaction, getAllTransaction ,editTransaction,deleteTransaction} = require('../controllers/transactionCtrl')

//router object
const router = express.Router()

//routers
//add  transaction
router.post('/add-transaction',addTransaction)
//Edit transaction
router.post('/edit-transaction',editTransaction)

//delete transaction
router.post('/delete-transaction',deleteTransaction)


//get
router.post('/get-transaction',getAllTransaction)

module.exports = router