import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { GoogleContextConsumer } from "../../contexts/googleContext"

const Input = styled.input`
    margin-top: 20px;
    font-size: 1em;
    width: 100%;
    padding: 10px;
    color: ${theme.grey1};
    border: 2px solid ${theme.grey1};
    &:focus{
        outline: 3px solid ${theme.focus};
    }
`

const AutocompletePlacesInput = ({
    onChange,
    value,
    isLoaded
}) => {

    const [latLng, setLatLng] = useState([0,0])
    const inputRef = useRef(false)
    let autocomplete = null

    useEffect(() => {
        if(isLoaded){
            // eslint-disable-next-line
            autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, { 
                types: ["geocode"]
            })
            autocomplete.setComponentRestrictions({"country": ["gb"]})
            autocomplete.addListener("place_changed", handlePlaceChanged)
        }
    }, [isLoaded])

    const handlePlaceChanged = () => {
        const place = autocomplete.getPlace()
        if(place.geometry){
            const lat = place.geometry.location.lat()
            const lng = place.geometry.location.lng()
            setLatLng([lat, lng])
            // feed a synthetic event to the change handler if it exists
            if(onChange) onChange({
                target: {
                    value: place.formatted_address
                }
            })
        }
    }

    return(
        <>
            <Input 
                ref={inputRef}
                name="location" 
                value={value}
                onChange={onChange}
                required
                id="location"
                placeholder="eg. HP20 1UA"
            />
            <input type="hidden" name="lat" value={latLng[0]} readOnly/>
            <input type="hidden" name="lng" value={latLng[1]} readOnly/>
        </>
    )
}

const WrappedInput = props =>
    <GoogleContextConsumer>
        {context =>
            <AutocompletePlacesInput isLoaded={context.isLoaded} {...props}/>
        }
    </GoogleContextConsumer>

export default WrappedInput