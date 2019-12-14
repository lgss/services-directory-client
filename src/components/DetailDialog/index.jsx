import React, { useState, useEffect } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { useHistory, useParams } from "react-router-dom"
import { Dialog } from "@reach/dialog"
import cross from "./cross.svg"

const StyledDialog = styled(Dialog)`
  position: relative;
`

const Headline = styled.h1`
  color: ${theme.grey1};
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
  }
  img{
    display: block;
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
    <StyledDialog isOpen={true} onDismiss={close}>
      <Headline>{service.name || service.parentOrganisation}</Headline>
      {JSON.stringify(service)}
      <CloseButton onClick={close}><img src={cross} alt="Close"/></CloseButton>
    </StyledDialog>
  )
}
export default DetailDialog