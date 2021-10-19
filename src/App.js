import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Pages/Share/Login/Login';
import SignUp from './Pages/Share/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import ServicesDitails from './Pages/ServicesDitails/ServicesDitails';
import DataProvider from './Contexts/DataProvider';
import PrivateRoute from './Pages/PrivateRoute/Privateroute';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <DataProvider>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/Servicesditails/:Serviceid">
            <ServicesDitails />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      </DataProvider>
    </div>
  );
}

export default App;
