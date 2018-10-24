import lightBlue500 from "@material-ui/core/colors/lightBlue"
import lightBlue900 from "@material-ui/core/colors/lightBlue"

export const tabItemContainerStyle = (items) => {
    return {
        background: lightBlue900,
        margin: 0,
        height: "64px",
        width: `${items.length * 150}px`
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
