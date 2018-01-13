// import {connect} from 'react-redux';
// import selectExpenses from './expenses';

export default (expenses)=>{
    var sum = 0;
    for(let i=0;i<expenses.length;i++){
        sum += (expenses[i].amount);
    }
    return sum;
};

// export const selectExpensesTotal = (expenses)=>{
//     return expenses
//              .map((expense)=>expense.amount)
//              .reduce((sum,value)=>sum + value , 0);
// };

// const mapStateToProps = (state)=>{
//     return {
//         expenses : selectExpenses(state.expenses, state.filters)
//     };
// };
//
// const ExpensesTotal = connect(mapStateToProps)(selectExpensesTotal);

// export default ExpensesTotal;