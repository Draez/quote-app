import React from 'react'
import { QuoteWrapper, QuoteButtonDelete } from '../QuoteList/styles'

const deleteQuote = (quotes, id) => {
    quotes.splice(id, 1);
    console.log(quotes)
    return quotes;
}

export const SingleQuote = ({ quote, id, quotes }) => {
    return (
        <QuoteWrapper>
            <p>{quote}</p>
            <QuoteButtonDelete onClick={() => deleteQuote(quotes, id)}>Delete</QuoteButtonDelete>
        </QuoteWrapper>
    )
}
