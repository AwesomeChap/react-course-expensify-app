import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount, sortByDate, setFilterText} from '../../actions/filters';

test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate : moment(0)
    });
});

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : moment(0)
    });
});

test('should generate set filter text with default arguments',()=>{
   const action = setFilterText();
   expect(action.text).toBe('');
   expect(action.type).toBe('SET_TEXT_FILTER');
});

test('should generate set filter text with passed arguements',()=>{
    const action = setFilterText('test');
    expect(action.text).toBe('test');
    expect(action.type).toBe('SET_TEXT_FILTER');
});

test('should generate sortby date action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type : 'SORT_BY_DATE',
    });
});

test('should generate sortby amount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type : 'SORT_BY_AMOUNT',
    });
});