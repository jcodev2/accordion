/* **************** Imports **************** */
import React from 'react'
import Detail from './Detail'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Accordion = ({ data }) => {
  return (
    <div className='accordion'>
      <h1 className='title'>Accordion</h1>
      <span className='line' />
      {data.map(item => (
        <Detail key={item.id} item={item} />
      ))}
    </div>
  )
}

/* **************** Code Execution **************** */
export default Accordion
