import React from 'react'
import { useSelector } from 'react-redux';
import * as selectors from '../../selectors';
import { CounterWrapper, StyledLength } from './styles'

export const QuoteCounter = () => {
    const quotes = useSelector(selectors.getQuotes);
    const filteredQuotes = useSelector(selectors.getFilteredQuotes);
    return (
        <CounterWrapper>
            Total quote count: <StyledLength>{quotes?.length}</StyledLength><br />
            Quotes in view: <StyledLength>{filteredQuotes?.length ? filteredQuotes?.length : quotes?.length}</StyledLength>
        </CounterWrapper>
    )
}
