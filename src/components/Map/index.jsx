import React, { useRef } from "react"
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

    const handleDrag = () => {
        query.lat = mapInstance.current.state.map.center.lat()
        query.lng = mapInstance.current.state.map.center.lng()
        console.log(query)
        history.push(`/map?${queryString.stringify(query)}`)
    }

    return isLoaded ? <GoogleMap 
        mapContainerClassName="list-map"
        ref={mapInstance}
        options={{
            mapTypeControl: false,
            streetViewControl: false
        }}
        zoom={14}
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
    : <p>Map loading...</p>
}

export default Map