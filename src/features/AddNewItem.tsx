import { produceWithPatches } from '@reduxjs/toolkit/node_modules/immer';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../app/hooks';
import {Item} from '../features/Item'
export function AddNewItem() {
  const dispatch = useAppDispatch();

  const [itemName,setName] = useState('');
  const [itemCategory,setCategory] = useState('');
  const [itemDescription,setDescription] = useState('');
  const [itemPrice,setPrice] = useState('');
  const [itemImg,setImg] = useState('');


  return (
    <div >
      <div>
        <nav>
          <div className="menu">
            <ul className="hor_nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/AddNewItemInLocalStorage">Add new Item</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <form onSubmit={()=>localStorage.setItem('NewItem',itemName)}>
        <p>Name: <input   onChange={(e) => setName(e.target.value)} type="text" name="name" value={itemName} /></p>
        <p>Description: <input onChange={(e) => setDescription(e.target.value)} value={itemDescription} type="text" name="Description" /></p>
        <p>Price: <input   onChange={(e) => setPrice(e.target.value)} type="text" name="Price"   value={itemPrice} /></p>
        <p><input onChange={(e) => setImg(e.target.value)} type="file" /></p>
        Select category
        <select onChange={(e) => setCategory(e.target.value)} value={itemCategory}>
          <option value="PC">PC</option>
          <option value="Phone">Phone</option>
          <option selected value="Watch">Watch</option>
        </select>
        <p> <input type="submit"  value="Add to DB" /></p>
        </form>
      </div>
    </div>
  )
}
