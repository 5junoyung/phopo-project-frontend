import { React, useState, useEffect } from "react";
import axios from "axios";
import Feed from "./components/Feed";
import { useLocation } from "react-router-dom";

export default function Main() {
  const [commentData, setCommentData] = useState([]);
  const [feedData, setFeedData] = useState([]);

  const location = useLocation();
  console.log(location.state["postAll"]);
  console.log(location.state["userAll"]);
  console.log(location.state["location"]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get("http://localhost:3000/data/userData.json")
  //       .then((response) => setUserData(response.data))
  //       .catch((error) => console.error(error));
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => setCommentData(response.data))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/data/feedData.json")
        .then((response) => setFeedData(response.data))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="body">
        <Feed
          feedData={feedData}
          commentData={commentData}
          setCommentData={setCommentData}
        />
      </div>
    </div>
  );
}
