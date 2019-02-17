import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import TopRow from './components/TopRow';
import SecondRow from './components/SecondRow';
import BottomList from './components/BottomList';
import {removeFromList, addToList} from './store.js'
class App extends Component {
  render() {
    return (
      <div className='home'>
        <TopRow
          list = {this.props.list}
          removeMovie = {this.props.removeOne} />
        <SecondRow
          recomms = {this.props.recomms}
          addMovie = {this.props.addOne} />
        <BottomList
          list = {this.props.list} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      list: state.myList,
      recomms: state.recommendations   
  }
};

const mapDispatchToProps = dispatch => {
    return({
        removeOne: (item) => {dispatch(removeFromList(item))},
        addOne: (item) => {dispatch(addToList(item))},
        
    })
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

