import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import LogIn from './LogIn'; 
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Header from './Header';
import StarMenu from './Views/menuUser';
import Create from './Views/Create-views';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />     
    
    <StarMenu />
    <Create />
      
    <Footer />
  </React.StrictMode>
); 





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
