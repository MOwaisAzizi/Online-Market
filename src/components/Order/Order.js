import React from 'react'
import './Order.css'
import Wrapper from '../../hoc/Wrapper'
import Button from '../UI/Button/Button'

const Order = (props) => {
  const summery = Object.keys(props.products).map((item) => {
    return (
      <li key={item} className='lists'>
        {item}: {props.products[item]}
      </li>
    )
  })

  return (
    <Wrapper>
      <h3>Order</h3>
      <ul className='ul'>{summery}</ul>
      <p>Total Price: {props.price}</p>
      <p>Continue?</p>
      <Button btnType="success" click={props.continue}>
        Yes
      </Button>
      <Button btnType="danger" click={props.cancel}>
        No
      </Button>
    </Wrapper>
  )
}

export default Order
