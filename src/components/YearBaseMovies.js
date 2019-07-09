import React from 'react';
import {connect} from 'react-redux';

class YearBaseMovies extends React.Component{

    render(){
        //console.log("year based movies", this.props.yearBaseMovies, this.props.listOfYears);
        if(this.props.listOfYears != undefined){
            var movieObj=this.props.yearBaseMovies;
            var movieResult= this.props.listOfYears.map((item)=>{
                return (
                    <li class= "list-group-item">
                        <div id={movieObj[item].id}>
                            <a class="text-dark">
                                {movieObj[item].release_year} {movieObj[item].title}
                            </a>
                        </div>

                    </li>
                )
            })
        }
        
        return(
            <div>
                <h5> Best Movies By Year</h5>
                <ul>
                    {movieResult}
                </ul>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return{
        yearBaseMovies: state.yearBaseMovies,
        listOfYears: state.listOfYears
    }
}

export default connect(mapStateToProps)(YearBaseMovies);