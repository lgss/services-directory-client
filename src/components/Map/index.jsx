import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { GoogleMap } from "@react-google-maps/api"
import ServiceMarker from "./ServiceMarker"
import Checkbox from "../Checkbox"
import { useHistory } from "react-router-dom"
import { GoogleContextConsumer } from "../../contexts/googleContext"

const P = styled.p`
    color: ${theme.ccc_brown};
    margin: 50px 0px 20px 0px;
    text-align: center;
    opacity: 0.4;
`

const Overlay = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    background: white;
    padding: 10px;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.1);
    color: ${theme.grey1};
`

const Map = ({
    services,
    hoveredService,
    handleMapDrag,
    search,
    isLoaded,
    initialBoundsAreSet,
    setInitialBounds
}) => {

    const mapInstance = useRef(null)
    const [searchAsIMoveTheMap, setSearchAsIMoveTheMap] = useState(true)
    const history = useHistory()

    useEffect(()=>{
        if(isLoaded && services.length > 0 && !initialBoundsAreSet){
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
        <>
            <GoogleMap 
                mapContainerClassName="list-map"
                ref={mapInstance}
                options={{
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false
                }}
                zoom={16}
                onDragEnd={()=>{
                    if(searchAsIMoveTheMap){
                        handleMapDrag(
                            mapInstance.current.state.map.center.lat(),
                            mapInstance.current.state.map.center.lng()
                        )
                    }
                }}
            > 
                {services.map(service=>
                    <ServiceMarker
                        key={service.assetId} 
                        service={service} 
                        hoveredService={hoveredService}
                        onClick={() => {
                            history.push(`/services/${service.assetId}${search}`)
                        }}
                    />    
                )}
            </GoogleMap>
            <Overlay>
                <Checkbox
                    small
                    name="search-as-i-move"
                    checked={searchAsIMoveTheMap}
                    onChange={e=>{
                        if(e.target.checked){
                            setSearchAsIMoveTheMap(true)
                        } else {
                            setSearchAsIMoveTheMap(false)
                        }
                    }}
                >
                    Search as I drag the map
                </Checkbox>
            </Overlay>
        </>
    : 
        <P>Map loading...</P>
}

const WrappedMap = props =>
    <GoogleContextConsumer>
        {context =>
            <Map isLoaded={context.isLoaded} {...props}/>
        }
    </GoogleContextConsumer>

export default WrappedMap