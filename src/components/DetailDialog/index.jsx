import React, { useState, useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { useHistory, useParams } from "react-router-dom"
import { Dialog } from "@reach/dialog"
import cross from "./cross.svg"
import DetailMap from "./DetailMap"
import { prettyDays } from "../../lib/utils"
import Checklists from "./Checklists"
import fetch from "isomorphic-unfetch"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

const StyledDialog = styled(Dialog)`
  position: relative;
  line-height: 1.4;
  color: ${theme.grey1};
`

const Header = styled.header`
  padding: 25px;
  @media screen and (min-width: 700px){
    padding: 45px;
  }
`

const Tag = styled.strong`
    display: inline-block;
    font-size: 0.95rem;
    color: white;
    background: ${theme.blue};
    padding: 0px 5px;
    text-transform: capitalize;
    margin-right: 15px;
`

const Headline = styled.h1`
  margin-bottom: 10px;
`

const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  padding: 5px;
  background: none;
  cursor: pointer;
  &:focus{
    background: ${theme.focus};
    outline: 1px solid ${theme.focus};
  }
  img{
    display: block;
  }
`

const MapHolder = styled.section`
  display: none;
  @media screen and (min-width: 700px){
    display: block;
    position: relative;
    padding: 30px;
    min-height: 250px
  }
`

const AddressPanel = styled.div`
  display: none;
  @media screen and (min-width: 700px){
    display: block;
    position: relative;
    background: white;
    padding: 25px;
    width: 100%;
    max-width: 250px;
  }
  a{
    &:hover{
        text-decoration: none;
    }
    &:focus{
        background: ${theme.focus};
        outline: 1px solid ${theme.focus};
    }
  }
`

const Subheadline = styled.h3`
  margin-bottom: 5px;
`

const SummaryPanel = styled.section`
  padding: 25px;
  @media screen and (min-width: 700px){
    padding: 45px;
  }
`

const TwoColumns = styled.div`
  margin-top: 25px;
  @media screen and (min-width: 700px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
  }
`

const Panel = styled.div`
  margin-top: 20px;
  a{
    &:hover{
        text-decoration: none;
    }
    &:focus{
        background: ${theme.focus};
        outline: 1px solid ${theme.focus};
    }
  }
`

const MobilePanel = styled(Panel)`
  @media screen and (min-width: 700px){
    display: none;
  }
`

const Button = styled.a`
    text-decoration: none;
    text-align: center;
    background: none;
    color: ${theme.blue};
    border: 2px solid ${theme.blue};
    padding: 20px 65px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    display: block;
    width: 100%;
    margin-bottom: 20px;
    &:hover{
        filter: brightness(1.3)
    }
    &:focus, &:active{
        filter: brightness(1);
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 700px){
        display: inline-block;
        width: auto;
    }
`

const Disclaimer = styled.footer`
  padding: 25px;
  text-align: center;
  @media screen and (min-width: 700px){
    padding: 45px;
  }
  p{
    margin-bottom: 10px;
  }
  a{
    &:hover{
        text-decoration: none;
    }
    &:focus{
        background: ${theme.focus};
        outline: 1px solid ${theme.focus};
    }
  }
`

const DetailDialog = ({
  location
}) => {

  const [service, setService] = useState(false)
  const history = useHistory()
  let { assetId } = useParams()

  useEffect(() => {
    const fetchServices = async () => {
        let res = await fetch(`${process.env.REACT_APP_API_HOST}/api/services/${assetId}`)
        let data = await res.json()
        setService(data.result)
    }
    fetchServices()
// eslint-disable-next-line
}, [])

  const close = () => {
    history.push(`/services${location.search}`)
  }

  return(
    <StyledDialog 
      isOpen={true} 
      onDismiss={close}
      aria-label="Service details"
    >
      <Helmet>
        {(service.name || service.parentOrganisation) &&         <title>{`${service.name || service.parentOrganisation} | Buckinghamshire Council`}</title>}
      </Helmet>
      <CloseButton onClick={close}><img src={cross} alt="Close"/></CloseButton>
      <Header>
        <Headline>{service.name || service.parentOrganisation}</Headline>
        <Tag>{service.category}</Tag>
        {service.name && service.parentOrganisation}
      </Header>
      <MapHolder>
        {service && 
          <>
            <DetailMap geo={service.geo}/>
            <AddressPanel>
              <Subheadline>Where</Subheadline>
              <p>{service.venue}</p>
              <p>{service.area}</p>
              <p><a href={`https://www.google.com/maps/search/${service.postcode}`}>{service.postcode}</a></p>
            </AddressPanel>
          </>
        }
      </MapHolder>

      <SummaryPanel>
        {service.url && <Button href={service.url}>Visit website</Button>}
        <p>{service.description}</p>
        <TwoColumns>
          {(service.frequency || (service.days && service.days.length > 0)) &&
            <Panel>
              <Subheadline>When</Subheadline>
              <p>{service.frequency}</p>
              {service.days && <p>{prettyDays(service.days)}</p>}
            </Panel>
          }
          <Panel>
            <Subheadline>Contact</Subheadline>
            {service.contactName && <p>{service.contactName}</p>}
            {service.phone && <p>{service.phone}</p>}
            {service.email && <p><a href={`mailto:${service.email}`}>{service.email}</a></p>}
          </Panel>
          <MobilePanel>
            <Subheadline>Where</Subheadline>
            <p>{service.venue}</p>
            <p>{service.area}</p>
            <p><a href={`https://www.google.com/maps/search/${service.postcode}`}>{service.postcode}</a></p>
          </MobilePanel>
        </TwoColumns>
      </SummaryPanel>
      <Checklists
        ageGroups={service.ageGroups}
        suitability={service.suitability}
        accessibility={service.accessibility}
        price={service.price}
      />
      <Disclaimer>
        <p>We regularly check and update these community services, but can’t guarantee that they will always be accurate.</p>
        <p>If anything here is out of date or missing, please <Link to={`/feedback?serviceId=${service.assetId}`}>let us know</Link>.</p>
        <p>You may need a referral for some activities and groups. Contact the organiser if unsure.</p>
      </Disclaimer>
    </StyledDialog>
  )
}
export default DetailDialog