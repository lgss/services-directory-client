import React, { useState, useEffect } from "react"

const ShortlistContext = React.createContext()

export const ShortlistContextProvider = ({
    children
}) => {

    const [ shortlist, setShortlist ] = useState([])

    // unbake
    useEffect(()=>{
        initialiseShortlist()
        setShortlist(JSON.parse(window.localStorage.getItem("shortlist")))
    }, [])

    // bake
    useEffect(()=>{
        initialiseShortlist()
        window.localStorage.setItem("shortlist", JSON.stringify(shortlist))
    }, [shortlist])

    const initialiseShortlist = () => {
        if(!window.localStorage.getItem("shortlist")){
            window.localStorage.setItem("shortlist", JSON.stringify([]))
        }
    }

    const addToShortlist = (service) => {
        setShortlist([...shortlist, service])
    }

    const removeFromShortlist = (assetId) => {
        setShortlist(shortlist.filter(service => service.assetId !== assetId))
    }

    const isInShortlist = (assetId) => {
        return shortlist.filter(item => item.assetId === assetId).length > 0
    }

    window.isInShortlist = isInShortlist

    return (
        <ShortlistContext.Provider
            value={{
                shortlist: shortlist,
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