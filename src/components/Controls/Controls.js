import React from 'react'
import Builder from './Builder/Builder'
import './Controls.css'

const products = [
  { title: 'Product 1', type: 'product1' },
  { title: 'Product 2', type: 'product2' },
  { title: 'Product 3', type: 'product3' },
  { title: 'Product 4', type: 'product4' },
]

const Controls = (props) => {
  return (
    <div className="controls">
      <div className="price">
        <p>Total Price: {props.price}</p>
      </div>
      {products.map((item) => {
        return (
          <Builder
            key={item.title}
            title={item.title}
            add={() => props.productAdd(item.type)}
            remove={() => props.productRemove(item.type)}
          />
        )
      })}
      <button className="order-btn" onClick={props.order}>
        Order
      </button>
    </div>
  )
}

export default Controls
