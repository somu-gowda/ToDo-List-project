import React,{useState} from 'react'
import './ExpenseForm.css';


const ExpenseForm = () => {

   const [enteredTitle,setEnteredTitle]= useState ('');
    const [enterAmount,setAmont]= useState('');
    const [enterDate,setDate]=useState('');
  //const [userInput, setUserInput]=useState({
     // enteredTitle: '',
      //enteredAmount:'',
     // enteredDate:''  })


    const titleChanges = (event) =>{
        setEnteredTitle (event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
    }

    const anoumtChanges =(event) => {
         setAmont (event.target.value)
        //  setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });
    }

    const dateChanges = (event) => {
     setDate(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // })
}
const submitHandler = (event) =>{
            event.preventDefault();

          const expenseDate = {
            title:enteredTitle,
            amount:enterAmount,
            date:enterDate
          }  

          console.log(expenseDate)
          setEnteredTitle('');
          setAmont('');
          setDate('');
}
  
   
    return(
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text' value={enteredTitle}  onChange={titleChanges}></input>
                </div>
                <div className="new-expense__controls label">
                    <label>Amount</label>
                    <input type='number' min="0.01" step='0.01' value={enterAmount} onChange={anoumtChanges}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='Date' min="2019-01-01" max="2.22-12-31" value={ enterDate} onChange={dateChanges}></input>
                </div>
                
                </div>
                <div className="new-expense__actions">
                        <button type='submit'>Add Expense</button>
                </div>
                
            </form>

    )
}

export default ExpenseForm;