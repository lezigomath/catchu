import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <h1>Nom du pseudo</h1>
        <h2>Avatar / Photo de profil</h2>
        <h2>Mon equipement</h2>
        <h2>Mon inventaire</h2>
      </div>
    );
  }
}

export default Profile;

