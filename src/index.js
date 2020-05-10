import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Welcome from './welcome/welcomeReact';
import Details_funcs from "./details/detailsReact";
import DailyExhibition_funcs from "./dailyExhibition/dailyExhibitionReact";
import PrivateGallery_funcs from "./privateGallery/privateGalleryReact";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import AboutUs_funcs from "./aboutUs/aboutUsReact";



const myPage = ["welcome", "dailyExhibition", "details", "privateGallery", "signIn", "signUp", "aboutUs"];

function show(section) {
    myPage.map(x=>document.body.querySelector("#" + x).classList.add("hide"));
    document.body.querySelector("#" + section).classList.remove("hide");
    window.location.hash = section;
}
const toExhibition = [() => show("dailyExhibition"), "NEVERLAND"];
const toPrivateGallery = ()=>show("privateGallery");
const toDetails = () => show("details");
const toWelcome = ()=>show("welcome");
const toSignIn = ()=>show("signIn");
const toSignUp = ()=>show("signUp");
const toAboutUs = ()=>show("aboutUs");

ReactDOM.render(
    <Welcome toExhibition={toExhibition}/>,
    document.body.querySelector("#welcome"));
ReactDOM.render(
    <DailyExhibition_funcs.DailyExhibition toDetails={toDetails} toExhibition={toExhibition}/>,
    document.body.querySelector("#dailyExhibition"));
ReactDOM.render(
    <Details_funcs.Details toExhibition={toExhibition} toPrivateGallery={toPrivateGallery} toSignIn = {toSignIn} toAboutUs={toAboutUs}/>,
    document.body.querySelector("#details"));
ReactDOM.render(  
    <PrivateGallery_funcs.PrivateGallery toExhibition={toExhibition} toDetails={toDetails}/>,
    document.body.querySelector("#privateGallery"));
ReactDOM.render(
    <SignIn toWelcome = {toWelcome} toPrivateGallery={toPrivateGallery} toSignUp={toSignUp}/>,
    document.body.querySelector("#signIn"));

ReactDOM.render(
  <SignUp toSignIn = {toSignIn} toPrivateGallery={toPrivateGallery}/>,
    document.body.querySelector("#signUp"));

ReactDOM.render(
    <AboutUs_funcs.AboutUs toDetails={toDetails} />,
    document.body.querySelector("#aboutUs"));    
 
if (!window.location.hash) { window.location.hash = "welcome" };
show(window.location.hash.split('#', window.location.hash.length)[1]);

window.addEventListener("hashchange", event => show(event.newURL.split("#", event.newURL.length)[1]));
