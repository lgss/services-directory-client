import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import { Dialog } from "@reach/dialog"
import { ShortlistContextConsumer } from "../../contexts/shortlistContext"
import Card from "../Card"
import { useHistory } from "react-router-dom"
import { Inner, CloseButton } from "../Filters/utils"
import cross from "../DetailDialog/cross.svg"

const Button = styled.button`
    display: inline-block;
    font-size: 0.95rem;
    padding: 5px 15px;
    background: ${theme.paleOrange};
    color: ${theme.grey1};
    cursor: pointer;
    border: none;
    margin-right: 15px;
    &:focus{
        outline: 4px solid ${theme.focus};
    }
`

const Headline = styled.h2`
    color: ${theme.darkText};
    font-size: 1.5em;
`

const StyledDialog = styled(Dialog)`
  position: relative;
  line-height: 1.4;
  color: ${theme.grey1};
`

const List = styled.ul`
    list-style: none;
    display: block;
    background: ${theme.grey5};
    padding: 30px;
`

const NothingToShow = styled.p`
    margin: 30px 50px;
    text-align: center;
    color: ${theme.grey2};

`

const Shortlist = ({
    search
}) => {

    const history = useHistory()
    const [dialogOpen, setDialogOpen] = useState(false)

    return(
        <ShortlistContextConsumer>
            { context =>
                <>
                    <Button onClick={() => setDialogOpen(true)}>
                        {context.shortlist.length > 0 ?
                            <><strong>See shortlist</strong> ({context.shortlist.length})</>
                            :
                            <>Shortlist is empty</>
                        }
                    </Button>
                    <StyledDialog isOpen={dialogOpen} onDismiss={() => setDialogOpen(false)} aria-label="Your shortlist">
                        <CloseButton onClick={() => setDialogOpen(false)}>
                            <img src={cross} alt="Close"/>
                        </CloseButton>
                        <Inner>
                            <Headline>Your shortlist</Headline>
                        </Inner>
                        <List>
                            {(context.shortlist.length > 0) ? 
                                context.shortlist.map(service =>
                                    <Card 
                                        key={service.assetId}
                                        service={service}
                                        search={history.location.search}
                                    />
                                )
                                :
                                <NothingToShow>Adding services to your shortlist means you can review them later, as long as you use the same browser.</NothingToShow>
                            }

                        </List>
                    </StyledDialog>
                </>
            }
        </ShortlistContextConsumer>
    )
}

export default Shortlist