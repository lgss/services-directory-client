import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import InterestsQuestion from "./InterestsQuestion"
// import LocationQuestion from "./LocationQuestion"

const Button = styled.button``

const Form = () => {
    
    return(
        <form method="get" action="/map">
            <InterestsQuestion/>
            {/* <LocationQuestion/> */}
            <Button type="submit">See results</Button>
            Or, just <a href="/map">see everything</a>.
        </form>
    )
}

export default Form