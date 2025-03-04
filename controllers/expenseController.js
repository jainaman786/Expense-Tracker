const db = require('../db/db');

// Add Expense
exports.addExpense = async (req, res) => {
    const { amount, category, description, date } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO expenses (amount, category, description, date) VALUES (?, ?, ?, ?)',
            [amount, category, description, date]
        );
        res.status(201).json({ message: 'Expense added', expenseId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const [expenses] = await db.execute('SELECT * FROM expenses');
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Filter Expenses by Category & Date
exports.filterExpenses = async (req, res) => {
    const { category, date } = req.query;
    try {
        const query = 'SELECT * FROM expenses WHERE category = ? AND date = ?';
        const [expenses] = await db.execute(query, [category, date]);
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Total Expenses in Date Range
exports.getTotalExpenses = async (req, res) => {
    const { start, end } = req.query;
    try {
        const query = 'SELECT SUM(amount) AS total FROM expenses WHERE date BETWEEN ? AND ?';
        const [result] = await db.execute(query, [start, end]);
        res.json({ total: result[0].total });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
