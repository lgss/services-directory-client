import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import AutocompletePlacesInput from "../AutocompletePlacesInput"

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
    color: ${theme.ccc_brown};
`

const LocationQuestion = ()=>
    <Outer>
        <Label htmlFor="location">Where would you like to search?</Label>
        <Hint>Enter a Cambridgeshire town or postcode</Hint>
        <AutocompletePlacesInput/>
    </Outer>

export default LocationQuestion