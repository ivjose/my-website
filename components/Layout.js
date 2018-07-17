import Head from 'next/head' 

import NavBar from './NavBar'

const Layout = (props) => {
  return (
    <div>
    <Head>
    
      <title>
      Hello World
      </title>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>

      <NavBar/>
      <div className="container">
      
        {props.children}
      </div>
    </div>
  );
};

export default Layout;