import React from 'react'

function Filter({handleCategoryChange}) {
  
    return (
        <div>
        {/* need to call event here because evnet needs to go threw change and this is its only anchor with the callack function A>K>A only place it can be changed or called  */}
        <select name="filter" onChange={e => handleCategoryChange(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        </div>
  )
}

export default Filter