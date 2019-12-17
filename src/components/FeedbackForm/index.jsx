import React, { useState } from "react"
import Radio from "../Radio"
import styled from "styled-components"
import theme from "../_theme"
import fetch from "isomorphic-unfetch"
import { useHistory } from "react-router-dom"
import queryString from "query-string"

const Textarea = styled.textarea`
    margin-top: 20px;
    font-size: 1em;
    border: 2px solid ${theme.grey1};
    padding: 10px;
    border-radius: 2px;
    display: block;
    width: 100%;
    &:focus{
        outline: none;
        box-shadow: 0 0 0 3px ${theme.focus};
    }
    margin-bottom: 55px;
`

const Question = styled.h2`
    color: ${theme.grey1};
    margin-bottom: 20px;
`

const Fieldset = styled.fieldset`
    border: none;
    margin-bottom: 55px;
`

const Message = styled.p`
    padding: 10px;
    background-color: ${theme.paleOrange};
    border: 2px solid ${theme.focus};
    display: block;
    border-radius: 2px;
    margin-bottom: 20px;
`

const Button = styled.button`
    background: ${theme.blue};
    color: white;
    border: none;
    padding: 20px 65px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    display: block;
    width: 100%;
    margin-bottom: 15px;
    &:hover{
        filter: brightness(1.3)
    }
    &:focus, &:active{
        filter: brightness(1);
        outline: 3px solid ${theme.focus};
    }
    @media screen and (min-width: 600px){
        display: inline-block;
        width: auto;
    }
    &:disabled{
        background: ${theme.shadow};
        pointer-events: none;
    }
`

const FeedbackForm = () => {

    const history = useHistory()
    let { serviceId } = queryString.parse(history.location.search)

    const [submitted, setSubmitted] = useState(false)
    const [satisfied, setSatisfied] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch(`${process.env.REACT_APP_API_HOST}/api/feedback`, {
                method: "post",    
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ 
                    message: message,
                    satisfied: satisfied,
                    category: "amend",
                    serviceId: serviceId
                })
            })
            if(res.status === 200){
                setSatisfied("")
                setMessage("")
                setSubmitted(true)
            }
        } catch(e){
            console.log(e)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <Fieldset>
                <Question><legend>Were you able to do what you needed today?</legend></Question>
                <Radio required name="satisfied" onChange={e => setSatisfied(e.target.value)} checked={"yes" === satisfied} value="yes">Yes</Radio>
                <Radio required name="satisfied" onChange={e => setSatisfied(e.target.value)} checked={"somewhat" === satisfied} value="somewhat">Somewhat</Radio>
                <Radio required name="satisfied" onChange={e => setSatisfied(e.target.value)} checked={"no" === satisfied} value="no">No</Radio>
            </Fieldset>

            <label htmlFor="message"><Question>Describe what should be changed about this {serviceId ? "service" : "website"}</Question></label>
            <Textarea 
                required 
                name="message" 
                rows="5"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <div aria-live="polite">
                {submitted && <Message>Your feedback has been submitted successfully.</Message>}
            </div>
            <Button disabled={submitted}>Send feedback</Button>
        </form>
    )
}


export default FeedbackForm