import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Vishal Rachapudi</div>
            <div className="brief_description">
                <b>Hello, I am a junior studying computer science and math at The University of Texas at Austin.</b>
                <br/><br></br>Hobbies: I love rock-climbing, weightlifting and philosophy<br/>
                <br></br>Fun Fact: I've been hit by a bus. I'm known as the boy who lived (Harry Potter fans)
            </div>
          </div>
        </div>
      </div>
    );
  }
}
