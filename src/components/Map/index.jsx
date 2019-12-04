import React from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"

const Map = () => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })

    return isLoaded ? <GoogleMap 
        mapContainerClassName="list-map"
        options={{
            mapTypeControl: false,
            streetViewControl: false
        }}
        zoom={12} 
        center={{
            lat: 0, 
            lng: 0
        }}
    /> 
    : <p>wait...</p>
}

export default Map