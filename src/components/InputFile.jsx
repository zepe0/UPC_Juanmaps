import { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";
import Exifr from "exifr";
import Map from "./Map";

const InputFile = () => {
  const [position, setPosition] = useState([[41.223135, 1.536092]]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {}, [position]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const output = await Exifr.parse(file);
        console.log(output);
        if (output.latitude && output.longitude) {
          const newPosition = [
            ...position,
            [
              parseFloat(output.latitude.toFixed(6)),
              parseFloat(output.longitude.toFixed(6)),
            ],
          ];
          setPosition(newPosition);
          setErrorMessage("");
        } else {
        setErrorMessage("GPS No encontrado"); // No Contiene Cordenadas !!
          
        }
      } catch (error) {
        setErrorMessage("GPS No encontrado"); // Contiene Cordenadas pero Faltan Datos
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
        fetch("http://localhost/UPC_Juanmaps/src/api/uploadimg.php", {
          method: "POST",
          body: formData,
        }).then((res) =>res.json()).then((img) => console.log(img));
      } catch (error) {
        setErrorMessage("Error uploading image: " + error.message);
      }
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
