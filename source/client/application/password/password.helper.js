export const validatePasswordSettings = (settings) => {
    const booleanProperties = []

    Object.keys(settings).forEach((prop) => {
        const value = settings[prop]
        if ((value === true || value === false) && prop !== "remember" && prop !== "advanced") booleanProperties.push(value)
    })

    return (booleanProperties.length > 0) ? booleanProperties.some((prop) => prop === true) : true
}
