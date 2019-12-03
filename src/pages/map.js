import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import theme from "../components/_theme"
import Card from "../components/Card"

const Nav = styled.nav`
    padding: 10px 15px;
`

const ResultsArea = styled.section`
    flex: 1;
    min-height: 0;
    background-color: ${theme.grey5};
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: row;
    }
`

const ListArea = styled.div`
    padding: 15px;
    overflow-y: scroll;
    @media screen and (min-width: 700px){
        width: 500px;
        min-height: 0;
    }
`

const MapArea = styled.div`
    display: none;
    @media screen and (min-width: 700px){
        display: block;
        flex: 1;
    }
`

const Map = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;
    background: grey;
`

const MapPage = () =>
    <Layout fullPage>
        <Nav>Filters here</Nav>
        <ResultsArea>
            <ListArea>
                <Card/><Card/><Card/><Card/><Card/><Card/>
            </ListArea>
            <MapArea><Map/></MapArea>
        </ResultsArea>
    </Layout>

export default MapPage