import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchApi() {
      const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;

      const today = new Date().toDateString;
      const localKey = `NASA_${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
        );
        if (!res.ok) {
          throw new Error("FETCH FAILED");
        }

        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("DATA", apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, []);

  function handleShowModal() {
    setShowModal((cur) => !cur);
  }

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar handleShowModal={handleShowModal} data={data} />}
      {data && <Footer handleShowModal={handleShowModal} data={data} />}
    </>
  );
}

export default App;
