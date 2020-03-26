import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import InterestsQuestion from "./InterestsQuestion"
import LocationQuestion from "./LocationQuestion"
import { Link } from "react-router-dom"

const Button = styled.button`
    background: ${theme.ccc_blue};
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
    &:focus, &:active{
        filter: brightness(1);
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 600px){
        display: inline-block;
        width: auto;
    }
`

const StyledLink = styled(Link)`
    &:hover{
        text-decoration: none;
    }
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const Small = styled.p`
    font-size: 0.95rem;
`

const Form = () => {
    
    return(
        <form method="get" action="/services">
            <InterestsQuestion/>
            <LocationQuestion/>
            <Button type="submit">See results</Button>
            <Small>Or, just <StyledLink to="/services">browse everything</StyledLink>.</Small>
        </form>
    )
}

export default Form