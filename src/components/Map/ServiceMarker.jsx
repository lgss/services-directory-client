import React from "react"
import { Marker } from "@react-google-maps/api"
import activeMarker from "./activeMarker.svg"
import marker from "./marker.svg"

const ServiceMarker = ({
    service,
    hoveredService
}) => 
    <Marker
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

export default ServiceMarker