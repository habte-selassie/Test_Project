// import React, { Component } from "react";
// import { Route ,Redirect,Switch } from "react-router-dom"
// import Movies from "./components/movies";
// import Customers from "./components/customers";
// import MovieForm from "./components/movieForm"
// import Rentals from "./components/rentals";
// import NotFound from "./components/notFound";
// import NavBar from "./components/navbar";
// import LoginForm from './components/loginForm'; 
// import RegisterForm from './components/registerForm';

// class App extends Component {
//   render() {
//     return (
     
//      <React.Fragment>                    
//      <NavBar />
//      <main className="container"> 
//         <Switch>
        
//         <Route path="/register" component={RegisterForm}></Route>
//         <Route path="/login" component={LoginForm}></Route>
//         <Route path="/movies/:id" component={MovieForm}></Route>
//         <Route path="/movies"  component={Movies}></Route>
//         <Route path="/customers"  component={Customers}></Route>
//         <Route path="/rentals"    component={Rentals}></Route>
//         <Route path="/not-found"  component={NotFound}></Route>
//         <Redirect from="/" exact  to="/movies"></Redirect>
//         <Redirect to="/not-found"></Redirect>
//         </Switch>
//       </main>
//      </React.Fragment>
    
//     );
//   }
// }

// export default App;

// function ChooseYourAdventure() {
//   let loginSuccess = true
//   return (
// <BrowserRouter>
// <div>
// <ul>

// <li><NavLink exact to="/" activeStyle={{color:'green'}} >Home</NavLink></li>
// {loginSuccess?<Redirect to='/members' /> : <Redirect to='/forgotPassword' />}
// <li><NavLink strict to="/aboutUs" activeStyle={{color:'green'}} >About Us</NavLink>
// <ul>
// <li>
// <NavLink exact to="/aboutUs/team" activeStyle={{color:'green'}}>
// Meet the Team
// </NavLink>
// </li>
// <li>
// <NavLink exact to="/aboutUs/history" activeStyle={{color:'green'}}>
// Company History
// </NavLink>
// </li>
// </ul>
// </li>
// <li><NavLink exact to="/contactUs" activeStyle={{color:'green'}}>Contact Us</NavLink></li>
// </ul>
// </div>
// </BrowserRouter>
//   );
//   }
//   export default ChooseYourAdventure;
// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
// import MoreTraveledPath from "./MoreTraveledPath";
// import LessTraveledPath from "./LessTraveledPath";
// import UserProfile from "./Beginner";
// import { NavLink } from "react-router-dom";
// import { Redirect } from "react-router-dom";


//const App = (props) => {
//   return ( 
//     <BrowserRouter>
//     <Switch>

//     <Route exact path='/'>
//         <LessTraveledPath />
//       </Route>
//       <Route strict path='/login/'>
//         <MoreTraveledPath />
//       </Route>

//       <Route path="/user/:id">
//        <UserProfile />
//       </Route> 
//     </Switch>
     
//     </BrowserRouter>
//    );
// }
 
// export default App;
// import React from "react";
// import { BrowserRouter} from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
// import UserProfile from "./Beginner";


// const App = () => {
//   // const OrderDetails = (props)=>{
//   //   return(
//   //     <h1>Details for order #{props.match.params.orderid}</h1>
//   //   )
//   // }
//   return ( 
   
// <BrowserRouter>
// <Switch>
// <Route path="/">
// <p>home</p>
// </Route>
// <Route path="/aboutUs">
// <p>about us</p>
// </Route>
// <Route path="/aboutUs/team">
// <p>meet the team</p>
// </Route>
// <Route>
// <UserProfile />
// </Route>
// </Switch>
// </BrowserRouter>
   
//    );
// }
 
// export default App;

// import React from "react";
// import { Link, Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// function App(props) {

// return (
// <div>
// <BrowserRouter>
// <Switch>
// <Link to="/orders/4">Order #4</Link>
// <Route path="/orders/:orderid" render={props=>(
//   <h1>Details for order #{props.match.params.orderid}</h1>
// )
// }/>
// </Switch>
// </BrowserRouter>
// </div>
// );
// }
// export default App;

// import { BrowserRouter } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import { Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
// import NoMatch from "./MoreTraveledPath";
// import UserList from "./LessTraveledPath";
// import Header from "./Beginner";
// import Homer from "./homer";



// function App(props){
//   return(
//     <BrowserRouter>
      
//       <Switch>

//        <Route exact path='/'>
//           <Homer/>
//         </Route>

//         <Route exact path='/users/list'>
//           <UserList />
//         </Route>

//         <Redirect from='/users' to='/users/list' />

//         <Route>
//           <NoMatch />
//         </Route>

//       </Switch>
//     </BrowserRouter>
//   )
// }
// export default App;




// import React from "react";
// import { useHistory } from "react-router-dom";

// function App(props){

//   const history = useHistory()

//   function handleClick(){
//    history.push('/home')
//   }

//   return(
//     <button type="button" onClick={handleClick}>
//       Go Homer
//     </button>
//   )
// }

// export default App
// import React from "react";
// import { withRouter } from "react-router-dom";
// const App = (props) => {

//   return ( 
//     <>
//       <h1>Current Location</h1>
//       <ul>
//         <li>pathname: {props.location.pathname}</li>
//         <li>hash: {props.location.hash}</li>
//         <li>search: {props.location.search}</li>
//         <li>key: {props.location.key}</li>
//       </ul>
//     </>
//    );
// }
 
// export default withRouter(App)
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const Reports = () => {
  let {path,url} = useRouteMatch()
  return ( 
    <div>
      <h2>Reports</h2>
      <ul>
        <li>
          <Link to={`${url}/profitloss`}>Profit and loss</Link>
        </li>
        <li>
          <Link to={`${url}/balancesheet`}>Balance sheet</Link>
        </li>
        <li>
          <Link to={`${url}/payroll`}>Payroll</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Select a report</h3>
        </Route>
        <Route path={`${path}/:reportId`}>
          <Report />
        </Route>
      </Switch>
    </div>
   );
}

function Report() {
  let { reportId } = useParams();
  return (
  <div>
  <h3>{reportId}</h3>
  </div>
  );
  }
 


  function Nav() {
    return(
    <div>
    <ul>
    <li>
    <Link to={`/reports`}>Reports</Link>
    </li>
    </ul>
    <hr />
    <Switch>
    <Route path={`/reports`}>
    <Reports />
    </Route>
    </Switch>
    </div>
  )
}

function App() {
  return (
  <BrowserRouter>
  <Nav />
  </BrowserRouter>
  );
  }
  export default App;

