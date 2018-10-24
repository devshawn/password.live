import lightBlue from "@material-ui/core/colors/lightBlue"

export const tabItemContainerStyle = (items) => {
    return {
        background: lightBlue[900],
        margin: 0,
        height: "64px",
        width: `${items * 150}px`
    }
}

export const tabItemStyle = {
    fontSize: "16px"
}

export const appBarStyle = {
    background: lightBlue[900]
}

export const appBarTitleStyle = {
    textOverflow: "hidden"
}

export const inkBarStyle = {
    backgroundColor: lightBlue[500]
}

export const iconStyle = {
    margin: "12px 15px 0 15px",
    color: "white"
}
