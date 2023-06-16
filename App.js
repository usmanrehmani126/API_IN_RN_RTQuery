import React from "react";
import Demo from "./API_CALL_WITH_REDUX_TOOLKIT_RTQUERY_ASYNC_THUNK/Demo";
import { Provider } from "react-redux";
import { store } from "./API_CALL_WITH_REDUX_TOOLKIT_RTQUERY_ASYNC_THUNK/Redux/store";

const App = () => {
  return (
    <Provider store={store}>
       <Demo />
    </Provider>
  );
};

export default App;
