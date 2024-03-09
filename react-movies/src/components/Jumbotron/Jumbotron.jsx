import React from "react";

const Jumbotron = ({isLightMode}) => {
  return (
    <section className={`jumbotron ${isLightMode ? 'light-mode' : 'dark-mode'}`} style={{backgroundImage: "url('https://images.alphacoders.com/135/1354224.jpeg')"}}>
      <div className="jumbotron__wrapper">
        <header className="jumbotron__header">
          <h1 className="header__heading">Movie Name</h1>
          <p className="header__description">Movie description</p>
        </header>
      </div>
    </section>
  )
}

export default Jumbotron;