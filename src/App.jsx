import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
            </>
          }
        ></Route>
        <Route path="channels" element={<Home />}>
          <Route path=":id" element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
