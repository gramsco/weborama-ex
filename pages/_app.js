import "antd/dist/antd.css";
import { Layout } from "antd";
import HeaderComponent from "components/layout/header";
import ContextProvider from "components/query/context";

const { Header, Content } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Header>
          <HeaderComponent />
        </Header>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
