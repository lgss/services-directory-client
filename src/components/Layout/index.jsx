import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import PhaseBanner from "../PhaseBanner"

import masthead from "./masthead.svg"
import search from "./search.svg"
import facebook from "./facebook.svg"
import twitter from "./twitter.svg"
import youtube from "./youtube.svg"

const Outer = styled.div`
    background-color: white;
    @media screen and (min-width: 700px){
        display: ${props => props.fullPage && "flex" };
        flex-direction: ${props => props.fullPage && "column" };
        overflow: ${props => props.fullPage && "hidden" };
        height: ${props => props.fullPage && "100vh" };
    }
`

const Header = styled.header`
    background: ${theme.blue};
    color: white;
    padding: 10px 15px;
`

const Container = styled.div`
    max-width: ${props => props.fullPage ? "none" : theme.maxWidth };
    margin-left: auto;
    margin-right: auto;
`

const HeaderContainer = styled(Container)`
    @media screen and (min-width: 600px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

const Masthead = styled.a`
    text-decoration: none;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
`

const SearchForm = styled.form`
    display: none;
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: row;
        min-width: 400px;
    }
`

const HiddenLabel = styled.label`
    font-size: 0;
    opacity: 0;
`

const Input = styled.input`
    font-size: 1em;
    padding: 10px;
    border: none;
    flex: 1;
    &::placeholder{
        color: ${theme.placeholder};
    }
    &:focus{
        position: relative;
        outline: 3px solid ${theme.focus};
        z-index: 2;
    }
`

const Button = styled.button`
    background: ${theme.grey2};
    border: none;
    padding: 10px 25px;
    cursor: pointer;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
`

const Footer = styled.footer`
    background: ${theme.grey1};
    color: white;
    padding: 30px 10px;
    @media screen and (min-width: 600px){
        padding: 40px 10px;
    }
`

const FooterNav = styled.nav`
    margin-bottom: 30px;
    @media screen and (min-width: 600px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;
    }
`

const FooterLinks = styled.div`
    margin-bottom: 15px;
    @media screen and (min-width: 600px){
        margin-bottom: 0px;
    }
`

const FooterLink = styled.a`
    color: white;
    margin-right: 10px;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    &:focus{
        color: ${theme.grey1};
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 600px){
        margin-right: 20px;
    }
`

const SocialLink = styled.a`
    margin-right: 10px;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 600px){
        margin-right: 20px;
    }
`

const SocialIcon = styled.img`
    width: 25px;
`

const CopyrightNotice = styled.p``

const Layout = ({
    fullPage,
    children
}) =>
    <Outer fullPage={fullPage}>
        <Header>
            <HeaderContainer fullPage={fullPage}>
                <Masthead href="/">
                    <img src={masthead} alt="Buckinghamshire Council"/>
                </Masthead>
                <SearchForm
                    method="get"
                    action="https://www.buckscc.gov.uk/search"
                >
                    <HiddenLabel htmlFor="q">Search query</HiddenLabel>
                    <Input name="q" id="q" required placeholder="Search our websites"/>
                    <Button type="submit"><img src={search} alt="Search"/></Button>
                </SearchForm>
            </HeaderContainer>
        </Header>
        <PhaseBanner fullPage={fullPage}/>
        {children}
        {!fullPage &&    
            <Footer>
                <Container>
                    <FooterNav>
                        <FooterLinks>
                            <FooterLink href="https://www.buckscc.gov.uk/services/council-and-democracy/cookies/">Cookies</FooterLink>
                            <FooterLink href="https://www.buckscc.gov.uk/services/council-and-democracy/privacy-policy/">Privacy and data</FooterLink>
                            <FooterLink href="https://www.buckscc.gov.uk/services/contact-and-complaints/contact-us/">Contact us</FooterLink>
                        </FooterLinks>
                        <div>
                            <SocialLink href="https://www.facebook.com/BuckinghamshireCountyCouncil/">
                                <SocialIcon src={facebook} alt="Facebook"/>
                            </SocialLink>
                            <SocialLink href="http://twitter.com/buckscc">
                                <SocialIcon src={twitter} alt="Twitter"/>
                            </SocialLink>
                            <SocialLink href="http://www.youtube.com/buckinghamshirecc">
                                <SocialIcon src={youtube} alt="YouTube"/>
                            </SocialLink>
                        </div>
                    </FooterNav>
                    <CopyrightNotice>© 2019 Buckinghamshire Council</CopyrightNotice>
                </Container>
            </Footer>
        }
    </Outer>

export default Layout