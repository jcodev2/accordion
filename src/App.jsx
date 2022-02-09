/* **************** Imports **************** */
import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Container from './components/Container'
import { dataAccordion } from './data/dataAccordion'

/* **************** Variables **************** */

/* **************** Functions **************** */
function App() {
  const [data, setData] = useState(dataAccordion)

  return (
    <>
      <Container>
        <Accordion data={data} setData={setData} />
      </Container>
    </>
  )
}

/* **************** Code Execution **************** */
export default App
