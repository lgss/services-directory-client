import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"



const ServiceMarker = ({service}) => 
    <Marker
        position={{
            lat: service.geo.coordinates[1] + (service.assetId/1500000),
            lng: service.geo.coordinates[0] + (service.assetId/1500000)
        }}
    />


const Map = ({
    services,
    lat,
    lng
}) => {
    const {isLoaded, loadError} = useLoadScript({
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
            lat: parseFloat(lat), 
            lng: parseFloat(lng)
        }}
    > 
        {services.map(service=>
            <ServiceMarker service={service}/>    
        )}
    </GoogleMap>
    : <p>wait...</p>
}

export default Map