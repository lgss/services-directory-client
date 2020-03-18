import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    margin-bottom: 55px;
    padding: 25px;
    border: 3px solid ${theme.focus};

    a{
        color: ${theme.blue};
        &:hover{
            text-decoration: none;
        }
        &:focus{
            background: ${theme.focus};
            outline: 3px solid ${theme.focus}
        }
    }
`

const AlertBox = ({
    children
}) =>
    <Outer>
        {children}
    </Outer>

export default AlertBox