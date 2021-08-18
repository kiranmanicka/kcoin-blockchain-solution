import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Others extends Component {
  state = { others:[] };

  componentDidMount() {
    fetch(`${document.location.origin}/api/known-addresses`)
      .then(response => response.json())
      .then(a => this.setState({ others: a }));
  }

  render() {
    console.log('this.state', this.state);
      
    return (
      <div>
        <div><Link to='/'>Back</Link></div>
        <h3>Others on the Network</h3>
        {
          
            this.state.others.map(address => {
              return (
                <div key={address}>
                  <div>{address}</div>
                  <br />
                </div>
              );
            })
          
        }
      </div>
    );
  }
}

export default Others;