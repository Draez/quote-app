import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../selectors';
import { SingleQuote } from '../SingleQuote/SingleQuote';
import { filterQuotes } from './helpers';

export const QuoteList = () => {
    const quotes = useSelector(selectors.getQuotes);
    const wordCount = useSelector(selectors.getWordCount);

    const filteredQuotes = useMemo(
        () =>
            quotes
                ? quotes
                    .filter((q) => filterQuotes(q, parseInt(wordCount)))
                : false,
        [quotes, wordCount]
    );

    const quotesWrapper = quotes?.length > 0 ? quotes?.map((quote, index) => (
        <SingleQuote quote={quote} key={index} id={index} quotes={quotes} />
    )) : 'No quotes in sight! Fetch some quotes :)'

    const filteredQuotesWrapper = filteredQuotes?.length > 0 ? filteredQuotes?.map((quote, index) => (
        <SingleQuote quote={quote} key={index} id={index} quotes={quotes} />
    )) : 'No quotes in sight! Fetch some quotes :)'

    return (
        <div>
            <h2>Quotes</h2>
            {filteredQuotesWrapper?.length > 0 ? filteredQuotesWrapper : quotesWrapper}
        </div>
    )
}


