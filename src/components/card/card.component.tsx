import { Monster } from "../../App";
import "./card.styles.css";

type CardProps = {
  monster: Monster;
}



export const Card = ({ monster }: CardProps) => {
  const {id, name, address, email} = monster;
  return (
  <div className="card-container">
    <img
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h2> {name} </h2>
    <h4>{address.city}</h4>
    <p>{email}</p>
  </div>
)};
