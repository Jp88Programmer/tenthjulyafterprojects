import { useEffect, useState } from "react";

const UseEffect = () => {
  const [click, setClick] = useState(0);
  const [click1, setClick1] = useState(0);
  const [nameOfDev, setNameOfDev] = useState("");

  const clickBtn = () => {
    setClick(click + 1);
  };

  const clickBtn1 = () => {
    setClick1(click1 + 1);
  };

  const clickNameOfDev = () => {
    // setClick1(click1 + 1);

  };

// when component redender than useEffect automatically called thats main benfits 
  useEffect(() => {
   
        // alert(`you clicked button ${click}`);
        // return <h1>rendered the components</h1>
        document.title =` you clicked the button ${nameOfDev}`
       
  },[click]);

  const changeDev = (e)=>{

    setNameOfDev(e.target.value);
  }

  
  return (
    <>

        <input type="text" value={nameOfDev} name="dev" onChange={changeDev} />
      <button onClick={clickBtn}>Clicked {click} times</button>
      <br />
      <button onClick={clickBtn1}>Clicked {click1} times</button>
    </>
  );
};

export default UseEffect;


