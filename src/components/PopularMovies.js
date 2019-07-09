import React from 'react';
import {connect} from 'react-redux';

class PopularMovies extends React.Component{
    render(){
        let movieResult = this.props.popularMovies.map((item)=>{
            return (<li class= "list-group-item">
                <div id= {item.id}> 
                    <a href="/movies/" class="text-dark"> {item.title} ({item.release_year}): {item.rating}% </a>
                </div>
            </li>)
        
            })
        return(
            <div>
               <h5>POPULAR MOVIES OF ALL TIME</h5>
                <ul class="list-group">
                    {movieResult}
                </ul>            
            </div>           
        )
    }
}

function mapStateToProps(state){
    return{
        popularMovies : state.popularMovies
    }

}

export default connect(mapStateToProps)( PopularMovies);