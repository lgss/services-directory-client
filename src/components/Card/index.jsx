import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Link } from "react-router-dom"
import { truncate, prettyDistance } from "../../lib/utils"
import { ShortlistContextConsumer } from "../../contexts/shortlistContext"

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
        background-color: #FFFBF4;
        box-shadow: 0px 4px 0px #F4E6C6;
    }
    &:focus-within{
        box-shadow: 0 0 0 3px ${theme.focus};
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
    assetId,
    name,
    parentOrganisation,
    description,
    category,
    distance,
    search,
    shortlist,
    addToShortlist,
    removeFromShortlist,
    ...props
}) =>
    <Outer {...props}>
        <StyledLink to={{
            pathname: `/services/${assetId}`,
            search: search
        }}>
            <Headline>{name || parentOrganisation}</Headline>
        </StyledLink>
        <Description>{truncate(description, 15)}</Description>
        <Footer>
            <Tag>{category}</Tag>
            <Meta>{prettyDistance(distance)}</Meta>
        </Footer>

        {shortlist.includes(assetId) ? "yes" : "no"}
        {shortlist.includes(assetId) ? 
            <button onClick={()=>{removeFromShortlist(assetId)}}>remove</button>
            : 
            <button onClick={()=>{addToShortlist(assetId)}}>add</button>
        }

        
        
    </Outer>

const WrappedCard = (props) => 
    <ShortlistContextConsumer>
        { context =>
            <Card 
                {...props}
                shortlist={context.shortlist}
                addToShortlist={context.addToShortlist}
                removeFromShortlist={context.removeFromShortlist}
            />
        }
    </ShortlistContextConsumer>

export default WrappedCard