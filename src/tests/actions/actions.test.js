import {addExpense, editExpense, removeExpense} from '../../actions/actions';

test('should setup remove expense action object',()=>{
    const action = removeExpense({id : '123abc'});
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abc'
    });
});

test('should setup edit expense action object',()=>{
    const id = '123abc';
    const action = editExpense(id,{note : 'New note value'});
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : '123abc',
        updates : {
            note : 'New note value'
        }
    });
});

test('should setup add expense action object with provided values',()=>{
    const expenseData = {
        description : 'testing',
        amount : 1000,
        createdAt : 1234567,
        note : 'testing data'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id : expect.any(String)
        }
    });
});

test('should setup add expense action object with default values',()=>{
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense: {
            description : '',
            amount : 0,
            createdAt : 0,
            note : '',
            id : expect.any(String)
        }
    });
});