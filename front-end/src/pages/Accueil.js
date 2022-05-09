import React from "react";
import Footer from "../components/Footer";
import LogoMiel from "../components/LogoMiel";
import NavBar from "../components/NavBar";

const Accueil = () => {
  return (
    <div>
      <NavBar />
      <LogoMiel />
      <Footer />
      <div className="test">
        <h1>Hello les chômeur</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum
          corporis corrupti. Autem eveniet ex aliquid odio, voluptatibus
          voluptate, molestiae error distinctio asperiores laborum ad corporis
          sint mollitia rem praesentium.
          <h1>Hello les chômeur</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dolorum corporis corrupti. Autem eveniet ex aliquid odio,
            voluptatibus voluptate, molestiae error distinctio asperiores
            laborum ad corporis sint mollitia rem praesentium.
          </p>
          <h1>Hello les chômeur</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dolorum corporis corrupti. Atem eveniet ex aliquid odio,
            voluptatibus voluptate, molestiae error distinctio asperiores
            laborum ad corporis sint mollitia rem praesentium.
          </p>
          <h1>Hello les chômeur</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dolorum corporis corrupti. Autem eveniet ex aliquid odio,
            voluptatibus voluptate, molestiae error distinctio asperiores
            laborum ad corporis sint mollitia rem praesentium.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Accueil;
