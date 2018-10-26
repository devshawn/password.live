import queryString from "query-string"

export const generateSettingsQueryString = (settings) => {
    const { advanced, remember, ...rest } = settings
    return queryString.stringify(rest)
}

export const retrievePasswordSettingsFromQueryString = (query) => {
    return {
        length: parseInt(query.length),
        lowercase: query.lowercase === "true",
        uppercase: query.uppercase === "true",
        numbers: query.numbers === "true",
        symbols: query.symbols === "true"
    }
}
