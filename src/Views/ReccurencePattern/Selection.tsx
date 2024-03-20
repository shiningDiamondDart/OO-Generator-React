import { useState } from 'react'
import React from 'react'
import ViewModel from '../../ViewModels/ReccurencePattern/Selection'
import '../Landing.css'

interface SelectionViewProps {
    viewModel: ViewModel
}

const Selection: React.FC<SelectionViewProps> = ({ viewModel }) => {

    const [HideDaily, _SetHideDaily] = useState(viewModel.HideDaily);
    const SetHideDaily = (HideDaily : boolean) => {
        viewModel.HideDaily = !viewModel.HideDaily
        _SetHideDaily(HideDaily)
    }
    const [HideWeekly, _SetHideWeely] = useState(viewModel.HideWeekly);
    const SetHideWeekly = (HideWeekly: boolean) => {
        viewModel.HideWeekly = !viewModel.HideWeekly
        _SetHideWeely(HideWeekly)
    }
    const [HideMonthly, _SetHideMonthly] = useState(viewModel.HideMonthly);
    const SetHideMonthly = (HideMonthly: boolean) => {
        viewModel.HideMonthly = !viewModel.HideMonthly
        _SetHideMonthly(HideMonthly)
    }
    const [HideYearly, _SetHideYearly] = useState(viewModel.HideYearly);
    const SetHideYearly = (HideYearly: boolean) => {
        viewModel.HideYearly = !viewModel.HideYearly
        _SetHideYearly(HideYearly)
    }

    
    /*const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.id == "Daily") {
            setHideDaily(!HideDaily);
        }

    }*/
    console.log("AGHAGH")
    
    return (
        <>
            <input name="Option" type="radio" id="Daily" checked={!viewModel.HideDaily}  onChange={() => SetHideDaily(!HideDaily)}></input>
            <input name="Option" type="radio" id="Weekly" checked={!viewModel.HideWeekly} onChange={() => SetHideWeekly(!HideWeekly)}></input>
            <input name="Option" type="radio" id="Monthly" checked={!viewModel.HideMonthly}  onChange={() => SetHideMonthly(!HideMonthly)}></input>
            <input name="Option" type="radio" id="Yearly" checked={!viewModel.HideYearly} onChange={() => SetHideYearly(!HideYearly)}></input>
            {viewModel.getOption() }

        </>
    )
}

export default Selection