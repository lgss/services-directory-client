import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Link } from "react-router-dom"
import { truncate, prettyDistance } from "../../lib/utils"
import ShortlistButton from "../ShortlistButton"

const Outer = styled.li`
    background-color: white;
    margin-bottom: 20px;
    padding: 25px;
    box-shadow: 0px 4px 0px #233B8E24;
    position: relative;
    &:active{
        transform: translateY(4px);
        background: ${theme.activeCard};
    }
    &:hover{
        box-shadow: 0px 4px 0px #F4E6C6;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.grey1};
    &:after{
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
    &:focus{
        outline: none;
        &:after{
            box-shadow: 0 0 0 3px ${theme.focus};
        }
    }
`

const Headline = styled.h3`
    margin: 0;
    margin-bottom: 10px;
    font-size: 1.4rem;
`

const Description = styled.p`
    color: ${theme.grey2};
    margin-bottom: 15px;
    line-height: 1.4;
`

const Footer = styled.footer`
    line-height: 1.7;
`

const Tag = styled.strong`
    display: inline-block;
    font-size: 0.95rem;
    color: white;
    background: ${theme.blue};
    padding: 0px 5px;
    text-transform: capitalize;
    margin-right: 15px;
`

const Meta = styled.span`
    color: ${theme.grey2};
    font-size: 0.95rem;
`

const Card = ({
    search,
    service
}) =>
    <Outer>
        <StyledLink to={{
            pathname: `/services/${service.assetId}`,
            search: search
        }}>
            <Headline>{service.name || service.parentOrganisation}</Headline>
        </StyledLink>
        <Description>{truncate(service.description, 15)}</Description>
        <Footer>
            <Tag>{service.category}</Tag>
            <Meta>{prettyDistance(service.distance)}</Meta>
            <ShortlistButton service={service}/>
        </Footer>
    </Outer>

export default Card