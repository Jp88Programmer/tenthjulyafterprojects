import SecondCom from "./SecondCom";
import { Payload } from "../App";
import { useContext } from "react";

const FirstCom = () => {

    const payload = useContext(Payload);
  return (
    <>
      {/* <h1>this is the first component</h1> */}

      <SecondCom />

      {/* <Payload.Consumer>{(data)=>{
        return <h1>this is the payload of the First component :{data} </h1>
      }}</Payload.Consumer> */}

      {/* <h1>this is the payload of the first component : {payload}</h1> */}
    </>
  );
};

export default FirstCom;
