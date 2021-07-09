import "../styles/globals.css";
import Default from "../layouts/default/default";
import Dashboard from "../layouts/dashboard/dashboard";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme/theme";
const layouts = {
  defaultLayout: Default,
  DashboardLayout: Dashboard,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
