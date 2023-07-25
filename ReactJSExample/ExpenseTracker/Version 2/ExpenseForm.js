import { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = () =>{



    const [inputTitle, setInputTitle]=useState(" ")
    const [inputAmount,setInputAmount]=useState("")
    const [inputDate,setInputDate]=useState("")


    const titleChangeHandler =(event) =>{
        setInputTitle(event.target.value)
    }

    const amountChangeHandler=(event) => {
        setInputAmount(event.target.value)
    }

    const dateChangeHandler=(event) =>{
        setInputDate(event.target.value)
    }

    const subbmitHandler =(event) => {
        event.preventDefault();

        const expenseData={
            title:inputTitle,
            amount:inputAmount,
            data:inputDate
        }
        console.log(expenseData)

        setInputAmount('')
        setInputDate('')
        setInputTitle('')

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input value={inputTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={inputAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date"  value={inputDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="Submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
