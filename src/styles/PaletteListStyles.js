import sizes from './sizes'

const styles = {
    root: {
        height: "100vh",
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // overflow: 'auto'
    },
    container: {
        width: "50%",
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "60%"
        },
        [sizes.down("xs")]: {
            width: "70%",
        }
    },
    nav: {
        display: 'flex',
        width: "100%",
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center',
        "& a": {
            color: 'white',
            textDecoration: 'none'
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: "100%",
        display: 'grid',
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1rem"
        }
    },
    torso: {
        marginBottom: "10px"
    }
}

export default styles