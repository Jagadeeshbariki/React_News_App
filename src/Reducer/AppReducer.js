import { InitialValue } from "../ReduxStore/AppStore";

export const appReducer = (state = InitialValue, action)=>{
    

    switch (action.type){

        case 'SET_KEYWORD':
            
            return {
                ...state,
                keyword:action.payload
            }

        case 'SET_CUR_ARTICLES':
            return {
                ...state,
                currentArticle:action.payload
            }

        case 'SET_SHOWLOADER' :
            return {
                ...state,
                showLoader:action.payload
            }

        case 'SET_SHOW_ERROR_PAGE':
            return{
                ...state,
                showErrorpage:action.payload
            }
        default :
            return state
    }
}