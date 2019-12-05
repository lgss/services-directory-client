import React from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import ServiceMarker from "./ServiceMarker"

const Map = ({
    services,
    lat,
    lng,
    hoveredService
}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_CLIENT_KEY
    })

    return isLoaded ? <GoogleMap 
        mapContainerClassName="list-map"
        options={{
            mapTypeControl: false,
            streetViewControl: false
        }}
        zoom={14} 
        center={{
            lat: parseFloat(lat || 51.8155276), 
            lng: parseFloat(lng || -0.8106306)
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
    : <p>Map loading...</p>
}

export default Map