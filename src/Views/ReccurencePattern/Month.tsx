import React, { useState } from 'react'
import ViewModel from '../../ViewModels/ReccurencePattern/Month'

import './DayWeek.css'

interface MonthViewProps {
    viewModel: ViewModel
}
const Month: React.FC<MonthViewProps> = ({ viewModel }) => {
    const [recur, _SetRecur] = useState(viewModel.Recur)
    const SetRecur = (Value: number) => {
        viewModel.recur = Value 
        _SetRecur(viewModel.Recur)
    }
    const [day, _SetDay] = useState(viewModel.Day)
    const SetDay = (Value: number) => {
        viewModel.Day = Value
        _SetDay(viewModel.Day)
    }

    return (
        <>Repeat 
            <input className="small-input" type="text" onChange={(e: React.FormEvent<HTMLInputElement>) => SetDay(parseInt(e.currentTarget.value))}></input>
            Of Every
            <input className="small-input" type="text"  onChange={(e: React.FormEvent<HTMLInputElement>) => SetRecur(parseInt(e.currentTarget.value))}></input>
            Month(s)
        </>

    )
}
export default Month