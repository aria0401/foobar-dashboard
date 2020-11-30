import React from "react";
import Queue from "./Queue";
import Clock from "./Clock";
import Serving from "./Serving";
import ReadyList from "./ReadyList";
import Crew from "./Crew";
import Taps from "./Taps";

<<<<<<< HEAD
function Main() {
  const [data, setData] = useState({});
  const [beers, setBeers] = useState({});
  console.log(data);
  console.log(beers);
  useEffect(() => {
    getData(setData);
    getBeers(setBeers);

    setInterval(() => {
      getData(setData);
    }, 10000);
    getData(setData);
  }, []);
=======
function Main(props) {
  
  const data = props.data;
>>>>>>> 0af2e047e6aaa366a6bac80a8a8ba66688fcfd80

  return (
    <div className="Main">
<<<<<<< HEAD
      {data.bar && <Clock data={data} />}
      {data.serving && <Serving data={data} />}
      {data.serving && <ReadyList data={data} />}
      {data.bartenders && <Crew data={data} />}
      <Taps />
      {data.queue && <Queue data={data} />}
=======
     
      <Clock data={data} />
      <Serving data={data} />
      <ReadyList />
      <Crew data={data}/>
      <Taps data={data}/>
      <Queue data={data} />
     
>>>>>>> 0af2e047e6aaa366a6bac80a8a8ba66688fcfd80
    </div>
  );
}

export default Main;
