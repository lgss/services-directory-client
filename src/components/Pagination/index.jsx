import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.div`
    margin-bottom: 50px;
`

const NextButton = styled.button`
    background: none;
    color: ${theme.blue};
    border: 2px solid ${theme.blue};
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
    @media screen and (min-width: 700px){
        display: block;
        width: auto;
        margin: 20px auto 10px auto;
    }
`

const PrevButton = styled.button`
    background: none;
    border: none;
    color: ${theme.grey2};
    text-decoration: underline;
    margin: 10px auto;
    text-align: center;
    font-size: 1em;
    cursor: pointer;
    display: block;
    &:hover{
        text-decoration: none;
    }
    &:focus, &:active{
        color: ${theme.grey1};
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
`

const P = styled.p`
    color: ${theme.grey2};
    margin: 30px 0px 20px 0px;
    text-align: center;
`


const Pagination = ({
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    services
}) =>
    <Outer>
        {currentPage === 1 && <P>Showing nearest {services.length} results</P>}
        {(currentPage < totalPages) && <NextButton onClick={handleNextPage}>Next page</NextButton>}
        {(currentPage > 1) && <PrevButton onClick={handlePrevPage}>Previous page</PrevButton>}
    </Outer>

export default Pagination