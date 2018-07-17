import React, { Component } from 'react';
import Layout from '../components/Layout'

import Prices from '../components/Prices'
import Fetch from 'isomorphic-unfetch'
import  '../static/sass/bootstrap/bootstrap.scss'



class Index extends Component {
  static async getInitialProps({ req }) {
    try {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await res.json();
   
      return {bpi: data.bpi}
       
    } catch (error) {
      
    }
  }


  render() {
    const {
      bpi
    } = this.props

    return (
      <Layout>
   
      <h1>Home Page </h1>
      <p> asda asdasdasd</p>
      <Prices bpi={bpi}/>
    </Layout>
    );
  }
}

 

export default Index;