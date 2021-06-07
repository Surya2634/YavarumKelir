import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/home';
import Cards from './Components/card';
import Footer from './Components/footer'
import Result from './Components/resultpage';
import Head from './Components/header';
import AdminCard from './Components/admincard'
import AdminTable from './Components/adminTable';
import GowriHeader from './Components/GowriHeader';
import GowriTable from  './Components/GowriTable';
import GowriAddData from './Components/GowriAddData';
import GowriAddAdmin from './Components/GowriAddAdmin'
import Login from './Components/GowriLogin';
import AdminLogin from './Components/adminLogin';
import GowriAdminTable from './Components/GowriAdminTable';
import UnderWorking from './Components/UnderWorking';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home></Home>
            <Cards></Cards>
            <Footer></Footer>
          </Route>
          <Route path='/result'>
            <Home></Home>
            <Result></Result>
          </Route>
          <Route exact path='/ykadmin@oct2020'>
            <Head></Head>
            <AdminCard></AdminCard>
          </Route>
          <Route exact path='/ykadmin@oct2020/admintable'>
            <Head></Head>
            <AdminTable></AdminTable>
          </Route>
          <Route exact path='/ykadmin@2609' >
            <Home></Home>
            <Login></Login>
          </Route>
          <Route exact path='/ykadmin@2609/GowriCard'>
            <GowriHeader></GowriHeader>
            <GowriAddData></GowriAddData>
          </Route>
          <Route exact path='/ykadmin@2609/GowriTable'>
            <GowriHeader></GowriHeader>
            <GowriTable></GowriTable>
          </Route>
          <Route exact path='/ykadmin@2609/Gowriaddadmin'>
            <GowriHeader></GowriHeader>
            <GowriAddAdmin></GowriAddAdmin>
            <GowriAdminTable></GowriAdminTable>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
