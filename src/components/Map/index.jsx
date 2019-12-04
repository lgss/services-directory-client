import React from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"

const Map = ({
    lat,
    lng
}) => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })

    return isLoaded ? <GoogleMap 
        mapContainerClassName="list-map"
        options={{
            mapTypeControl: false,
            streetViewControl: false
        }}
        zoom={13} 
        center={{
            lat: parseFloat(lat), 
            lng: parseFloat(lng)
        }}
    /> 
    : <p>wait...</p>
}

export default Map