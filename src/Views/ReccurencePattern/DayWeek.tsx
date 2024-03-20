import { useState } from 'react'
import React from 'react'
import ViewModel from '../../ViewModels/ReccurencePattern/DayWeek'

import './DayWeek.css'

interface DayWeekViewProps {
    viewModel: ViewModel
}
const DayWeek: React.FC<DayWeekViewProps> = ({ viewModel }) => {
    const [recur, _SetRecur] = useState(viewModel.recur)
    const SetRecur = (Value: number) => {
        viewModel.recur = Value
        _SetRecur(viewModel.recur)
    }
    const [changed, _SetChanged] = useState(0)
    const SetChanged = (Day: string, Value: boolean) => {
        
        _SetChanged(changed+1)
        viewModel.setOption(Day, Value)
    }


    return (
        <>
       
            Recur every <input value={recur} onChange={(e: React.FormEvent<HTMLInputElement>) => SetRecur(Number(e.currentTarget.value))}></input> week(s) on:
            {viewModel.recur }
        <table cellSpacing="5" cellPadding="5">
             <tr>
                {viewModel.Days.map((day, index) => (
                    <th key={index}>{day}</th>
                ))}              
            </tr>
        
       
            <tr>
                    {viewModel.Days.map((day, index) => (
                        <td key={index}><input onClick={(e: React.FormEvent<HTMLInputElement>) => SetChanged(day, e.currentTarget.checked)} type="checkbox"></input></td>
                )) }
                
            </tr>                
            </table>
        </>
        
        

    )
}

export default DayWeek