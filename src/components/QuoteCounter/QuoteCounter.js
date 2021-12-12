import React from 'react'
import { useSelector } from 'react-redux';
import * as selectors from '../../selectors';

export const QuoteCounter = () => {
    const quotes = useSelector(selectors.getQuotes);
    const filteredQuotes = useSelector(selectors.getFilteredQuotes);
    return (
        <div>
            Total quote count: {quotes?.length}<br />
            Quotes in view: {filteredQuotes?.length ? filteredQuotes?.length : quotes?.length}
        </div>
    )
}
