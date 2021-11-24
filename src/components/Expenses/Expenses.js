import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);

    setFilteredExpenses(props.expenses.filter(
      expense => expense.date.getFullYear().toString() === selectedYear
    ));

    console.log(filteredExpenses);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
