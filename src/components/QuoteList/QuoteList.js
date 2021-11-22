import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../selectors';
import { SingleQuote } from '../SingleQuote/SingleQuote';
import { QuoteWrapper, QuoteButtonDelete } from './styles'

export const QuoteList = () => {
    const quotes = useSelector(selectors.getQuotes);
    const quoteLoading = useSelector(selectors.getQuoteLoading);
    console.log(quotes);
    return (
        <div>
            <h2>Quotes</h2>
            {quotes.length > 0 ? quotes.map((quote, index) => (
                <SingleQuote quote={quote} key={index} id={index} quotes={quotes} />
            )) : 'No quotes in sight! Fetch some quotes :)'}
        </div>
    )
}
