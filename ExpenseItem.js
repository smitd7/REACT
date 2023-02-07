import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props){
    const clickHandler=()=>{
        console.log('clicked!!!');
    };
    const deleteExpense=()=>{
        console.log('Expense deleted!!!');
    }
    
    // const expenseDate=new Date(2023,2,28)
    // const expenseTitle='car insurance'
    // const expenseAmount=500000
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteExpense}>Delete Expense</button>
        </Card>
    )
}
export default ExpenseItem;