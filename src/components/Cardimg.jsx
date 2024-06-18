import { useEffect, useState } from "react";
import { Card, Image, Rating } from "semantic-ui-react";

import "./Cardimg.css";

function Cardimg() {
  const [Img, setImg] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((imgs) => {
        setImg(imgs);
      });
  }, []);

  return (
    <section className="listCards">
      {Img.map((ele) => (
        <Card className="Cardimg" key={ele.id}>
          {ele ? (
            <Image
              src={ele.download_url}
              alt="img"
              className="imgCard"
              as="div"
            />
          ) : (
            ""
          )}
          {ele.author ? <p>{ele.author} </p> : ""}

          <Rating defaultRating={3} maxRating={4} size="mini" clearable />
        </Card>
      ))}
    </section>
  );
}

export default Cardimg;
