import React from 'react';
import {connect} from 'react-redux';
import {searchQueryApi} from '../reducer/action';

class SearchMovieList extends React.Component{

    componentDidMount(){
        this.updateSearchResult();
    }
    componentDidUpdate(){
        this.updateSearchResult();
    }

    updateSearchResult() {
        const params = new URLSearchParams(this.props.location.search);
        const item = params.get('search'); // bar
        // console.log("serach movie item", item);
        this.props.queryApi(item);
    }

    

    render(){
        // console.log("SSEEAARRCCHH resulttt", this.props.searchResult);
        var  movieResult;
        if(this.props.searchResult != undefined && this.props.searchResult.data!=undefined){
                movieResult = this.props.searchResult.data.map((item)=>{
                return (<li className= "list-group-item">
                    <div id= {item.id}> 
                        <a href="/movies/" className="text-dark"> {item.title} ({item.release_year}): {item.rating}% </a>
                    </div>
                </li>)
            
                })
            }
        
        return(
            <div>
               <h5>Searched Term: </h5>
                <ul className="list-group">
                    {movieResult ? movieResult : null }
                </ul>            
            </div>           
        )
    }
}

function mapStateToProps(state){
    return{
        searchResult : state.searchResult
    }
}

function matchDispatchToProps(dispatch){
    return{
        queryApi: (item)=>{
            dispatch(searchQueryApi(item))
        }
    }
}

export default connect(mapStateToProps,matchDispatchToProps)( SearchMovieList);