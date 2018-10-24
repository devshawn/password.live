import { lightBlue100, lightBlue900 } from "@material-ui/core/colors"

export const footerStyle = {
    height: "28px",
    background: lightBlue900,
    color: "white",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px -2px 6px, rgba(0, 0, 0, 0.12) 0px -2px 4px",
    padding: "12px 20px",
    clear: "both"
}

export const footerLeftStyle = {
    float: "left",
    paddingTop: "4px",
    fontSize: "15px"
}

export const footerRightStyle = {
    float: "right"
}

export const iconHoverOffStyle = {
    color: "rgba(255, 255, 255, 0.5)",
    transition: "color 0.5s ease"
}

export const iconHoverOnStyle = {
    color: "white",
    transition: "color 0.5s ease"
}

export const iconPressedStyle = {
    color: lightBlue100
}
