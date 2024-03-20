import React, { useEffect } from 'react'
import './Landing.css'
import Time from './Time'

import Selection from './ReccurencePattern/Selection'
import { Model as SelectionModel } from '../Models/ReccurencePattern/Selection'
import SelectionViewModel from '../ViewModels/ReccurencePattern/Selection'


function App(selectionModel: SelectionModel) {
    const selectionViewModel = new SelectionViewModel(selectionModel);

  return (
    <>
    <h2>OOO Generator</h2>
        <fieldset>
              <legend>Time</legend>
              <Time/>
           
        </fieldset>
        <fieldset>
              <legend>Reccurence Pattern</legend>
              <Selection viewModel={selectionViewModel}/>
        </fieldset>
        <fieldset>
            <legend>Range of Reccurence</legend>

        </fieldset>


      
    </>
  )
}


export default App
