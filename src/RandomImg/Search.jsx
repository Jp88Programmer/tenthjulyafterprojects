import { useEffect, useState } from "react";
import NavBar from "../NavBar/Navbar";
import ImgComponent from "./ImgComponent";

const Search = () => {
  const [randomName, setRandomName] = useState("");
  const [imgArr, setArr] = useState([]);

  const fetchImg = async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await res.json();
    setArr(data);
  };

  useEffect(() => {
    fetchImg();
  });

  // const apiKey =
  //   "c012576e8aeb60ab46360e10e4055afcea7f5a75e0ecc59ecac5af30b083cbae";
  const randomed = (event) => {
    const data = event.target.value;

    setRandomName(data);
  };
  return (
    <>
      <NavBar />
      <input
        type="text"
        placeholder="Enter Anything"
        value={randomName}
        onChange={randomed}
      />
      <div>
        {imgArr.map((Element, index) => {
          return <ImgComponent key={index} link={Element.download_url} />;
        })}
      </div>
    </>
  );
};
export default Search;
