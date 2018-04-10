import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';


class App extends Component {
       constructor(props) {
       super(props);

       this.state = {
         topspots: []
       };
     }
   componentWillMount() {

axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));

    }


  render() {

    return (
      <div className='App'>
	      <header>
		      <h1>SAN DIEGO TOP SPOTS</h1>
		      <h4>A list of 30 things must see in San Diego, California</h4>
	      </header>
 


{ this.state.topspots.map(topspot => (
        <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />
    ))
}

     </div>
    );
  }
}


export default App;
