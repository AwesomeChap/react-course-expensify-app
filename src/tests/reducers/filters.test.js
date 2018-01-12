import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('it should set up default filters values',()=>{
    const state = filterReducer(undefined,{type : '@@INIT'});
    expect(state).toEqual({
       text : '',
       sortBy : 'date',
       startDate : moment().startOf('month'),
       endDate : moment().endOf('month')
    });
});

test('should set sortBy to amount',()=>{
    const state = filterReducer(undefined,{type : 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',()=>{
    const currentState = {
        text : 'test',
        startDate : undefined,
        endDate : undefined,
        sortBy:'amount'
    };
    const state = filterReducer(currentState,{type : 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set filter text',()=>{
    const text = 'this is is my filter';
    const action = {type : 'SET_TEXT_FILTER',text};
    const state = filterReducer(undefined,action);
    expect(state.text).toBe(text);
});

test('should set startDate filter',()=>{
    const startDate = moment(0).valueOf();
    const state = filterReducer(undefined,{
        type : 'SET_START_DATE',
        startDate
    });
    expect(state.startDate).toBe(moment(0).valueOf());
});

test('should set endDate filter',()=>{
    const endDate = moment(0).valueOf();
    const state = filterReducer(undefined,{
        type : 'SET_END_DATE',
        endDate
    });
    expect(state.endDate).toBe(moment(0).valueOf());
});

