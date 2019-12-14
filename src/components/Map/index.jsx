import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import ServiceMarker from "./ServiceMarker"
import { useHistory } from "react-router-dom"
import queryString from "query-string"

const P = styled.p`
    color: ${theme.grey2};
    margin: 50px 0px 20px 0px;
    text-align: center;
    opacity: 0.4;
`

const Map = ({
    query,
    services,
    lat,
    lng,
    hoveredService,
    handleMapDrag
}) => {

    const history = useHistory()
    const mapInstance = useRef(null)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_CLIENT_KEY
    })
    const [initialBounds, setInitialBounds] = useState(false)

    useEffect(()=>{
        if(isLoaded && !initialBounds){
            const bounds = new window.google.maps.LatLngBounds()
            services.map(service => {
                return bounds.extend(new window.google.maps.LatLng(
                    service.geo.coordinates[1],
                    service.geo.coordinates[0]
                ))
            })
            setInitialBounds(true)
            mapInstance.current.state.map.fitBounds(bounds)
        }
    // eslint-disable-next-line
    }, [services])

    return isLoaded ? 
        <GoogleMap 
            mapContainerClassName="list-map"
            ref={mapInstance}
            options={{
                mapTypeControl: false,
                streetViewControl: false
            }}
            zoom={16}
            // center={{
            //     lat: parseFloat(lat) || false, 
            //     lng: parseFloat(lng) || false
            // }}
            onDragEnd={()=>{
                handleMapDrag(
                    mapInstance.current.state.map.center.lat(),
                    mapInstance.current.state.map.center.lng()
                )
            }}
        > 
            {services.map(service=>
                <ServiceMarker
                    key={service.assetId} 
                    service={service} 
                    hoveredService={hoveredService}
                />    
            )}
        </GoogleMap>
    : 
        <P>Map loading...</P>
}

export default Map