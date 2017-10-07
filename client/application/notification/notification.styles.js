export const barStyleFactory = (index, style) => {
    return Object.assign(
        {},
        style,
        { bottom: `${5 + (index * 4)}rem` }
    )
}

export const barStyle = {
    font: "3rem normal 'Pt Sans', sans-serif",
    left: "initial",
    right: "-100%"
}

export const activeBarStyle = {
    left: "initial",
    right: "1rem"
}
