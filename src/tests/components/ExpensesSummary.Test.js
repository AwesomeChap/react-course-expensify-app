import React from 'react';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import {shallow} from 'enzyme';

test('should render ExpenseSummary correctly with one expense',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={235}/>
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with multiple expense',()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={12} expenseTotal={237565}/>
    expect(wrapper).toMatchSnapshot();
});


