import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureAppStore } from "./store/configureStore";
import NavigationBar from "./components/NavigationBar";
import routes, { renderRoutes } from "./Routes";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

export const store = configureAppStore();

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter>
          <>
            <NavigationBar />
            <Container>{renderRoutes(routes)}</Container>
          </>
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  );
};
export default App;
