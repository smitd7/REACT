import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={props.title}></ExpenseDetails>
        <ExpenseDetails amount={props.amount}></ExpenseDetails>
      
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div className="epense-item-location">{props.location}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
