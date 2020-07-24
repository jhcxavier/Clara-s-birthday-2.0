import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import App from "./App";
// import Challenges from "./views/challenges";
import Primeiro from "./views/primeiro";
import Primeiro2 from "./views/primeiro2";
import Segundo from "./views/segundo";
import Segundo2 from "./views/segundo2";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = "/" || "";

  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter basename={basename}>
        {/* <ScrollToTop> */}
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          {/* <Route exact path="/challenges">
            <Challenges />
          </Route> */}
          <Route exact path="/primeiro">
            <Primeiro />
          </Route>
          <Route exact path="/primeiro2">
            <Primeiro2 />
          </Route>
          <Route exact path="/segundo">
            <Segundo />
          </Route>
          <Route exact path="/segundo2">
            <Segundo2 />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
        <Footer />
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
