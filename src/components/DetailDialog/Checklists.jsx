import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import tick from "./tick.svg"

const Outer = styled.section`
    color: ${theme.grey1};
    background: ${theme.grey5};
    padding: 25px;
    @media screen and (min-width: 700px){
        padding: 45px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 40px;
    }
`

const Subheadline = styled.h3`
  margin-bottom: 10px;
`

const Ul = styled.ul`
    list-style: none;
    margin-bottom: 25px;
`

const Li = styled.li`
    margin-top: 5px;
    text-transform: capitalize;
    &:before{
        content: "";
        display: inline-block;
        /* background: green; */
        width: 15px;
        height: 13px;
        margin-right: 10px;
        background-image: url(${tick});
        background-position: center;
        background-size: contain;
    }
`

const Checklist = ({
    price,
    accessibility,
    suitability,
    ageGroups
}) =>
    <Outer>
        {accessibility && accessibility.length > 0 &&
            <div>
                <Subheadline>Accessibility</Subheadline>
                <Ul>
                    {accessibility.map(item => <Li key={item}>{item}</Li>)}
                </Ul>
            </div>
        }
        {suitability && suitability.length > 0 &&
            <div>
                <Subheadline>Suitable for</Subheadline>
                <Ul>
                    {suitability.map(item => <Li key={item}>{item}</Li>)}
                </Ul>
            </div>
        }
        {ageGroups && ageGroups.length > 0 &&
            <div>
                <Subheadline>Age groups</Subheadline>
                <Ul>
                    {ageGroups.map(item => <Li key={item}>{item}</Li>)}
                </Ul>
            </div>
        }
        {price &&
            <div>
                <Subheadline>Price</Subheadline>
                <p>{price}</p>
            </div>
        }
    </Outer>

export default Checklist