import React from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import Default from "../layouts/default/default";
import Dashboard from "../layouts/dashboard/dashboard";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import store from "../redux/store/store";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";

const layouts = {
  defaultLayout: Default,
  DashboardLayout: Dashboard,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: dark)`);

  React.useEffect(() => {
    if (process.browser) {
      const local = localStorage.getItem("mode");
      console.log(local);
    }
  }, []);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
