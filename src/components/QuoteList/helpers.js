export const filterQuotes = (quote, wordCount) => {
    let keep = true;
    // Age and Gender filter Name/Municipality-filtered candidates.
    // A) Suodatus: alle 18-vuotiaat, ei saa sisältää 18-vuotiaita ehdokkaita,
    // B) Suodatus: yli 19-vuotiaat, tulee sisältää myös 19-vuotiaat jotta suodatus toimii intuitiivisesti.
    const quoteWords = quote.match(/(\w+)/g).length;
    if (quoteWords) {
        console.log(quote);
        if (quoteWords <= wordCount) {
            console.log("Pidetää?");
            keep = false;
        }
    }
    return keep;
};