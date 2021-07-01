import "../styles/globals.css";
import { Provider } from "react-redux";
// import withRedux from "next-redux-wrapper";
// import withReduxSaga from "next-redux-saga";
import { store } from "../reduxstore/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
