import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import tick from "./tick.svg"

const Outer = styled.div`
    position: relative;
    padding: ${(props) => props.small ? "3px 0px" : "8px 0px"};
    margin-bottom: ${(props) => props.small ? "0px" : "15px"};
    padding-left: ${(props) => props.small ? "35px" : "50px"};;
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
        height: ${(props) => props.small ? "15px" : "25px"};
        width: ${(props) => props.small ? "15px" : "25px"};
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
        margin-right: ${(props) => props.small ? "7px" : "10px"};
        height: ${(props) => props.small ? "20px" : "32px"};
        width: ${(props) => props.small ? "20px" : "32px"};
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
    checked,
    small
}) =>
    <Outer small={small}>
        <Input 
            small={small}
            type="checkbox" 
            name={name} 
            value={value}
            id={`${name}-${value}`}

            onChange={onChange}
            checked={checked}
        />
        <Label 
            small={small}
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