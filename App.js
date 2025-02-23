import './App.js'
import './App.css';
import '/components/app.css'
import AddProduct from './components/AddProduct';
import Home from './components/Home';

function App(){
  return (
    <>
    <h1>Product Management System</h1>
    <Home />
    <AddProduct />
    </>
  );
}
 export default App;

// This is a simple React component that renders a heading and a paragraph.