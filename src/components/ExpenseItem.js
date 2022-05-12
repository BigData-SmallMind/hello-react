import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {


  return (
    <div className="expense-item">
        <ExpenseDate dateAttEXPITEM={props.dateAttEXPCOMP}/>
      <div className="expense-item__description">
        <h2>{props.titleAttEXPCOMP}</h2>
        <div className="expense-item__price">$ {props.amountAttEXPCOMP}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
