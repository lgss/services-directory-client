import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    margin-bottom: 55px;
`

const Label = styled.label`
    display: block;
    color: ${theme.grey1};
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.5rem;
`

const Hint = styled.p`
    color: ${theme.grey2};
`

const Input = styled.input`
    margin-top: 20px;
    font-size: 1em;
    width: 100%;
    padding: 10px;
    color: ${theme.grey1};
    border: 2px solid ${theme.grey1};
    &:focus{
        outline: 3px solid ${theme.focus};
    }
`

const LocationQuestion = ()=>
    <Outer>
        <Label htmlFor="location">Where would you like to search?</Label>
        <Hint>Enter a Buckinghamshire town or postcode</Hint>
        <Input
            name="location"
            placeholder="eg. HP20 1UA"
            required
        />
    </Outer>

export default LocationQuestion