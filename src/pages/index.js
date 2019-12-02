import React from "react"
import styled from "styled-components"
import theme from "../components/_theme"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Form from "../components/Form"

const ContentArea = styled.main`
    max-width: ${theme.maxWidth};
    margin: 0px auto;
    padding: 60px 15px;
`

const TwoThirdsColumn = styled.div`
    max-width: calc(${theme.maxWidth} / 2 );
`

const IndexPage = () =>
    <Layout>
        <PageHeader/>
        <ContentArea>
            <TwoThirdsColumn>
                <Form/>
            </TwoThirdsColumn>
        </ContentArea>
    </Layout>

export default IndexPage