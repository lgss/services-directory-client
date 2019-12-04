import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import queryString from "query-string"
import Layout from "../components/Layout"
import styled from "styled-components"
import theme from "../components/_theme"
import Card from "../components/Card"
import Map from "../components/Map"
import { prettyMiles } from "../lib/utils"

const Nav = styled.nav`
    padding: 10px 15px;
`

const ResultsArea = styled.section`
    background-color: ${theme.grey5};
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: row;
        flex: 1;
        min-height: 0;
    }
`

const ListArea = styled.div`
    padding: 15px;
    @media screen and (min-width: 700px){
        width: 500px;
        min-height: 0;
        overflow-y: scroll;
    }
`

const MapArea = styled.div`
    display: none;
    @media screen and (min-width: 700px){
        display: block;
        flex: 1;
        padding: 15px 15px 15px 0px;
    }
`

const CardList = styled.ul`
    list-style: none;
    margin-bottom: 50px;
`

const P = styled.p`
    text-align: center;
    font-size: 1.1em;
    color: ${theme.grey2};
`

const Button = styled.button`
    background: none;
    color: ${theme.blue};
    border: 2px solid ${theme.blue};
    padding: 20px 45px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
    &:hover{
        filter: brightness(1.3)
    }
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 700px){
        display: block;
        width: auto;
        margin: 15px auto 40px auto;
    }
`

const MapPage = ({
    location
}) => {

    const [hoveredService, setHoveredService] = useState(false)
    const [services, setServices] = useState([])
    const history = useHistory()

    const query = queryString.parse(location.search)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_HOST}/api/services${location.search}`)
            .then(res => res.json())
            .then(data => setServices(data.results))
    }, [location.search])

    return(
        <Layout fullPage>
            <Nav>Filters here</Nav>
            <ResultsArea>
                <ListArea>
                    {hoveredService || "false"}
                    <CardList>
                        {services.map(service =>
                            <Card 
                                {...service} 
                                key={service.assetId}
                                onMouseEnter={()=>{
                                    setHoveredService(service.assetId)
                                }}
                                onMouseLeave={()=>{
                                    setHoveredService(false)
                                }}
                            />
                        )}
                    </CardList>
                    <P>That's everything within {prettyMiles(query.radius)}</P>
                    <Button onClick={()=>{
                        query.radius = 1000
                        history.push(`/map?${queryString.stringify(query)}`)
                    }}>Widen search area</Button>
                </ListArea>
                <MapArea>
                    <Map
                        services={services}
                        lat={query.lat}
                        lng={query.lng}
                    />
                </MapArea>
            </ResultsArea>
        </Layout>
    )
}

export default MapPage