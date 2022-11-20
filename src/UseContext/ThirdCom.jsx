import { useContext } from "react";
import { Payload, SecretKey } from "../App";

// two type context represets one is context.Consumer and second is only use useContext and pass component(as context)
const ThirdCom = () => {

    
    const context = useContext(Payload);
    const sectetkey = useContext(SecretKey);

  return (
    <>
      {/* <SecretKey.Consumer>
        {(data) => {
          return (
            <>
              <Payload.Consumer>
                {(dataOfPayload) => {
                  return (
                    <h1>
                      this is our secrect code : {data} and payload :{" "}
                      {dataOfPayload}
                    </h1>
                  );
                }}
              </Payload.Consumer>
            </>
          );
        }}
      </SecretKey.Consumer> */}.

      <h1>Payload : {context} and SecretKey : {sectetkey}</h1>


    </>
  );
};

export default ThirdCom;
