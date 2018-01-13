import React from 'react';
import {connect} from 'react-redux'
import {startAddExpense} from '../actions/actions'
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
    onSubmit = (expense)=>{
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

// const AddExpensePage = (props)=>(
//     <div>
//         This is from my add expense component
//         <ExpenseForm
//             onSubmit={(expense)=>{
//                 props.dispatch(addExpense(expense));
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );

const mapDispatchToProps = (dispatch)=>({
  startAddExpense:(expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined,mapDispatchToProps)(AddExpensePage);
