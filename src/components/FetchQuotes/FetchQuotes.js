import React from 'react'
import { QuoteButton, QuoteButtonWrapper } from './styles'
import { useDispatch } from 'react-redux';
import { fetchingQuote, deleteQuotes } from '../../actions/actions';

export const FetchQuotes = () => {
    const dispatch = useDispatch();
    return (
        <QuoteButtonWrapper>
            <QuoteButton primary onClick={() => dispatch(fetchingQuote())}>Fetch quote</QuoteButton>
            <QuoteButton danger onClick={() => dispatch(deleteQuotes())}>Delete all quotes</QuoteButton>
        </QuoteButtonWrapper>
    )
}
