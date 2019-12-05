import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import InterestsQuestion from "./InterestsQuestion"
import LocationQuestion from "./LocationQuestion"

const Button = styled.button`
    background: ${theme.blue};
    color: white;
    border: none;
    padding: 20px 65px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    display: block;
    width: 100%;
    margin-bottom: 15px;
    &:hover{
        filter: brightness(1.3)
    }
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 600px){
        display: inline-block;
        width: auto;
    }
`

const A = styled.a`
    &:hover{
        text-decoration: none;
    }
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const Form = () => {
    
    return(
        <form method="get" action="/map">
            <InterestsQuestion/>
            <LocationQuestion/>
            <Button type="submit">See results</Button>
            <p>Or, just <A href="/map">see everything</A>.</p>
        </form>
    )
}

export default Form