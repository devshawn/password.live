import { lightBlue900 } from "material-ui/styles/colors"

export const tabItemContainerStyle = (items) => {
    return {
        "background": lightBlue900,
        "margin": "0",
        "height": "64px",
        "width": `${items.length * 150}px`
    }
}

export const tabItemStyle = {
    "fontSize": "16px"
}

export const appBarStyle = {
    "background": lightBlue900
}
