import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
  const noOfCakes = useSelector(state => state.cake.noOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
