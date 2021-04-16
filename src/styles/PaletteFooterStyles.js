import sizes from './sizes'

const styles = {
    PaletteFooter: {
        backgroundColor: "white",
        height: "6vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
        marginBottom: "0",
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    emoji: {
        fontSize: "1.5rem",
        margin: "0 0.5rem",
    },
    copy: {
        marginLeft: '10px'
    }
}

export default styles