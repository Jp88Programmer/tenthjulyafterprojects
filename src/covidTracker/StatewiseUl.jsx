import axios from "axios";
import { useEffect, useState } from "react";

const StatewiseUI = () => {
  const [data, setData] = useState([]);

  const getCovidData = async function() {
    // const res = await fetch("https://data.covid19india.org/data.json");

    const res = await axios.get("https://data.covid19india.org/data.json");

    // const dataArr = await res.json();

    console.log(res.data.statewise);
    // console.log(dataArr.statewise);
    // return dataArr.statewise;

    setData(res.data.statewise);
  };

  useEffect(() => {
    // data = getCovidData();

    // setData(getCovidData());

    getCovidData();
    console.log(data);
  });

  return (
    <>
      <div className="container fluid mt-5">
        <div className="main-heading ">
          <h1 className="text-center">Covid Statewise Information</h1>
        </div>

        <div className="table table-responsive my-5">
          <table className="table table-hover py-3">
            <thead className="table-dark ">
              <th>state</th>
              <th>confirmed</th>
              <th>recoverd</th>
              <th>deaths</th>
              <th>active</th>
              <th>last Updated Time</th>
            </thead>

            <tbody className="">
              {data.map((Element, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{Element.state}</td>
                      <td>{Element.confirmed}</td>
                      <td>{Element.recovered}</td>
                      <td>{Element.deaths}</td>
                      <td>{Element.active}</td>
                      <td>{Element.lastupdatedtime}</td>
                    </tr>
                  </>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StatewiseUI;
