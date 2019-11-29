import React from "react"
import styled from "styled-components"
import theme from "../_theme"

import masthead from "./masthead.svg"
import search from "./search.svg"
import facebook from "./facebook.svg"
import twitter from "./twitter.svg"
import youtube from "./youtube.svg"

const Header = styled.header`
    background: ${theme.blue};
    color: white;
`

const Container = styled.div`
    max-width: ${props => props.fullWidth ? "none" : theme.maxWidth };
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

const Footer = styled.footer``

const FooterNav = styled.nav``

const FooterLinks = styled.div``

const FooterLink = styled.a``

const SocialLinks = styled.div``

const SocialLink = styled.a``

const CopyrightNotice = styled.p``

const Layout = ({
    fullWidth,
    children
}) =>
    <>
        <Header>
            <Container fullWidth={fullWidth}>
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
        <Footer>
            <Container fullWidth={fullWidth}>
                <FooterNav>
                    <FooterLinks>
                        <FooterLink href="https://www.buckscc.gov.uk/services/council-and-democracy/cookies/">Cookies</FooterLink>
                        <FooterLink href="https://www.buckscc.gov.uk/services/council-and-democracy/privacy-policy/">Privacy</FooterLink>
                        <FooterLink href="https://www.buckscc.gov.uk/services/contact-and-complaints/contact-us/">Contact us</FooterLink>
                    </FooterLinks>
                    <SocialLinks>
                        <SocialLink href="https://www.facebook.com/BuckinghamshireCountyCouncil/"><img src={facebook} alt="Facebook"/></SocialLink>
                        <SocialLink href="http://twitter.com/buckscc"><img src={twitter} alt="Twitter"/></SocialLink>
                        <SocialLink href="http://www.youtube.com/buckinghamshirecc"><img src={youtube} alt="YouTube"/></SocialLink>
                    </SocialLinks>
                </FooterNav>
                <CopyrightNotice>© 2019 Buckinghamshire Council</CopyrightNotice>
            </Container>
        </Footer>
    </>

export default Layout