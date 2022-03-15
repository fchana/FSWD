import { useEffect, useState } from "react";
import { Route, Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Author from "../components/Author";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPost] = useState([]);
  const [title, setTitle] = useState("test");
  const { id } = useParams();
  useEffect(
    async () => {
        setLoading(true);
        console.log(id);
        fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts`)
        .then((res) => res.json())
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                if (json[i].author === parseInt(id)) {
                    data.push(json[i]);
                }
            }
        })
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
    <div className="container">
      {/* <div>
        <h1 style={{ size: '50px' }}> My PostPage </h1>
      </div> */}

      {data.map((value, index) => {
        return <div className="container mb-1">
          <Card style={{ width: '18rem', backgroundColor: '#2db38b', width: '100%' }}>
            <Card.Body>
              <Card.Title>          <h2 style={{ color: '#FFD365' }}>
                {value.title.rendered}
              </h2></Card.Title>
              <Card.Text>
                <p style={{ marginTop: '-3px', color: '#FDFFA9' }}> <Author author={value._links.author[0].href}/> posted in {value.date.substring(0, 10)}
                  at {value.date.substring(11)}
                </p>
              </Card.Text>
              <Link to={`/post/${value.id}`} style={{ color: 'black' }}><Button variant="warning">Read more </Button></Link>
            </Card.Body>
          </Card>
        </div>;

      })}
    </div>
  );
}

export default Home