import React from 'react';
import {Route, Link} from 'react-router-dom';
import SearchMovieList from './SearchMovieList';
import HomePage from './HomePage';


class NavBar extends React.Component{
    constructor(props){
      super(props);
      this.state={
        searchTerm:""
      }
      this.myRef= React.createRef()
    }

    handleInput=(e)=>{
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    

    render(){
        return(
          <div>
            <div class="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
              <div class="container">
                <Link class="navbar-brand" to="/movies">
                    ROTTEN MANGOES
                </Link>
                <div>
                  <form class="form-inline my-2 my-lg-0" id="searchForm" action="/movies">
                    <input type="hidden"  name="type" value="search"/>
                    <input class="form-control mr-sm-2" placeholder="Search" name="searchTerm" 
                       ref={this.myRef} required/>
                     <button class="btn btn-link my-2 my-sm-0" type="submit" id="searchButton">
                     <Link to= {"/movies/search?search="+(this.myRef.current ? this.myRef.current.value : "")}> Search</Link>
                    </button>
                  </form>
                </div>

              </div>
            </div>  
            <Route exact path= "/movies" component={HomePage}/>
            <Route  path="/movies/search" component={SearchMovieList}/>
            {/* <Route path="/movies/:id" componenet ={}/> */}

          </div>
        )
    }

} 

export default NavBar;