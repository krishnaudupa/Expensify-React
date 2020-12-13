import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import selectExpenses from './selectors/expenses'
import './styles/style.scss'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 300 }))
store.dispatch(addExpense({ description: 'Gas bill' }))
store.dispatch(addExpense({ description: 'Rent', amount: 85300, createdAt:5690 }))

store.dispatch(setTextFilter('water'))

const state = store.getState()
const visibleExpenses = selectExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'))