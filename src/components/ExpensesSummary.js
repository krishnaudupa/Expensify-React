import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'


const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formatExpenseTotal = numeral(expensesTotal).format('0,0.00')
    return (
        <div>
            <h2>Viewing {expensesCount} {expenseWord} totalling {formatExpenseTotal}₹</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpeneses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpeneses.length,
        expensesTotal: visibleExpeneses.map(expense => expense.amount).reduce((sum, value) => sum + value, 0)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)