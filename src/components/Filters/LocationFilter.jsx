import React, {useState, useEffect} from "react"
import AutocompletePlacesInput from "../AutocompletePlacesInput"
import { useHistory } from "react-router-dom"
import queryString from "query-string"
import cross from "../DetailDialog/cross.svg"
import styled from "styled-components"
import theme from "../_theme"
import {
    StyledDialog,
    Inner,
    Headline,
    Footer,
    Button,
    OpenButton,
    CloseButton,
} from "./utils"

const Hint = styled.p`
    font-size: 0.9em;
    color: ${theme.lightText};
`

const LocationFilter = () => {

    const [dialogOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState("") 
    const history = useHistory()

    const query = queryString.parse(history.location.search)

    useEffect(()=>{
        setSelectionFromQuery()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const setSelectionFromQuery = () =>{
        if(query.location){
            changeSelection(query.location)
        } else {
            changeSelection("") 
        }
    }

    const closeWithoutSaving = () => {
        setSelectionFromQuery()
        toggleDialog(false)
    }

    const handleChange = (e) => {
        changeSelection(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        query.location = selection
        query.lat = null
        query.lng = null
        history.push(`/services?${queryString.stringify(query)}`)
        toggleDialog(false)
    }
    
    return(
        <>
            <OpenButton 
                active={selection.length > 0} 
                onClick={()=> toggleDialog(true)}
                className="location-opener"
            >
                Location
            </OpenButton>
            <StyledDialog
                aria-label="Location filter"
                isOpen={dialogOpen}
                className="location-dialog"
                onDismiss={closeWithoutSaving}
            >
                <CloseButton onClick={closeWithoutSaving}>
                    <img src={cross} alt="Close without saving"/>
                </CloseButton>
                <form onSubmit={handleSubmit}>
                    <Inner>
                        <Headline><legend>Change location</legend></Headline>
                        <Hint>Enter a Buckinghamshire town or postcode.</Hint>
                        <AutocompletePlacesInput value={selection} onChange={handleChange}/>
                    </Inner>
                    <Footer>
                        <Button type="submit">Search again</Button>
                    </Footer>
                </form>
            </StyledDialog>
        </>
    )
}

export default LocationFilter