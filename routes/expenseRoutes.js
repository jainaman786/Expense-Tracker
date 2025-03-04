const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/expenses', expenseController.addExpense);
router.get('/expenses', expenseController.getAllExpenses);
router.get('/expenses/total', expenseController.getTotalExpenses);
router.get('/expenses/filter', expenseController.filterExpenses);

module.exports = router;
