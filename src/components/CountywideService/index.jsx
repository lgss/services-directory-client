import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    margin-bottom: 20px;
    padding: 25px;
    background-color: #F5F1E0;
    border: 2px solid ${theme.focus};
    color: ${theme.grey1};
`

const Headline = styled.h3`
    margin-bottom: 10px;
`

const A = styled.a`
    &:hover{
        text-decoration: none;
    }
    &:focus{
        color: ${theme.grey1};
        background: ${theme.focus};
        outline: 1px solid ${theme.focus};
    }
`

const CountywideService = ({
    service
}) =>
    <Outer>
        <Headline>{service.name}</Headline>
        <p>{service.description} <A href={service.href}>Visit now</A></p>
    </Outer>

export default CountywideService