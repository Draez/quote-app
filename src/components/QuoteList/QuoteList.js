import React from 'react'
import { useSelector } from 'react-redux';
import * as selectors from '../../selectors';
import { SingleQuote } from '../SingleQuote/SingleQuote';

export const QuoteList = () => {
    const quotes = useSelector(selectors.getQuotes);
    const wordCount = useSelector(selectors.getWordCount);
    const filteredQuotes = useSelector(selectors.getFilteredQuotes);

    const quotesWrapper = quotes?.length > 0 ? quotes?.map((quote, index) => (
        <SingleQuote quote={quote} key={index} id={index} quotes={quotes} />
    )) : 'No quotes in sight! Fetch some quotes :)'

    const filteredQuotesWrapper = filteredQuotes?.length > 0 ? filteredQuotes?.map((quote, index) => (
        <SingleQuote quote={quote} key={index} id={index} quotes={quotes} />
    )) : 'No quotes in sight! Fetch some quotes :)'


    return (
        <div>
            <h2>Quotes</h2>
            {wordCount > 1 ? filteredQuotesWrapper : quotesWrapper}
        </div>
    )
}


