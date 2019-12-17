import React from "react"
import styled from "styled-components"
import theme from "../components/_theme"
import Layout from "../components/Layout"
import FeedbackHeader from "../components/FeedbackHeader"
import FeedbackForm from "../components/FeedbackForm"
import { Helmet } from "react-helmet"

const Outer = styled.div`
    padding: 60px 15px;
`

const ContentArea = styled.div`
    max-width: ${theme.maxWidth};
    margin: 0px auto;
`

const TwoThirdsColumn = styled.div`
    max-width: calc(${theme.maxWidth} / 2 );
`

const IndexPage = () =>
    <Layout>
        <Helmet>
            <title>Give feedback | Buckinghamshire Council</title>
        </Helmet>
        <FeedbackHeader/>
        <Outer>
            <ContentArea>
                <TwoThirdsColumn>
                    <FeedbackForm/>
                </TwoThirdsColumn>
            </ContentArea>
        </Outer>
    </Layout>

export default IndexPage