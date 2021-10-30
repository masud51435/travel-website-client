import './App.css';
import Header from './pages/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/Home';
import Destinations from './pages/destinations/Destinations';
import TourPlan from './pages/tour/TourPlan';
import Footer from './pages/footer/Footer';
import Blog from './pages/blog/Blog';
import NotFound from './pages/notfound/NotFound';
import Booking from './pages/booking/Booking';
import Login from './pages/login/login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import Cart from './pages/cart/Cart';
import AllOrders from './pages/cart/order/AllOrders';
import AddLocation from './pages/addLocation/AddLocation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/destinations'>
            <Destinations></Destinations>
          </Route>
          <PrivateRoute path='/booking/:bookId'>
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path='/myorder'>
            <Cart></Cart>
          </PrivateRoute>
          <PrivateRoute path='/allorders'>
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path='/addlocation'>
            <AddLocation></AddLocation>
          </PrivateRoute>
          <Route path='/tourplan'>
            <TourPlan></TourPlan>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path="/login">
              <Login></Login>
            </Route>
          <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
