import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props){
    const[title,setTitle]= useState(props.title);
    const clickHandler=()=>{
        setTitle('updated');
        console.log(title);
    

    };
    const[amount,setAmount]=useState(props.amount);
    const AmountHandler=()=>{
        setAmount('100$');
        console.log(amount);
    }
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={AmountHandler}>Change Amount</button>
        </Card>
    )
}
export default ExpenseItem;