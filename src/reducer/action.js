import axios from 'axios';

const headerObj= {headers:{
  'accept':"application/json"
    }
}
function apiCallAction(item){
    return function(dispatch){
        axios.get('http://localhost:3000/movies',headerObj).then((res)=>{
            dispatch({ type: 'apiCall',
                apiData: res,
                item: item
            });
        })
    }
}

function searchQueryApi(item){
    console.log("Item from searchquery", item);
    return function(dispatch){
        axios.get(`http://localhost:3000/movies?type=search&term=${item}`,headerObj).then((res)=>{
            dispatch({
                type:'searchQueryApi',
                searchResult:res,
                term: item
            })
        })

    }

}

export  {apiCallAction, searchQueryApi};