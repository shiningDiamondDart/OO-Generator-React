import { useState } from 'react'
import React from 'react'
import ViewModel from '../../ViewModels/ReccurencePattern/Selection'
import '../Landing.css'

interface UserViewProps {
    viewModel: ViewModel
}

const Selection: React.FC<UserViewProps> = ({ viewModel }) => {
    viewModel = new ViewModel();
    const [HideDaily, setHideDaily] = useState(viewModel.HideDaily);
    const [HideWeekly, setHideWeely] = useState(viewModel.HideWeekly);
    const [HideMonthly, setHideMonthly] = useState(viewModel.HideMonthly);
    const [HideYearly, setHideYearly] = useState(viewModel.HideYearly);


    /*const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.id == "Daily") {
            setHideDaily(!HideDaily);
        }

    }*/

    return (
        <>
            <input name="Option" type="radio" id="Daily" onChange={() => setHideDaily(!HideDaily)}></input>
            <input name="Option" type="radio" id="Weekly" onChange={() => setHideWeely(!HideWeekly) }></input>
            <input name="Option" type="radio" id="Monthly" onChange={() => setHideMonthly(!HideMonthly) }></input>
            <input name="Option" type="radio" id="Yearly" onChange={() => setHideYearly(!HideYearly)}></input>
            <p>{}</p>
        </>
    )
}

export default Selection