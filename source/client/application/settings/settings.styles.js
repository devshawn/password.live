import lightBlue from "@material-ui/core/colors/lightBlue"

export const shieldIconStyle = {
    paddingLeft: "8px",
    color: "white"
}

export const toggleStyle = {
    marginBottom: 16
}

export const dividerStyle = {
    marginBottom: 12
}

export const sliderStyle = {
    marginTop: 24,
    marginBottom: 40,
    backgroundColor: lightBlue[300]
}

export const switchStyle = {
    root: {
        float: "right",
        position: "relative",
    },
    colorSwitchBase: {
        color: lightBlue[300],
        '&$colorChecked': {
            color: lightBlue[500],
            '& + $colorBar': {
                backgroundColor: lightBlue[500],
            },
        },
    },
    colorBar: {},
    colorChecked: {},
}
