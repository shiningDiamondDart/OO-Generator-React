import { useState } from 'react'
import React from 'react'
import ViewModel from '../ViewModels/Time'
import './Landing.css'

interface UserViewProps {
    viewModel: ViewModel
}


const Time: React.FC<UserViewProps> = ({ viewModel }) => {
    viewModel = new ViewModel();
    const [StartTime, SetStartTime] = useState(viewModel.StartTime);
    const [Endtime, SetEndTime] = useState(viewModel.EndTime);

    const handleStartTimeChange = (e: React.FormEvent<HTMLInputElement>) => {
        SetStartTime(e.currentTarget.value)
    }
    const handleEndTimeChange = (e: React.FormEvent<HTMLInputElement>) => {
        SetEndTime(e.currentTarget.value)
    }
    return (
        <>
            <label> Start:
                <input type="time" value={StartTime} onChange={handleStartTimeChange}></input>
        </label>
        <label> End:
                <input type="time" value={Endtime} onChange={handleEndTimeChange}></input>
        </label>
        </>
    )
}

export default Time