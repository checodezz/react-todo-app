import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container ">
        <div className="container my-4 text-center">
          <img src="https://cdn.pixabay.com/photo/2019/09/17/09/45/to-do-4483048_1280.jpg" className="img-fluid" width="700" height="400" alt="to do list image"/>
          <h2 className="my-3">Todos</h2>
          <p>Welcome to the Todo application!</p>
<Link to='/todo' className="btn btn-primary">View Todos</Link>
        </div>
      
      </main>
      <Footer />
    </>
  );
}
