import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import styled from "styled-components"
import theme from "../_theme"
import marker from "../Map/activeMarker.svg"

const P = styled.p`
    color: ${theme.grey2};
    margin: 50px 0px 20px 0px;
    text-align: center;
    opacity: 0.4;
`

const Map = ({
    geo
}) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_CLIENT_KEY
    })

    return isLoaded ? 
            <GoogleMap 
                mapContainerClassName="detail-map"
                clickableIcons={false}
                options={{
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    zoomControl: false,
                }}
                zoom={15}
                center={{
                    lat: geo.coordinates[1],
                    // Push the map off-centre
                    lng: geo.coordinates[0] - 0.003
                }}
            > 
                <Marker
                    position={{
                        lat: geo.coordinates[1],
                        lng: geo.coordinates[0]
                    }}
                    clickable={false}
                    icon={{
                        url: marker,
                        optimized: false,
                        scaledSize: new window.google.maps.Size(70, 70),
                    }}
                />
            </GoogleMap>
    : 
        <P>Map loading...</P>
}

export default Map