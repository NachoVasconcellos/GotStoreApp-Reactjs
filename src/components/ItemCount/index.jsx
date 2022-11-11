import React from 'react'
import { useState } from 'react'
import './styles.css'

const ItemCount = ({onAdd, stock, initial}) => {


    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
       if (count > initial) setCount(count - 1)
    }
  return <div>
    <button className='btn' onClick={onDecrement}>-</button>
    <span className='btn'>{count}</span>
    <button className='btn' onClick={onPlus}>+</button>
    <button className='btn1' onClick={() =>onAdd(count)}>Confirm</button>
  </div>;
};

export default ItemCount