import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from './Comp/About,jsx/data'


function Category() {
    let {cid}= useParams()
    let cat =products.filter((a)=>a.category==cid)

  return (
    <div className='container mx-auto py-5'>
      <h1 className='text-3xl font-bold uppercase'>Category {cid}</h1>

      <div className="flex flex-wrap justify-between">
                {cat.map((a)=>(
                    <div className="w-[30%] border p-3 shadow key={a}.id pb-3 my-5">
                        <img className='w-full h-[250px]' src={a.thumbnail} alt="" />
                        <h3> <Link to={`/details/${a.id}`}> {a.title}</Link></h3>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Category
