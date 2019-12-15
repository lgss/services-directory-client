import React, { useState, useEffect }  from "react"
import Checkbox from "../Checkbox"
import { useHistory } from "react-router-dom"
import queryString from "query-string"
// import Router from "next/router"
import cross from "../DetailDialog/cross.svg"
import {
    StyledDialog,
    Inner,
    Headline,
    Grid,
    Footer,
    Button,
    OpenButton,
    CloseButton,
    ClearButton
} from "./utils"

const Filter = ({
    label,
    name,
    options
}) => {

    const [dialogOpen, toggleDialog] = useState(false)
    const [selection, changeSelection] = useState([]) 
    const history = useHistory()

    const query = queryString.parse(history.location.search)

    const setSelectionFromQuery = () =>{
        if(query[name]){
            changeSelection([].concat(query[name]))
        } else {
            changeSelection([]) 
        }
    }

    useEffect(()=>{
        setSelectionFromQuery()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const closeWithoutSaving = () => {
        setSelectionFromQuery()
        toggleDialog(false)
    }

    const handleChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeSelection([...selection, value]  )
        } else {
            changeSelection(selection.filter(el=> el !== value))
        }
    }

    const clearFilter = (e) => {
        if(e) e.preventDefault()
        changeSelection([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        query[name] = selection
        history.push(`/services?${queryString.stringify(query)}`)
        toggleDialog(false)
    }

    return(
        <>
            <OpenButton 
                active={selection.length > 0} 
                onClick={() => {toggleDialog(true)}} 
                className={`${label}-opener`}
            >
                {label}
            </OpenButton>
            <StyledDialog
                aria-label={`${label}-filter`}
                isOpen={dialogOpen}
                className={`${label}-dialog`}
                onDismiss={closeWithoutSaving}
            >
                <CloseButton onClick={closeWithoutSaving}>
                    <img src={cross} alt="Close without saving"/>
                </CloseButton>
                <form onSubmit={handleSubmit}>
                    <Inner>
                        <Headline><legend>{label}</legend></Headline>
                        <Grid>
                            {options.map((option)=>
                                <Checkbox 
                                    key={option.value}
                                    name={name} 
                                    value={option.value} 
                                    onChange={handleChange} 
                                    checked={selection.includes(option.value)}
                                >
                                    {option.label}
                                </Checkbox>
                            )}
                        </Grid>
                    </Inner>
                    <Footer>
                        <Button type="submit">Apply</Button>
                        <ClearButton onClick={clearFilter}>Clear</ClearButton>
                    </Footer>
                </form>
            </StyledDialog>
        </>
    )
}

export default Filter