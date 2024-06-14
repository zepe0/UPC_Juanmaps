/* import "./Home.css"; */
import Cardimg from "../components/Cardimg";
import { Input } from "semantic-ui-react";
import { useState } from "react";

function home() {
  const [search, searchItems] = useState("");
  return (
    <>
      <div className="home-page">
        <Input
          icon="search"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
        <div className="listCards">
          <Cardimg></Cardimg>
        </div>
      </div>
    </>
  );
}

export default home;
