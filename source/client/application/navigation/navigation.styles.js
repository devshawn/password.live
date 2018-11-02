import { lightBlue } from "@material-ui/core/colors"

export const tabItemContainerStyle = (items) => {
    return {
        // background: lightBlue[900],
        // margin: 0,
        // height: "64px",
        width: `${items * 150}px`,
        color: "white"
    }
}

export const tabItemStyle = {
    fontSize: "16px"
}

export const appBarStyle = {
    background: lightBlue[900]
}

export const appBarTitleStyle = {
    color: "white",
    textOverflow: "hidden",
    marginTop: 10,
}

export const inkBarStyle = {
    backgroundColor: lightBlue[500]
}

export const iconStyle = {
    margin: "12px 15px 0 15px",
    color: "white",
}

export const appToolBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "row wrap",
    alignItems: "stretch",
    background: lightBlue[900],
}
