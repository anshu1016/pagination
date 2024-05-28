import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/PageReducer";

const GlobalContext = createContext();
const GlobalContextProvider = ({ children }) => {
    const initialState = {
        page: 1,
        getData: [],
        isLoading: true,
        totalPages: 0
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data, "API_DATA");
            dispatch({
                type: "GET_DATA",
                payload: {
                    getData: data.users,
                    totalPages: 100 // Assuming this is the total number of pages you have
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    const getNextPage = () => {
        console.log("next_button_clicked");
        dispatch({
            type: "NEXT_PAGE"
        });
    };

    const getPrevPage = () => {
        console.log("prev_button_clicked");
        dispatch({
            type: "PREV_PAGE"
        });
    };

    const getInputPage = (num) => {
        console.log("input_button_clicked", num);
        dispatch({
            type: "INPUT_PAGE",
            payload: num
        });
    };
    const getPageClick =(num) =>{
      
        dispatch({
            type:"BUTTON_PAGE",
            payload:num
        })
        console.log("PAGE_BUTTON_CLICKED",num)
    }

    useEffect(() => {
        fetchApiData(`https://give-me-users-forever.vercel.app/api/users/${state.page}/next`);
    }, [state.page]);

    return (
        <GlobalContext.Provider value={{ ...state, getInputPage, getNextPage, getPrevPage,getPageClick }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };
