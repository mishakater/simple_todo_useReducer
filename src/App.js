import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import WithReduser from "./WithReduser";
import NoReducer from "./NoReducer";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/withreducer' element={<WithReduser />} />
        <Route path='/noreducer' element={<NoReducer />} />
        <Route path='*' element={<NoReducer />} />
      </Routes>
    </div>
  );
}

export default App;
