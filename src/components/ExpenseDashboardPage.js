import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilter'

const ExpenseDashboardPage = () => (
    <div>
        This is from ExpenseDashboardPage
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage