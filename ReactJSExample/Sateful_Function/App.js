import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Component/ExpenseItem';
import Person from './Component/Person';
import CounterComponent from './Component/CounterComponent';

function App() {

  let expenses =[

    {expDate:new Date(2022,7,14),expTitle:"School Fees",expAmount:45000},
    {expDate:new Date(2020,4,14),expTitle:"MBA Fees",expAmount:150000},
    {expDate:new Date(2022,7,14),expTitle:"Furniture",expAmount:55000}
    

  ]
  
  return (
    <div>
      <h1>Welcome to html</h1>
      <ExpenseItem expDate={expenses[0].expDate} expTitle={expenses[0].expTitle} expAmount={expenses[0].expAmount}></ExpenseItem >
      <ExpenseItem expDate={expenses[1].expDate} expTitle={expenses[1].expTitle} expAmount={expenses[1].expAmount}></ExpenseItem >
      <ExpenseItem expDate={expenses[2].expDate} expTitle={expenses[2].expTitle} expAmount={expenses[2].expAmount}></ExpenseItem >

      <CounterComponent/>

      {/* <Person name ="Warr"/> */}
      
      
    </div>
  );

}

export default App;
