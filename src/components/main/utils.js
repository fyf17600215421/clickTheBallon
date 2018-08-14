export const changeBottom = (domList) => {
    return (dispatch) => {
        setInterval(() => {
            if (!domList.length) return;
            dispatch({ type: "changeBottom" })
        }, 6)
    }
}