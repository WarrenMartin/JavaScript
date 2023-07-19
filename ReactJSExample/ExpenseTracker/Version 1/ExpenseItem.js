import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem = (props) => {

    

    return (
        <div className="expense-item">
            <ExpenseDate expDate={props.expDate}/>
            <div>{props.expDate.toISOString()}</div>
            <div className="expense-Item__description">
                <h2>{props.expTitle}</h2>
                <p className="expense-item__price">Rs {props.expAmount}</p>
            </div>
        </div>
    )

}

export default ExpenseItem;
