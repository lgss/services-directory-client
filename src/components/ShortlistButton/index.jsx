import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import unfilled from "./unfilled.svg"
import filled from "./filled.svg"
import { ShortlistContextConsumer } from "../../contexts/shortlistContext"

const Outer = styled.div`
    display: block;
    z-index: 0;
    position: absolute;
    right: 20px;
    bottom: 20px;
`

const Button = styled.button`
    border-radius: 100%;
    padding: 10px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background: ${theme.paleOrange};
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};         
    }

`

const ShortlistButton = ({
    service
}) => 
<ShortlistContextConsumer>
    { context =>
        <Outer aria-live="polite">
            {context.isInShortlist(service.assetId) ? 
                <Button onClick={()=>{context.removeFromShortlist(service.assetId)}}>
                    <img alt="Remove from shortlist" src={filled}/>
                </Button>
                : 
                <Button onClick={()=>{context.addToShortlist(service)}}>
                    <img alt="Add to shortlist" src={unfilled}/>
                </Button>
            }
        </Outer>
    }
</ShortlistContextConsumer>

export default ShortlistButton