import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts";
import routes from "./routes";
import { Home, Signin, Register, Search, ListProperty } from "./pages";
import { NotFound } from "./components";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.signIn} element={<Signin />} />
        <Route path={routes.listProperty} element={<ListProperty />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
