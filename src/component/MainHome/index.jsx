import "../../utils/style/mainlogin.css";

import Card from "../mhCard/Card";

const Mainhome = () => {
  const CARDLIST = ["chat", "money", "security"];
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>;
        {CARDLIST.map((elmt) => {
          return <Card key={elmt} type={elmt} />;
        })}
      </section>
    </main>
  );
};

export default Mainhome;
