import { createContext } from "react";
import FirstCom from "./UseContext/FirstCom";

// here use component tree when pass data at spacific hierculer compenent than use context()
// use pass only those data to spacific componenet 
// here make context and should be as instance of Provider and any component heirecluy structure in inner/child tags 
// below the exmple see 
const SecretKey = createContext();
const Payload = createContext();

const App = () => {
  return (
    <>
      {/* <h1>this is the app component</h1> */}

      <hr />
      {/* this is the  make context */}
      <SecretKey.Provider value={"jayendraparmar%%$#anditsencreptedforus"}>
        <Payload.Provider
          value={"jauydjd##@#%DTDH^FFfsdfjfddjfdkfe5e9idkjfdjj"}
        >
          <FirstCom />
        </Payload.Provider>
      </SecretKey.Provider>
    </>
  );
};

export default App;

// must export all context as object 
export { SecretKey, Payload };
