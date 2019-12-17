import React, {useState} from "react"
import ShortlistContextConsumer from "../../contexts/shortlistContext"
import fetch from "isomorphic-unfetch"

const PrintShortlist = ({
    shortlist
}) => {

    const handleSubmit = async () => {
        let res = await fetch(`/print`, {
            method: "POST",
            body: shortlist
        })
    }

    return(
        <ShortlistContextConsumer>
            {context => 
                <form onSubmit={handleSubmit}>
                    <button>Print me</button>
                </form>
            }
        </ShortlistContextConsumer>
    )

}

export default PrintShortlist