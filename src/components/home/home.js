import React, { Component } from "react";
import Sphere from "../sphere";
import { Link } from "react-router-dom";
import "./home.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { translate } from "react-i18next";

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIG3VUoQL_slbaScMAASkp1QQcLWq8lio",
  authDomain: "test-87a0f.firebaseapp.com",
  databaseURL: "https://test-87a0f.firebaseio.com",
  projectId: "test-87a0f",
  storageBucket: "test-87a0f.appspot.com",
  messagingSenderId: "632772079555",
  appId: "1:632772079555:web:0549c33d4b1b2aa38f1776",
  measurementId: "G-84KSCC6R1E"
});
const db = firebaseApp.firestore();
export { db };

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cubeVisibility: false
    };
  }
  notify = () => toast("Scroll to zoom and drag to move!");

  //cosi controllo la durata del caricamento

  componentDidMount() {
    setTimeout(() => {
      this.setState({ cubeVisibility: true });
      this.notify();
    }, 1500);
    db.collection("corporates")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log("=========");
        console.log(data);
        console.log("=========");
      });
  }
  render() {
    //==handling css classes==
    // let className_1 = "boxPortfolio";
    // if (this.state.slide) {
    //   className_1 += " ";
    // }
    const { t } = this.props;

    return (
      <div className="boxHome">
        <div>
          <h1 className="home1 text-flicker-in-glow">Hey</h1>
          <h1 className="home2 tracking-in-expand">{t("main_title")}</h1>
          <h1 className="home3 swing-in-top-fwd">{t("secondary_title")}</h1>
          <Link to={"/contact-me"} className="mylink">
            <div className="myBtnContact swing-in-top-fwd">{t("contacts")}</div>
          </Link>
        </div>

        <div className={`fade-in ${this.state.cubeVisibility && "visible"}`}>
          <Sphere></Sphere>
          <div>
            <ToastContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default translate()(Home);
