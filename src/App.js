import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersRef } from "./config/firebase";


class App extends Component {
  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';

  }

  findTrack() {
    console.log('findTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }

  componentWillMount() {
    this.props.onFetchTrack();
  }

  render() {
    console.log(this.props.tracks.tracks[0]); //


    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.trackInput = input }} />
          <button onClick={this.addTrack.bind(this)}>Добавить контакт</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.searchInput = input }} />
          <button onClick={this.findTrack.bind(this)}>Найти контакт</button>
        </div>
        <ul>
          {
            this.props.tracks.tracks.map((track, index) =>
            <li key={index}>{track.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}
export default connect(
  state => ({
    tracks: state//.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      if(name !== '') {
        var id = Date.now().toString();
        usersRef.child(id).set(name);

      }
    },
    onFindTrack: (name) => {
      console.log('name', name);
      dispatch({ type: 'FIND_TRACK', payload: name});
    },
    onFetchTrack: () => {
      usersRef.on("value", snapshot => {
        dispatch({
          type: 'FETCH_TRACK',
          payload: snapshot.val()
        });
        //console.log(snapshot.val());
        //console.log(state.getState());

      });
    }

  })
)(App);
