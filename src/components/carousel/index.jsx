import React, { useEffect } from "react";
import { AreaComponentImage } from "./styled";
import Kratos from "../../Assets/kratos.png";
import Bluedemon from "../../Assets/bluedemon.png";
import Apocalypse from "../../Assets/apocalypse.png";
function ComponentImage() {
  useEffect(() => {
    moveImageTime();
  }, []);

  function moveImageTime() {
    setInterval(() => {
      if (
        document.getElementById("component_image").style.left === "100%" ||
        document.getElementById("component_image").style.left === ""
      ) {
        document.getElementById("component_image").style.left = "0%";
      } else if (
        document.getElementById("component_image").style.left === "0%"
      ) {
        document.getElementById("component_image").style.left = "-100%";
      } else {
        document.getElementById("component_image").style.left = "100%";
      }
    }, 5000);
  }

  return (
    <AreaComponentImage>
      <div className="component_image" id="component_image">
        <img id="first_image" src={Kratos} alt="Kratos" />
        <img src={Bluedemon} alt="Bluedemon" />
        <img src={Apocalypse} alt="Apocalypse" />
      </div>
    </AreaComponentImage>
  );
}

export default ComponentImage;
