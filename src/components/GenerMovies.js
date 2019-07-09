import React from 'react';
import {connect} from 'react-redux';

class GenerMovies extends React.Component{

    render(){
            // console.log("GGEENNERR MOvies",this.props.generMovies);
            var generList = this.props.generMovies.map((item)=>{
                return(
                    <li class="list-group-item"> 
                        <div>
                            <a>
                                Top 100 {item.type} Movies
                            </a>
                        </div>
                        
                    </li>  
                )
            })
        return(
            <div>
                <h5> TOP 100 MOVIES BY GENRE</h5>
               <ul>
                    {generList}
               </ul>    
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return{
        generMovies: state.generMovies
    }
}
export default connect(mapStateToProps)(GenerMovies);