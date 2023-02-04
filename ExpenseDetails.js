
function ExpenseDetails(props){
    const title = props.title.toLocalString("en-US");
    const amount = props.amount.toLocalString("en-US");

    return (
        <div className='expense-title'>
        <div className='expense-amount'></div>
      </div>
    )

}
export default ExpenseDetails