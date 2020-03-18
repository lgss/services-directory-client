import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { ShortlistContextConsumer } from "../../contexts/shortlistContext"

const A = styled.a`
    &:focus{
        background-color: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
    &:hover{
        text-decoration: none;
    }
`

const PrintShortlist = ({shortlist}) => {
    const simplifiedShortlist = shortlist.map(item => {
        return {
            parentOrganisation: item.parentOrganisation,
            name: item.name,
            description: item.description,
            category: item.category,
            frequency: item.frequency,
            venue: item.venue,
            area: item.area,
            postcode: item.postcode,
            contactName: item.contactName,
            phone: item.phone,
            email: item.email,
            url: item.url
        }
    })
    return <A target="blank" href={`${process.env.REACT_APP_API_HOST}/api/print?data=${encodeURIComponent(JSON.stringify(simplifiedShortlist))}`}>Download printable PDF</A>
}

const WrappedPrint = () =>
    <ShortlistContextConsumer>
    {context => 
        <PrintShortlist shortlist={context.shortlist}/>
    }
    </ShortlistContextConsumer>

export default WrappedPrint