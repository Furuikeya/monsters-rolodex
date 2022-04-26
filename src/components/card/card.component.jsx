import "./card.styles.css";

export const Card = ({ monster }) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h2> {monster.name} </h2>
    <h4> from {monster.address.city} </h4>
    <p>{monster.email}</p>
  </div>
);
