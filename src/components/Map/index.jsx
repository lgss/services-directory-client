import React, { useEffect, useRef, useState } from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import ServiceMarker from "./ServiceMarker"
import { useHistory } from "react-router-dom"
import queryString from "query-string"

const Map = ({
    query,
    services,
    lat,
    lng,
    hoveredService
}) => {

    const history = useHistory()
    const mapInstance = useRef(null)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_CLIENT_KEY
    })
    const [initialBounds, setInitialBounds] = useState(false)

    // console.log(initialBounds)
    // console.log(isLoaded)

    useEffect(()=>{

        // console.log(isLoaded)

        if(isLoaded && !initialBounds){
            const bounds = new window.google.maps.LatLngBounds()
            services.map(service => {
                console.log(service)
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

    const handleDrag = () => {
        query.lat = mapInstance.current.state.map.center.lat()
        query.lng = mapInstance.current.state.map.center.lng()
        query.page = 1
        history.push(`/map?${queryString.stringify(query)}`)
    }

    return isLoaded ? 
        <GoogleMap 
            mapContainerClassName="list-map"
            ref={mapInstance}
            options={{
                mapTypeControl: false,
                streetViewControl: false
            }}
            zoom={16}
            center={{
                lat: parseFloat(lat), 
                lng: parseFloat(lng)
            }}
            onDragEnd={handleDrag}
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
        <p>Map loading...</p>
}

export default Map