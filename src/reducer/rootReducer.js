var initialState={
    generMovies:[],
    yearBaseMovies:[],
    popularMovies:[],
    searchResult:{}
}
const rootReducer = (state=initialState,action)=>{
    if(action.type=="apiCall"){
        //console.log("data from reducer", action.apiData.data);  
        let data = action.apiData.data;
        let newState={
            generMovies: data.generMovies,
            yearBaseMovies:data.yearBaseMovies,
            popularMovies:data.popularMovies,
            listOfYears: data.listOfYears
        }  
        return newState;
    }else if(action.type =="searchQueryApi"){

        let newState={
            ...state,
            searchResult : action.searchResult
        }
        return newState;
    }
    return state;

}

export default rootReducer;