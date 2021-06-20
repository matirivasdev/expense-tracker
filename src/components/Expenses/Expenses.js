import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020');
    const expenses = props.expenses;

    const filterYearHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterYearHandler}/>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        </Card>
    );
}

export default Expenses;