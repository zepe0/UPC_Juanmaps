import { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";

import "./Cardimg.css";

function Cardimg() {
  const [Img, setImg] = useState([]);
  console.log(Img);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((imgs) => {
        setImg(imgs);
      });
  }, []);

  return (
    <>
      {Img.map((ele) => (
        <Card className="Cardimg" key={ele.id}>
          {ele ? (
            <img src={ele.download_url} alt="img" className="imgCard" />
          ) : (
            ""
          )}
          {ele.author ? <p>{ele.author} </p> : ""}
        </Card>
      ))}
    </>
  );
}

export default Cardimg;
