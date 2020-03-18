import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    margin-bottom: 20px;
    padding: 20px 25px;
    background-color: ${theme.paleOrange};
    border: 2px solid ${theme.focus};
    color: ${theme.grey1};
    line-height: 1.4;
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
        outline: 3px solid ${theme.focus};
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