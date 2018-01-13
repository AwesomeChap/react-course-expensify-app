import React from 'react';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import numeral from 'numeral';

export const ExpenseSummary = (props)=>{
    const expenseWord = props.expenseCount > 1 ? 'expenses' : 'expense';
    return (
        <div>
            <h1>Veiwing {props.expenses.length} {expenseWord} totalling {numeral(props.expenseCount).format('$0,00.00')}</h1>
        </div>
    );
}

const mapStateToProp =(state)=>({
  expenses : selectExpenses(state.expenses, state.filters),
  expenseCount : selectExpensesTotal(state.expenses)
});

export default connect(mapStateToProp)(ExpenseSummary);