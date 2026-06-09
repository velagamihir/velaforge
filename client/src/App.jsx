import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//page imports
import Home from "./Pages/Home";
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
