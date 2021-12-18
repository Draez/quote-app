import React from 'react'
import { QuoteWrapper, QuoteButtonDelete } from '../QuoteList/styles'
import { useDispatch } from 'react-redux';
import { deleteQuote } from './../../actions/actions';

export const SingleQuote = ({ quote }) => {
    const dispatch = useDispatch();

    return (
        <QuoteWrapper>
            <p>{quote}</p>
            <QuoteButtonDelete onClick={() => dispatch(deleteQuote(quote))}>Delete</QuoteButtonDelete>
        </QuoteWrapper>
    )
}
