import axios from 'axios';
//URL
const url = `https://mis-libros-bck.herokuapp.com/`;
//CONSTANTES
//GET PERSONA
const GET_PERSONA = "GET_PERSONA"
const GET_PERSONA_ERROR = "GET_PERSONA_ERROR";
const GET_PERSONA_SUCCESS = "GET_PERSONA_SUCCESS";

const CHECK_PERSONA = "CHECK_PERSONA"
const CHECK_PERSONA_ERROR = "CHECK_PERSONA_ERROR";
const CHECK_PERSONA_SUCCESS = "CHECK_PERSONA_SUCCESS";
//INITIAL DATA
const initialData = {
    fetching: false,
    loaded: false,
    posting: false,
    updating: false,
    deleting: false,
    reducerChanges: [],
    error: []
}
//REDUCER
export default function reducer(state = initialData, action){
    switch(action.type){

        case GET_PERSONA:
            return {
                ...state,
                fetching:true
            }
        case GET_PERSONA_SUCCESS:
            return {
                ...state,
                fetching:false,
                loaded: true,
                payload: action.payload
            }
        case GET_PERSONA_ERROR:
            return {
                ...state,
                fetchin: false,
                error: [...state.error, action.error]
            }

        case CHECK_PERSONA:
            return {
                ...state,
                fetching:true
            }
        case CHECK_PERSONA_SUCCESS:
            return {
                ...state,
                fetching:false
            }
        case CHECK_PERSONA_ERROR:
            return {
                ...state,
                fetchin: false,
                error: [...state.error, action.error]
            }
        default:
            return {
                ...state
            }
    }
}

//ACTIONS

export const getPersonaAction = () => {
//GET CATEGORIA
    return async (dispatch, getState) => {
        const auth =  {'Authorization': getState().user.user}
        dispatch({
            type: GET_PERSONA
        })
        const res = await axios.get(url + `persona`, {headers: auth})
        if(res.status === 200){
        dispatch({
            type: GET_PERSONA_SUCCESS,
            payload: res.data.respuesta
        })
        }else{
        dispatch({
            type: GET_PERSONA_ERROR,
            error: res.error
        })
        }
    }
}



