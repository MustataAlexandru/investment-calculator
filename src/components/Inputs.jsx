import {useState} from "react";

export default function Inputs(props){




return (
    <section id='user-input'>
        <div className='input-group'>
            <p>
              <label>Initial investment</label>
                <input
                    value={props.input.initialInvestment}
                    onChange={(e) => props.onChange('initialInvestment', e.target.value)}
                    type='number'
                    required />
            </p>

            <p>
                <label>Annual investment</label>
                <input
                    value={props.input.annualInvestment}
                    onChange={(e) => props.onChange('annualInvestment', e.target.value)}
                    type ='number'
                    required/>
            </p>

            <p>
                <label>Expected Return(%)</label>
                <input
                    value={props.input.expectedReturn}
                    onChange={(e) => props.onChange('expectedReturn', e.target.value)}
                    type='number'
                    required />
            </p>

            <p>
                <label>Duration(years)</label>
                <input
                    value={props.input.duration}
                    onChange={() => props.onChange('duration', e.target.value)}
                    type='number'
                    required />
            </p>
        </div>
    </section>
)
}