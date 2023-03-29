import { useEffect } from "react";
import { useState } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";


const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem,setCurrentItem]=useState(2)

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const newData = await response.json();

      setJobs(newData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
