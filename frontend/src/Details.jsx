import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Comp/About,jsx/data'

function Details() {
    let { id}=useParams()
    let dd=products.find((a)=>a.id==id)
  return (
    <div className='container mx-auto'>
      <h2 className='text-4xl font-bold'>Details {dd.title}</h2>
      <img src={dd.thumbnail} /> 
      {dd.title} <br />
      Price: {dd.price} <br />
      Discount: {dd.discountPercentage} <br />
      Rating: {dd.rating} <br />


      <p>{dd.description}</p>
    </div>
  )
}

export default Details
