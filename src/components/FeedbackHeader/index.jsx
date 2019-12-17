import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Link } from "react-router-dom"

const Outer = styled.section`
    padding: 25px 15px;
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Breadcrumbs = styled.ul`
    list-style: none;
    margin-bottom: 40px;
    @media screen and (min-width: 600px){
        margin-bottom: 70px;
    }
`

const Breadcrumb = styled.li`
    display: inline-block;
    margin-right: 10px;
    &:after{
        content: "/";
        margin-left: 10px;
        opacity: 0.3;
    }
    &:last-of-type{
        &:after{
            content: none;
        }
    }
`

const A = styled.a`
    &:hover{
        text-decoration: none;
    }
    &:focus{
        color: ${theme.blue};
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const StyledLink = styled(Link)`
    &:hover{
        text-decoration: none;
    }
    &:focus{
        color: ${theme.blue};
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const PageTitle = styled.h1`
    font-size: 2rem;
    @media screen and (min-width: 600px){
        font-size: 2.7rem;
    }
`

const PageHeader = () =>
    <Outer>
        <Inner>
                <Breadcrumbs>
                    <Breadcrumb><A href="https://www.buckscc.gov.uk">Home</A></Breadcrumb>
                    <Breadcrumb><StyledLink to="/">Directory</StyledLink></Breadcrumb>
                    <Breadcrumb>Give feedback</Breadcrumb>
                </Breadcrumbs>
                <PageTitle>Give feedback</PageTitle>
        </Inner>
    </Outer>

export default PageHeader