import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler =(inputExpenseData) => {
        // we have reived data from  the  child ExpenseForm now we have to create a local 
        //variable to demonstrate the data

        const expenseData = {
            ...inputExpenseData,
            id:Math.random().toString()
        }

        // this is to pass the data from child *(that is newexpense) to parent (app)
        console.log("in New Expense",expenseData)
        props.onAddExpense(expenseData)

    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
