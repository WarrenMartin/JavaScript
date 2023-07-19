
const ExpenseDate = (props) =>{

    const month=props.expDate.toLocaleString('en-US',{month:'long'});
    const day =props.expDate.toLocaleString('en-US',{day:'2-digit'});
    const year=props.expDate.getFullYear();

    
    return (
        <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        </div>
    );
}

export default ExpenseDate
