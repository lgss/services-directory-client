import React from "react"

const ShortlistContext = React.createContext()

export const ShortlistContextProvider = ({
    children
}) => {

    const initialiseShortlist = () => {
        if(!window.localStorage.getItem("shortlist")){
            window.localStorage.setItem("shortlist", JSON.stringify([]))
        }
    }

    const getShortlist = () => {
        initialiseShortlist()
        return JSON.parse(window.localStorage.getItem("shortlist"))
    }

    const isInShortlist = (assetId) => {
        return getShortlist().includes(assetId)
    }

    const addToShortlist = (assetId) => {
        initialiseShortlist()
        let shortlist = getShortlist()
        shortlist.push(assetId)
        window.localStorage.setItem("shortlist", JSON.stringify(shortlist))
    }

    const removeFromShortlist = (assetId) => {
        initialiseShortlist()
        let shortlist = getShortlist()
        let filteredShortlist = shortlist.filter(item => item !== assetId)
        window.localStorage.setItem("shortlist", JSON.stringify(filteredShortlist))
    }

    return (
        <ShortlistContext.Provider
            value={{
                shortlist: getShortlist(),
                addToShortlist: addToShortlist,
                removeFromShortlist: removeFromShortlist,
                isInShortlist: isInShortlist
            }}
        >
            {children}
        </ShortlistContext.Provider>
    )
}

export const ShortlistContextConsumer = ShortlistContext.Consumer