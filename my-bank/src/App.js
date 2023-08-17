import { Component } from "react";
import AuthProvider from "./Provider/AuthProvider";
import Routes from "./Routes/index.js";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Routes>
      //     <Route exact path="/" element={<LandingPage />}></Route>
      //     <Route exact path="/login" element={<Home />}></Route>
      //     <Route exact path="/admin/:mode" element={<Admin />}></Route>
      //     <Route exact path="/dashboard" element={<Login />}></Route>
      //   </Routes>
      // </Router>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    );
  }
}

export default App;
