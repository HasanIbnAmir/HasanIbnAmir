import React, {useContext,useEffect,useState} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting, openSource} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            console.error(result);
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            setProfileFunction("Error");
            console.log(
              "Because of this error, contact section has reverted to default"
            );
            console.error(error);
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <p
                className="greeting-text-p FootersubTitle"
              >
                {greeting.FootersubTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
                <div className="main">
                <div className="row">
                  <div className="image-content-profile">
                    <img
                      src={prof.avatarUrl}
                      alt={prof.name}
                      className="profile-image"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
