import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Posts from "../components/Posts";
import Header from "../header";
import PrivateRoutes from './PrivateRoutes'
import PrivateHome from "../components/privateRoutes/PrivateHome";
import Imp from "../components/privateRoutes/Imp";
class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
        <PrivateRoutes path="/PrivateHome" component={PrivateHome} />
        <PrivateRoutes path="/Imp" component={Imp} />
        <Route path="/posts" component={Posts} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
