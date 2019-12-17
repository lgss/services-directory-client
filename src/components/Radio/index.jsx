import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    position: relative;
    padding: 5px 0px;
    margin-bottom: 15px;
    padding-left: 45px;
`

const Input = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
    &:focus + label:before{
        box-shadow: 0 0 0 3px ${theme.focus};
    }
    &:checked + label:after{
        position: absolute;
        content: "";
        display: block;
        height: 22px;
        width: 22px;
        left: 6px;
        top: 6px;
        border-radius: 100%;
        background: ${theme.grey1};
    }
`

const Label = styled.label`
    color: ${theme.grey1};
    cursor: pointer;
    &:before{
        content: "";
        display: inline-block;
        margin-right: 10px;
        height: 30px;
        width: 30px;
        border-radius: 1000px;
        border: 2px solid ${theme.grey1};
        position: absolute;
        left: 0px;
        top: 0px;
    }
`

const RadioItem = ({
    value,
    name,
    children,
    onChange,
    checked,
    required
}) =>
    <Outer>
        <Input 
            type="radio" 
            name={name} 
            value={value}
            id={`${name}-${value}`}
            onChange={onChange}
            checked={checked}
            required={required}
        />
        <Label 
            htmlFor={`${name}-${value}`}
        >
            {children}
        </Label>
    </Outer>

export default RadioItem