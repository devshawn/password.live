import { lightBlue500, lightBlue900 } from "material-ui/styles/colors"

export const tabItemContainerStyle = (items) => {
    return {
        background: lightBlue900,
        margin: 0,
        height: "64px",
        width: `${items * 150}px`
    }
}

export const tabItemStyle = {
    fontSize: "16px"
}

export const appBarStyle = {
    background: lightBlue900
}

export const appBarTitleStyle = {
    textOverflow: "hidden"
}

export const inkBarStyle = {
    backgroundColor: lightBlue500
}

export const iconStyle = {
    margin: "12px 15px 0 15px",
    color: "white"
}
