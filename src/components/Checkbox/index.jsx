import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import tick from "./tick.svg"

const Outer = styled.div`
    position: relative;
    padding: 8px 0px;
    margin-bottom: 15px;
    padding-left: 50px;
    /* border: 1px solid red; */
`

const Input = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
    &:focus + label:before{
        box-shadow: 0 0 0 3px ${theme.focus};
    }
    &:checked + label:before{
        background: ${theme.grey1};
    }
    &:checked + label:after{
        position: absolute;
        content: "";
        display: block;
        height: 25px;
        width: 25px;
        left: 5px;
        top: 5px;
        background-image: url(${tick});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`

const Label = styled.label`
    color: ${theme.darkText};
    cursor: pointer;
    &:before{
        content: "";
        display: inline-block;
        margin-right: 10px;
        height: 32px;
        width: 32px;
        border: 2px solid ${theme.grey1};
        position: absolute;
        left: 0px;
        top: 0px;
    }
`

const CheckboxItem = ({
    value,
    name,
    children,
    onChange,
    checked
}) =>
    <Outer>
        <Input 
            type="checkbox" 
            name={name} 
            value={value}
            id={`${name}-${value}`}

            onChange={onChange}
            checked={checked}
        />
        <Label 
            htmlFor={`${name}-${value}`}
        >
            {children}
        </Label>
    </Outer>

export const Checkboxes = styled.div`
    margin-top: 20px;
    @media screen and (min-width: 600px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 40px;
    }
`

export default CheckboxItem