import React, { useState } from 'react';
export function AddNewItem() {
return(
    <div >
    <p>Name: <input type="text" name="name" /></p>
    <p>Description: <input type="text" name="Description" /></p>
    <p>Price: <input type="text" name="Price" /></p>
    <p><input type="file" /></p>
    Select category 
    <select>
      <option value="PC">PC</option>
      <option value="Phone">Phone</option>
      <option selected value="Watch">Watch</option>
    </select>
    <p> <input type="submit" value="Add to DB" /></p>
  </div>
)
}