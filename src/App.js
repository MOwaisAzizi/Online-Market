import React from 'react'
import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Checkout from './containers/checkout/Checkout'
import Acount from './containers/Acount/Acount'

class App extends React.Component {
  render() {
    return (
      <div>
     <Router>
       <Layout>
        <Routes>
       <Route path='/' exact Component={Shopping}/>
       <Route path='/Acount' exact Component={Acount}/>
       <Route path='/checkout' Component={Checkout}/>
        </Routes>
        </Layout>
     </Router>
      </div>
    )
  }
}

export default App
