import React from "react"
import styled from "styled-components"
import theme from "../components/_theme"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Form from "../components/Form"
import AlertBox from "../components/AlertBox"

const Outer = styled.div`
    padding: 60px 15px;
`

const ContentArea = styled.div`
    max-width: ${theme.maxWidth};
    margin: 0px auto;
`

const TwoThirdsColumn = styled.div`
    max-width: calc(${theme.maxWidth} / 3 * 2 );
`

const IndexPage = () =>
    <Layout>
        <PageHeader/>
        <Outer>
            <ContentArea>
                <TwoThirdsColumn>
                    <AlertBox>
                        <p>This service is being updated to help vulnerable people who are staying at home due to <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/">coronavirus</a>.</p>
                    </AlertBox>
                    <Form/>
                </TwoThirdsColumn>
            </ContentArea>
        </Outer>
    </Layout>

export default IndexPage