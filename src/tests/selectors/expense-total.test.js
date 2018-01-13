import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return zero if no expenses',()=>{
   const total = selectExpensesTotal([]);
   expect(total).toBe(0);
});

test('should add one item correctly',()=>{
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should add multiple expenses correctly',()=>{
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
});