import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/actions';
import {setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description : 'Water Bill', amount : '4500'}));
store.dispatch(addExpense({description : 'Gas Bill', createdAt : 1000}));
store.dispatch(addExpense({description : 'Rent', createdAt : 1200, amount : '109500'}));
store.dispatch(addExpense({description : 'Wood', amount : '10500'}));

store.dispatch(setFilterText());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
