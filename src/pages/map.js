import React, { useEffect, useState, useRef } from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"
import queryString from "query-string"
import Layout from "../components/Layout"
import styled from "styled-components"
import theme from "../components/_theme"
import Card from "../components/Card"
import Map from "../components/Map"
import DetailDialog from "../components/DetailDialog"
import Pagination from "../components/Pagination"
import Filters from "../components/Filters"
import CountywideService from "../components/CountywideService"

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
    opacity: ${props => props.reloading ? "0.4" : "1"};
    pointer-events: ${props => props.reloading ? "none" : "inherit"};
    @media screen and (min-width: 700px){
        width: 500px;
        min-height: 0;
        overflow-y: scroll;
    }
    @media screen and (min-width: 1600px){
        width: 900px;
    }
`

const MapArea = styled.div`
    display: none;
    @media screen and (min-width: 700px){
        display: block;
        flex: 1;
        position: relative;
    }
`

const CardList = styled.ul`
    list-style: none;
    margin-bottom: 50px;
    @media screen and (min-width: 1600px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
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

    const [reloading, setReloading] = useState(false)

    const [currentPage, setCurrentPage] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    const [countywideServices, setCountywideServices] = useState([])

    const history = useHistory()
    const listInstance = useRef(null)

    const query = queryString.parse(location.search)

    useEffect(() => {
        setReloading(true)
        const fetchServices = async () => {
            // 1. Attempt to geocode location server-side if not explicitly provided
            if(query.location && !parseFloat(query.lat) && !parseFloat(query.lng)){
                let res1 = await fetch(`${process.env.REACT_APP_API_HOST}/api/geocode?location=${query.location}`)
                let data1 = await res1.json()
                query.lat = data1.results[0].geometry.location.lat
                query.lng = data1.results[0].geometry.location.lng
                history.push(`/services?${queryString.stringify(query)}`)
            }
            let res2 = await fetch(`${process.env.REACT_APP_API_HOST}/api/services?${queryString.stringify(query)}`)
            let data2 = await res2.json()
            setTotalPages(data2.pages)
            setCurrentPage(query.page || 1)
            setServices(data2.results)
            setCountywideServices(data2.countywideResults)
            setReloading(false)
        }
        fetchServices()
        document.documentElement.scrollTop = 0
        listInstance.current.scrollTop = 0
    // eslint-disable-next-line
    }, [location.search])

    const handleMapDrag = (lat, lng) => {
        query.lat = lat
        query.lng = lng
        query.page = 1
        history.push(`/services?${queryString.stringify(query)}`)
    }

    const handleNextPage = () => {
        query.page = parseInt(currentPage) + 1
        history.push(`/services?${queryString.stringify(query)}`)
    }

    const handlePrevPage = () => {
        query.page = parseInt(currentPage) - 1
        history.push(`/services?${queryString.stringify(query)}`)
    }

    return(
        <Layout fullPage>
            <Filters/>
            <ResultsArea>
                <ListArea 
                    ref={listInstance} 
                    reloading={reloading} 
                >
                    {services.length < 1 ?
                        <>{totalPages === 0 ? <P>No results to show. Try widening your search.</P> : <P>Loading results...</P>}</>
                        :
                        <>
                            <CardList>
                                {(countywideServices.length > 0 && currentPage === 1) &&
                                    <CountywideService service={countywideServices[0]}/>
                                }
                                {services.map(service =>
                                    <Card 
                                        service={service}
                                        search={location.search}
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
                            <Pagination
                                services={services}
                                currentPage={parseInt(currentPage)}
                                totalPages={parseInt(totalPages)}
                                handleNextPage={handleNextPage}
                                handlePrevPage={handlePrevPage}
                            />
                        </>
                    }
                </ListArea>
                <MapArea>
                    <Map
                        search={location.search}
                        services={services}
                        hoveredService={hoveredService}
                        handleMapDrag={handleMapDrag}
                    />
                </MapArea>
            </ResultsArea>
            <Route path="/services/:assetId" component={DetailDialog}/>
        </Layout>
    )
}

export default MapPage