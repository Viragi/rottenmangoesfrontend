import React from 'react';
import {connect} from 'react-redux';
import GenerMovies from './GenerMovies';
import PopularMovies from './PopularMovies.js';
import YearBaseMovies from './YearBaseMovies.js';
import {apiCallAction} from '../reducer/action';

class HomePage extends React.Component{
  componentDidMount(){
    this.props.apiCall();
  }

  render(){
    return (
       <div class="cointainer">
         <div class="row">
            <div class="col">
              <PopularMovies/>
            </div>
            <div class="col">
            <GenerMovies/>
            </div>
            <div class="col">
            <YearBaseMovies/>
            </div>

         </div>
        </div>
    );
  };

}

function mapDispatchToProps (dispatch){
  return{
    apiCall: (item)=>{
      dispatch(apiCallAction(item))
    }

  }
}

 function mapStateToProps(state){
  return{
  data: state.data
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
