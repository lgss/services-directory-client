import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background: ${theme.focus};
    color: ${theme.grey1};
    padding: 7px 20px;
    line-height: 1.4;
`

const Inner = styled.div`
    max-width: ${props => props.fullPage ? "none" : theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

const Tag = styled.strong`
    background: ${theme.grey1};
    color: ${theme.focus};
    padding: 2px 7px;
    display: inline-block;
    text-transform: uppercase;
    margin-right: 15px;
`

const StyledLink = styled.a`
    color: ${theme.grey1};
    &:hover{
        text-decoration: none;
    }
    &:focus{
        outline: 3px solid ${theme.grey1};
        background: ${theme.grey1};
        color: ${theme.focus};
    }
`

const PhaseBanner = ({
    fullPage
}) =>
    <Outer>
        <Inner fullPage={fullPage}>
            <Tag>Beta</Tag>
            <p>This is a new website - <StyledLink href="#">your feedback</StyledLink> will help us improve it.</p>
        </Inner>
    </Outer>

export default PhaseBanner