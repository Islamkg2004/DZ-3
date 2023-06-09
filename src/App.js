import React from "react";
import './App.css';
import Show from "./Components/Show";
import Form from "./Components/Form";
import {Provider} from "react-redux";
import store from "./Store/Store";
function App() {
  return (

        <Provider store={store}>
            <div>
                <Form />
                <Show/>
            </div>
        </Provider>

  );
}

export default App;
