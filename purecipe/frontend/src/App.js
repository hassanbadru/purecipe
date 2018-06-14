import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';



// App component
class App extends Component {

  constructor(props){
    super(props)
    this.state = {search_array: [], input: ''}
  }


  addToList = (e) => {

        if (e == "") {
          this.setState({search_array: []})
        } else {


        let that = this

          axios.get(`/api/?q=${e}`)
          .then(response => response.data).then(data => {
              console.log(data.results, e)
              that.setState({search_array: data.results, input: e})


          })
          .catch(error => console.log('BAD', error));
        }


  }



  render() {

    let {search_array, input} = this.state


    return (
      <div id="intro">
        <div className="intro-body">
          <div className="container">


            <div className="row">
              <div className="col-md-12">
                <h1>Pu<span className="brand-heading">recipe</span></h1>
                <p className="intro-text">An app that allows you find recipes</p>
              </div>
            </div>


            <div className='row'>
              <SearchInput addToList={this.addToList} />

              <SearchResult search_array={search_array} input={input} />
            </div>


          </div>
        </div>
      </div>

    );
  }
}



// User Input Panel
const SearchInput = (props) => {

  return (

    <div className={"form"} style={{height: 200}}>

      <h4>Find Your Favorite Recipe</h4>

      <input
        type="text"
        placeholder="Search"
        name="search"
        onChange={(e) => props.addToList(e.target.value)}
      />

    </div>
  )
}




// Result Panel
const SearchResult = (props) => {

  let {search_array, input} = props

  // console.log(search_array)

  if (search_array === undefined || search_array.length == 0) {

    // array empty or does not exist
      return (
        <div className="result_view" style={{height: 400, overflowY: 'auto'}}>
          <span style={{color: 'red'}}>No Results to show for <strong>"{input}"</strong></span>
        </div>
      )
    } else {
        return (
          <div className="result_view" style={{height: 400, overflowY: 'auto'}}>
            <h4>Search Results: <strong>"{input}"</strong></h4>

            <ol>
              {
                search_array.map((item, i) => (
                  <li key={i} style={{color: 'black'}}>{item.title}</li>
                )
                )
              }
            </ol>

          </div>
        )
      }

}



export default App;
