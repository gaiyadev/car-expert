import { Provider } from "react-redux";
import "../styles/globals.css";
import Default from "../layouts/default/default";
import Dashboard from "../layouts/dashboard/dashboard";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme/theme";
import store from "../redux/store/store";

const layouts = {
  defaultLayout: Default,
  DashboardLayout: Dashboard,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

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
