/* **************** Imports **************** */
import React from 'react'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Detail = ({ item }) => {
  return (
    <details key={item.id}>
      <summary>{item.title}</summary>
      <p>{item.description}</p>
    </details>
  )
}
/* **************** Code Execution **************** */
export default Detail
