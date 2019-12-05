import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
// import { truncate } from "../../lib/utils"
import activeMarker from "./activeMarker.svg"
import marker from "./marker.svg"

const ServiceMarker = ({
    service,
    hoveredService
}) => 
    <Marker
        key={service.assetId}
        position={{
            lat: service.geo.coordinates[1] + (service.assetId/1500000),
            lng: service.geo.coordinates[0] + (service.assetId/1500000)
        }}
        title={service.name || service.parentOrganisation}
        icon={{
            url: hoveredService === service.assetId ? activeMarker : marker,
            optimized: false,
            scaledSize: hoveredService === service.assetId ? new window.google.maps.Size(70, 70) : new window.google.maps.Size(40, 40),
        }}
    />

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
            lat: parseFloat(lat), 
            lng: parseFloat(lng)
        }}
    > 
        {services.map(service=>
            <ServiceMarker service={service} hoveredService={hoveredService}/>    
        )}
    </GoogleMap>
    : <p>wait...</p>
}

export default Map