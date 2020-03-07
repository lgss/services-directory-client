import React from "react"
import styled from "styled-components"
import LocationFilter from "./LocationFilter"
import Filter from "./Filter"
import Shortlist from "../Shortlist"
import config from "../../_config"
import Share from  "../Share"

const Outer = styled.nav`
    padding: 10px 15px;
    @media screen and (min-width: 900px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

const Right = styled.div`
    margin-top: 15px;
    @media screen and (min-width: 900px){
        margin-top: 0px;
    }
`

const Filters = () =>
    <Outer>
        <div>
            <LocationFilter/>
            <Filter
                label="Interests"
                name="category"
                options={config.interestsOptions}
            />
            <Filter
                label="When you're free"
                name="days"
                options={config.daysOptions}
            />
            <Filter
                label="Ages"
                name="age"
                options={config.ageOptions}
            />
            <Filter
                label="Accessibility"
                name="accessibility"
                options={config.accessibilityOptions}
            />
        </div>
        <Right>
            <Shortlist/>
            <Share/>
        </Right>
    </Outer>
    
export default Filters
