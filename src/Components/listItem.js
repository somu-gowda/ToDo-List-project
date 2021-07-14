import React from 'react';
import'./listItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props){

    const  items = props.items;
    const listItem = items.map(item =>   {
           return <div className="list" key ={item.key}>
<p>{item.text}
<span>
    <FontAwesomeIcon className='faicons' icon='trash'
    onClick={()=>props.deletItem(item.key)}  />
</span>

</p>

           </div>
    } )
    return(
        <div>{listItem}</div>
    )
}


export default ListItems;