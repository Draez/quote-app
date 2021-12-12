import React from 'react'
import { useDispatch } from 'react-redux'
import { updateWordCount } from '../../actions/actions'
import { FilterInput, FilterLabel } from './styles'

export const QuoteFilter = () => {
    const dispatch = useDispatch();
    return (
        <section>
            <FilterLabel htmlFor="wordCount">Word count filter:</FilterLabel>
            <FilterInput type="number" min="1" name="wordCount" defaultValue="1" onChange={(e) => dispatch(updateWordCount(e.target.value))} />
        </section>
    )
}
