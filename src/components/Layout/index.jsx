import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import masthead from "./masthead.svg"
import search from "./"

const Header = styled.header`
    background: ${theme.blue};
    color: white;
`

const Container = styled.container`
    max-width: ${theme.maxWidth};
    margin-left: auto;
    margin-right: auto;
`

const Masthead = styled.img``

const SearchForm = styled.form`
    display: none;
`

const HiddenLabel = styled.label``

const Input = styled.input``

const SearchIcon = styled.img``

const Button = styled.button``

const Layout = ({
    fullWidth,
    children
}) =>
    <>
        <Header>
            <Container>
                <Masthead src={masthead} alt="Buckinghamshire Council"/>
                <SearchForm
                    method="get"
                    action="https://buckscc.gov.uk/search"
                >
                    <HiddenLabel htmlFor="q">Search query</HiddenLabel>
                    <Input name="q" required/>
                    <Button type="submit"><SearchIcon src={search} alt="Search"/></Button>
                </SearchForm>
            </Container>
        </Header>
        {children}
        
    </>