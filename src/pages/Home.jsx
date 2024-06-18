/* import "./Home.css"; */
import Cardimg from "../components/Cardimg";
import { Input } from "semantic-ui-react";
import { useState } from "react";
import InputFile from "../components/InputFile";
import Map from "../components/Map";

function home() {
  const [search, searchItems] = useState("");
  const uploadFile = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div className="home-page">
        <Input
          icon="search"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
        <InputFile></InputFile>

        {/* 
        <Cardimg></Cardimg> */}
      </div>
    </>
  );
}

export default home;
