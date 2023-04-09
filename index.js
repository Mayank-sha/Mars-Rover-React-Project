import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import axios from 'axios';
import $ from 'jquery'
import popper from 'popper.js'
import FakestoreComponent from './Fakestore/Fakestore.component';
import StyleBinding from './classBinding/StyleBinding';
import { ClassDemoComponent } from './classBinding/ClassBinding';
import { ClassBindingComponent} from './classBinding/FormBinding';
import  MouseDemo  from './Events/Mouse.demo';
import {KeyDemo} from './KeyboardeEvents/KeyDemo';
import { ButtonDemo } from './Clipboard&TimerEvents/ButtonDemo';
import UserNameAndPasswordValidation from './customized-components/passwordStrength'
import { HomeComponent } from './customized-components/Home-component/home-component';
import { FormSubmit } from './useState-Project/project';
import NasaComponent from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NasaComponent/>
    {/* <FakestoreComponent /> */}
    {/* <App /> */}
    {/* <StyleBinding/> */}
    {/* <ClassDemoComponent/> */}
    {/* <ClassBindingComponent/> */}
    {/* < MouseDemo/> */}
    {/* <KeyDemo/> */}
    {/* <ButtonDemo/> */}
    {/* <UserNameAndPasswordValidation/> */}
    {/* <HomeComponent/> */}
    {/* <FormSubmit/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
