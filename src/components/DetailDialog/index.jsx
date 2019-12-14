import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Dialog } from "@reach/dialog"

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
    <Dialog isOpen={true} onDismiss={close}>
      <h1>{service.name || service.parentOrganisation}</h1>
      {JSON.stringify(service)}
      <button onClick={close}>Close</button>
    </Dialog>
  )
}
export default DetailDialog