import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []//array--> map {key value pair}
  }

  componentDidMount() {//only once load the comp to the axios layer
    console.log("axios comp mount called");
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}
