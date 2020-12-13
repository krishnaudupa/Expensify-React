import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters'
import moment from 'moment'

test('should setup start date object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should setup end date object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should setup up text filter object', () => {
    const action = setTextFilter('bill')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    })
})

test('should setup up text filter object with default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setup up sort by date object', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
})

test('should setup up sort by amount object', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
})
