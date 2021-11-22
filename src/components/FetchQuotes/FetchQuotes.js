import React from 'react'
import { QuoteButton, QuoteButtonWrapper } from './styles'
import { useDispatch } from 'react-redux';
import { fetchQuote, fetchingQuote } from '../../actions/actions';

export const FetchQuotes = () => {
    const dispatch = useDispatch();
    return (
        <QuoteButtonWrapper>
            <QuoteButton primary onClick={() => dispatch(fetchingQuote())}>Fetch quote</QuoteButton>
            <QuoteButton danger>Delete all quotes</QuoteButton>
        </QuoteButtonWrapper>
    )
}
