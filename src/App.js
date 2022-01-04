import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Header from './containers/Headers';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';
import ProductList from './containers/ProductList';

function App() {
  return (
    <div className="App">
      
      <Router basename='process.env.PUBLIC_URL'>
      <Header/>
        <Switch>
          <Route path='/react-image-navigate' exact component={ProductList} />
          <Route path='/react-image-navigate/product/:productid' exact component={ProductDetails} />
          <Route> 404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
