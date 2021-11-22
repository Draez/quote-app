import React from 'react'
import { FilterInput, FilterLabel } from './styles'

export const QuoteFilter = () => {
    return (
        <section>
            <FilterLabel htmlFor="wordCount">Word count filter:</FilterLabel>
            <FilterInput type="number" name="wordCount" defaultValue="1" />
        </section>
    )
}
