import React, { useEffect, useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import queryString from "query-string"
import Layout from "../components/Layout"
import styled from "styled-components"
import theme from "../components/_theme"
import Card from "../components/Card"
import Map from "../components/Map"

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
    padding: 15px 15px 50px 15px;
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

const NextButton = styled.button`
    background: none;
    color: ${theme.blue};
    border: 2px solid ${theme.blue};
    padding: 20px 65px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    display: block;
    width: 100%;
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
        margin: 20px auto 10px auto;
    }
`

const PrevButton = styled.button`
    background: none;
    border: none;
    color: ${theme.grey2};
    text-decoration: underline;
    margin: 10px auto;
    text-align: center;
    font-size: 1em;
    cursor: pointer;
    display: block;
    &:hover{
        text-decoration: none;
    }
    &:focus{
        color: ${theme.grey1};
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const P = styled.p`
    color: ${theme.grey2};
    margin: 30px 0px 20px 0px;
    text-align: center;
`


const MapPage = ({
    location
}) => {

    const [hoveredService, setHoveredService] = useState(false)
    const [services, setServices] = useState([])
    const [page, setPage] = useState(1)
    const history = useHistory()
    const listInstance = useRef(null)

    const query = queryString.parse(location.search)

    useEffect(() => {
        const fetchServices = async () => {
            // 1. Attempt to geocode location server-side if not explicitly provided
            if(!parseFloat(query.lat) || !parseFloat(query.lng)){
                let res1 = await fetch(`${process.env.REACT_APP_API_HOST}/api/geocode?location=${query.location}`)
                let data1 = await res1.json()
                query.lat = data1.results[0].geometry.location.lat
                query.lng = data1.results[0].geometry.location.lng
                history.push(`/map?${queryString.stringify(query)}`)
            }
            let res2 = await fetch(`${process.env.REACT_APP_API_HOST}/api/services?${queryString.stringify(query)}`)
            let data2 = await res2.json()
            setServices(data2.results)
        }
        fetchServices()
        listInstance.current.scrollTop = 0
    // eslint-disable-next-line
    }, [location.search])

    return(
        <Layout fullPage>
            <Nav></Nav>
            <ResultsArea>
                <ListArea ref={listInstance}>
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

                    <P>Showing 20 nearest results</P>

                    <NextButton onClick={()=>{
                        query.page = page + 1
                        history.push(`/map?${queryString.stringify(query)}`)
                        setPage(page + 1)
                    }}>Next page</NextButton>
                    {page > 1 &&
                        <PrevButton onClick={()=>{
                            query.page = page - 1
                            history.push(`/map?${queryString.stringify(query)}`)
                            setPage(page - 1)
                        }}>Previous page</PrevButton>
                    }
                </ListArea>
                <MapArea>
                    <Map
                        query={query}
                        services={services}
                        hoveredService={hoveredService}
                        lat={query.lat}
                        lng={query.lng}
                    />
                </MapArea>
            </ResultsArea>
        </Layout>
    )
}

export default MapPage