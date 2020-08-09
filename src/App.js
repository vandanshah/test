import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import {NetworkInformation} from 'react-network-info'

function Load() {
  return (
    <div className="App col-12">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1 style={{color:"red"}}> <i>Loading ...</i></h1>
        </p>
      </header>
    </div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      product:''
    };
  }
  async componentDidMount(){
    var ip = await fetch('https://api.ipify.org')
    var str = await ip.text();
    var url = 'http://test-env.eba-ccmtr72z.us-west-1.elasticbeanstalk.com/getProduct?ua=&ip=';
    //var url = 'http://localhost:5000/getProduct?ua='+navigator.userAgent+'&ip='+str;
    const response = await fetch(url);
    const body = await response.json();
    this.setState({
      product:body,
      isLoading: false
    });
  }

  render(){
    const isLoading = this.state.isLoading;
    if(isLoading){
      return <Load />;
    }
    return(
      <div className="container">
        <div className="row">
            <Product ps = {this.state.product} />
        </div>
      </div>
    )
  }
}

export default App;
