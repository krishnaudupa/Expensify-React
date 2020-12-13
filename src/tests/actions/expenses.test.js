import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should remove expense', () => {
    const action = removeExpense({ id: 578 })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 578
    })
})

test('should edit expense', () => {
    const action = editExpense(687, { description: 'coffee' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 687,
        updates: {
            description: 'coffee'
        }
    })
})

test('should setup add expense object', () => {
    const expenseData = {
        description: 'Rent',
        amount: 3587,
        createdAt: 1000000,
        note: 'last month rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        })
})

test('should setup add expense object with defualt object', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            id: expect.any(String),
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})