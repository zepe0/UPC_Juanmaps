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
      {Img.map((ele, index) => (
        <Card className="Cardimg" key={index}>
          {ele ? (
            <Image
              src={ele.download_url}
              alt='img'
              className='imgCard'
             
            >
            </Image>
          ) : (
            ""
          )}
          {ele.author ? <p>{ele.author} </p> : ""}

     fo 
        </Card>
      ))}
    </section>
  );
}

export default Cardimg;
