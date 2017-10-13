import { PASSWORD_ADVANCED, PASSWORD_SIMPLE } from "./password.categories"

export const validatePasswordSettings = (settings) => {
    const booleanProperties = []

    Object.keys(settings).forEach((prop) => {
        const value = settings[prop]
        if (value === true || value === false) booleanProperties.push(value)
    })

    return (booleanProperties.length > 0) ? booleanProperties.some((prop) => prop === true) : true
}

export const getPasswordFromCategory = (passwordCategory, state) => {
    switch (passwordCategory) {
        case PASSWORD_SIMPLE:
            return state.passwordSimple
        case PASSWORD_ADVANCED:
            return state.passwordAdvanced
        default:
            return ""
    }
}
