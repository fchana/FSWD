import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function Author(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPost] = useState([]);
  const [title, setTitle] = useState("test");
  useEffect(
    async () => {
      setLoading(true);
      fetch(props.author)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    },
    [],
  );
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  if (error) {
    return (
      <div>Error: {error.message}</div>
    );
  }
  if (!data) {
    return (
      <div>Loading...</div>
    );
  }

  return (
        <Link to={`/author/${data.id}`}> 
            {data.name} 
        </Link>

  );
}

export default Author