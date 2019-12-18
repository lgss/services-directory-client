import React from "react"
import { ShortlistContextConsumer } from "../../contexts/shortlistContext"

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
            url: item.url
        }
    })
    return <a href={`${process.env.REACT_APP_API_HOST}/api/print?data=${encodeURIComponent(JSON.stringify(simplifiedShortlist))}`}>Download printable PDF</a>
}

const WrappedPrint = () =>
    <ShortlistContextConsumer>
    {context => 
        <PrintShortlist shortlist={context.shortlist}/>
    }
    </ShortlistContextConsumer>

export default WrappedPrint