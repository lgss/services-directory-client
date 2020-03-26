import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background-position: center;
    margin-bottom: 100px;
    @media screen and (min-width: 600px){
        padding-top: 50px;
    }
    @media screen and (min-width: 1600px){
        padding-top: 100px;
    }
`

const Inner = styled.div`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Panel = styled.div`
    background: ${theme.ccc_blue};
    color: white;
    padding: 25px;
    max-width: calc(${theme.maxWidth} / 3 * 2);
    margin-bottom: -130px;
    @media screen and (min-width: 600px){
        padding: 35px;
    }
`

const Breadcrumbs = styled.ul`
    list-style: none;
    margin-bottom: 15px;
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
    color: white;
    &:hover{
        text-decoration: none;
    }
    &:focus{
        color: ${theme.ccc_blue};
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const PageTitle = styled.h1`
    margin-bottom: 15px;
    font-size: 1.8rem;
    @media screen and (min-width: 600px){
        font-size: 2.5rem;
    }
`

const Lede = styled.p`
    font-size: 1.1em;
    @media screen and (min-width: 600px){
        font-size: 1.2rem;
    }
`

const PageHeader = () =>
    <Outer>
        <Inner>
            <Panel>
                <Breadcrumbs>
                    <Breadcrumb><A href="https://www.cambridgeshire.gov.uk">Home</A></Breadcrumb>
                    <Breadcrumb>Directory</Breadcrumb>
                </Breadcrumbs>
                <PageTitle>Get help if you are staying at home because of coronavirus</PageTitle>
                <Lede>Use this service to find volunteer groups and services in your local area who can help you cope.</Lede>
            </Panel>
        </Inner>
    </Outer>

export default PageHeader