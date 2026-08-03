import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {TodoItems} from "./components/TodoItems";
import {Footer} from "./components/Footer"; 
function App() {
  return (
    <>
      <Header/>
      <Todos/>
      <TodoItems/>
      <Footer/>
    </>
  );
}

export default App;
