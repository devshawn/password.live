export const defaultPasswordSettings = {
    length: 10,
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false
}

export const UPPERCASE_REGEX = /([A-Z])/g
export const LOWERCASE_REGEX = /([a-z])/g
export const NUMBER_REGEX = /([\d])/g
export const SYMBOL_REGEX = /([\?\-])/g
export const NON_REPEATING_CHAR_REGEX = /([\w\d\?\-])\1{2,}/g
