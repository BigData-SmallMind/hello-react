import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesComponent.css";

function ExpenseComponent(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        titleAttEXPCOMP={props.expensesDataAttAPP[0].title}
        amountAttEXPCOMP={props.expensesDataAttAPP[0].amount}
        dateAttEXPCOMP={props.expensesDataAttAPP[0].date}
      />
      <ExpenseItem
        titleAttEXPCOMP={props.expensesDataAttAPP[1].title}
        amountAttEXPCOMP={props.expensesDataAttAPP[1].amount}
        dateAttEXPCOMP={props.expensesDataAttAPP[1].date}
      />
      <ExpenseItem
        titleAttEXPCOMP={props.expensesDataAttAPP[2].title}
        amountAttEXPCOMP={props.expensesDataAttAPP[2].amount}
        dateAttEXPCOMP={props.expensesDataAttAPP[2].date}
      />
      <ExpenseItem
        titleAttEXPCOMP={props.expensesDataAttAPP[3].title}
        amountAttEXPCOMP={props.expensesDataAttAPP[3].amount}
        dateAttEXPCOMP={props.expensesDataAttAPP[3].date}
      />
    </div>
  );
}

export default ExpenseComponent;
