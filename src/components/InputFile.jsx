import { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";
import Exifr from "exifr";
import Map from "./Map";

const InputFile = () => {
  const [position, setPosition] = useState([[41.223135, 1.536092]]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {}, [position]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      /*  (file).then((res =>{
            console.log(res)
        })) */
      Exifr.parse(file)

        .then((output) => {
            console.log(output)
          if (output.latitude) {
            const newPosition = [
              ...position,
              [output.latitude.toFixed(6), output.longitude.toFixed(6)],
            ];
            setPosition(newPosition);
          } else {
            setErrorMessage("No GPS data found in the image");
          }
        })
        .catch((error) => {
          setErrorMessage("Error parsing image: " + error.message);
        });
    }
  };

  return (
    <div>
      <Input onChange={handleFileChange} type="file" placeholder="Add file" />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <Map data={position}></Map>
    </div>
  );
};

export default InputFile;
