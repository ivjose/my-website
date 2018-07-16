import Layout from '../components/Layout'

import Prices from '../components/Prices'
import Fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
   
    <h1>Home Page </h1>
    <p> asda asdasdasd</p>
    <Prices bpi={props.bpi}/>
  </Layout>
)


Index.getInitialProps = async () => {
  try {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
 
    return {bpi: data.bpi}
     
  } catch (error) {
    
  }
}


 

export default Index