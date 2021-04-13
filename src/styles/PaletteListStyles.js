const styles = {
    root: {
        height: "100vh",
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'auto'
    },
    container: {
        width: "50%",
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: "wrap"
    },
    nav: {
        display: 'flex',
        width: "100%",
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: "100%",
        display: 'grid',
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
    },
    torso: {
        marginBottom: "10px"
    }
}

export default styles