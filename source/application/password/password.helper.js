export const validatePasswordSettings = settings => {
    let booleanProperties = []

    Object.keys(settings).forEach(prop => {
        const value = settings[prop]
        if ((value === true || value === false) && prop !== "remember" && prop !== "advanced") booleanProperties = [...booleanProperties, value]
    })

    return (booleanProperties.length > 0) ? booleanProperties.some(prop => prop === true) : true
}
