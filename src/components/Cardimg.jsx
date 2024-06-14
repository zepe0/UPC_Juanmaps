import { useEffect, useState } from "react";


/* import "./Home.css"; */
function Cardimg() {
  const [Img, setImg] = useState();
  console.log(Img);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((imgs) => {
        setImg(imgs[2].download_url);
      });
  }, [Img]);

  return (
    <>
      <div className="Cardimg">
        {Img ? <img src={Img} alt="img" /> : ""}
      </div>
    </>
  );
}

export default Cardimg;
