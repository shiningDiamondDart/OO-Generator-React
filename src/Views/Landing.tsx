import React from 'react'
import './Landing.css'
import Time from './Time'

import Selection from './ReccurencePattern/Selection'


function App() {



  return (
    <>
    <h2>OOO Generator</h2>
        <fieldset>
              <legend>Time</legend>
              <Time/>
           
        </fieldset>
        <fieldset>
              <legend>Reccurence Pattern</legend>
                <Selection/>
        </fieldset>
        <fieldset>
            <legend>Range of Reccurence</legend>

        </fieldset>


      
    </>
  )
}


export default App
