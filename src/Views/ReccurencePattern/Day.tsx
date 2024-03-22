import React, { useState } from 'react'
import ViewModel from '../../ViewModels/ReccurencePattern/Day'

interface DayViewProps {
    viewModel: ViewModel
}
const Day: React.FC<DayViewProps> = ({ viewModel }) => {
    const [recur, _SetRecur] = useState(viewModel.recur)
    const SetRecur = (Value: number) => {
        viewModel.recur = Value
        _SetRecur(viewModel.recur)
    }
    const [weekday, _SetWeekday] = useState(viewModel.Weekday)
    const SetWeekday = (Value: boolean) => {
        viewModel.Weekday = Value
        _SetWeekday(viewModel.Weekday)
    }

    return (
        <>
            <div>
                <input type="radio" name="DayOption"></input>
                <input type="radio" name="DayOption"></input>
            </div>
            

        </>
    )
}

export default Day