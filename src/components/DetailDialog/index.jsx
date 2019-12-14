import React from "react"
import { useHistory } from "react-router-dom"
import { Dialog } from "@reach/dialog"

const DetailDialog = ({
  location
}) => {

  const history = useHistory()

  const close = () => {
    history.push(`/services${location.search}`)
  }

  return(
    <Dialog isOpen={true} onDismiss={close}>
      <button onClick={close}>Close</button>
      <p>Hello there. I am a dialog</p>
    </Dialog>
  )
}
export default DetailDialog