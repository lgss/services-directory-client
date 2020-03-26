import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Checkbox, { Checkboxes } from "../Checkbox"
import config from "../../_config"

const Fieldset = styled.fieldset`
    border: none;
    margin-bottom: 55px;
`

const Question = styled.p`
    color: ${theme.grey1};
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.5rem;
`

const Hint = styled.p`
    color: ${theme.ccc_brown};
`

const InterestsQuestion = () =>
    <Fieldset>
        <legend>
            <Question>What do you need help with?</Question>
            <Hint>Choose as many as you like</Hint>
        </legend>
        <Checkboxes>
            {config.interestsOptions.map(option => {
                if(option.value === "support"){
                    return(
                        <Checkbox 
                            name="category" 
                            value={option.value}
                            key={option.value}
                        >
                            {option.label}
                        </Checkbox>
                    )
                } else {
                    return <Checkbox name="category" value={option.value} key={option.value}>{option.label}</Checkbox>
                }
            })}
        </Checkboxes>
    </Fieldset>

export default InterestsQuestion