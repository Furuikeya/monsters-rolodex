import { useEffect, useState, ChangeEvent } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

const App = () => {
  const [searchField, setSearchfield] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchfield(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonsters(filteredMonsters);
  },[monsters,searchField]);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monsters..." handleChange={handleChange} ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  )
}

export default App;
