import React from 'react'
import "./Todoform.css";
import ListItems from './listItem';
import { library }   from '@fortawesome/fontawesome-svg-core';
import {faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash)
class TodoForm extends React.Component{
     constructor(props){
            super(props);
            this.state={
                items:[],
                currentItem:{
                 text:'',
                 key:""
                }
            }
            this.handleInput =this.handleInput.bind(this)
           this.addItem =this.addItem.bind(this)
           this.deletItem =this.deletItem.bind(this)
     }
     handleInput(e){
         this.setState({
             currentItem:{
                 text:e.target.value,
                 key:Date.now()
             }
             
         })
         
     }
     addItem(e){                                         //addd item to the list submit button
         e.preventDefault();
         const newItem = this.state.currentItem;
         console.log(newItem)
         if(newItem.text !==''){
             const newItems =[...this.state.items, newItem  ]
             this.setState({
                 items:newItems,
                 currentItem:{
                     text:'',
                     key:''
                 }
             })
         }
     }
     deletItem(key){
         const filteredItems =this.state.items.filter(
             item => item.key!==key
         );
         this.setState({
             items:filteredItems
         })
     }
    render() {
      return (
         <div className='todoform'>
           <h2>To Do List</h2>
            <div >
              <form className='    ' onSubmit={this.addItem}>
                <input type='text' placeholder='enetr the tasks'
                value={this.state.currentItem.text} 
                onChange={this.handleInput}></input>
                <button type='submit'>ADD</button>
              </form>
         <ListItems items ={this.state.items}
             deletItem={this.deletItem} ></ListItems>

            </div>
            
           
         </div>
      );
    }
  }

  export default TodoForm; 