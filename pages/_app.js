import '@/styles/globals.scss';
import Contentlayout from '../shared/layout-components/layout/content-layout';
import Landingpagelayout from '../shared/layout-components/layout/landingpage-layout';
import Authenticationlayout from '../shared/layout-components/layout/authentication-layout';
import ErrorPagesLayout from '@/shared/layout-components/layout/errorpages-layout';
import Customlayout from '@/shared/layout-components/layout/custompage-layout';
import { Provider } from 'react-redux';
import store from "../redux/store/store"

const layouts = {
  Contentlayout: Contentlayout,
  Customlayout: Customlayout,
  Landingpagelayout: Landingpagelayout,
  Authenticationlayout: Authenticationlayout,
  ErrorPagesLayout: ErrorPagesLayout,
};
export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((pageProps) => <Component>{pageProps}</Component>);
   console.log("Hello")
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
