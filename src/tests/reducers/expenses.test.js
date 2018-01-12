import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state',()=>{
   const state = expensesReducer(undefined,{type:'@@INIT'});
   expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
   const action = {
       type : 'REMOVE_EXPENSE',
       id : expenses[1].id
   };
   const state = expensesReducer(expenses,action);
   expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found',()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id : -1
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add expense',()=>{
    const sample = {
        id : '123',
        description : 'Dum',
        note : '',
        amount : 19,
        createdAt : 0
    };
    const action = {
       type : 'ADD_EXPENSE',
       expense : sample
   } ;
   const state = expensesReducer(expenses,action);
   expect(state).toContain(sample);
});

test('should edit an expense',()=>{
    const amount = 122000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[1].id,
        updates : {
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount);
});

test('should edit an expense',()=>{
    const amount = 122000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : -1233,
        updates : {
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});