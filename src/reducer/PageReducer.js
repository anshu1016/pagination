const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            };
        case "GET_DATA":
            return {
                ...state,
                isLoading: false,
                getData: payload.getData,
                totalPages: payload.totalPages
            };
        case "NEXT_PAGE":
            let pageNumInc = state.page + 1;
            if (pageNumInc >= state.totalPages) {
                pageNumInc = 0;
            }
            return {
                ...state,
                page: pageNumInc
            };
        case "PREV_PAGE":
            let pageNumDec = state.page - 1;
            if (pageNumDec < 0) {
                pageNumDec = 0;
            }
            return {
                ...state,
                page: pageNumDec
            };
        case "INPUT_PAGE":
            console.log(payload,"input_payload")
            return {
                ...state,
                page: payload
            }
        case "BUTTON_PAGE":
            return {
                ...state,
                page:payload
            }
        default:
            return state;
    }
};

export { reducer };
