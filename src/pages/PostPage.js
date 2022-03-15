import { useEffect, useState } from "react";
import { Route, useParams } from "react-router-dom";
function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [arthorState, setArthorState] = useState(null);
  useEffect(
    async () => {
      setLoading(true);
      fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${id}`)
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
    <div className="container">
      {/* <div>
        <h1 style={{ size: '50px' }}> Post id : {data.author} </h1>
      </div> */}
      <div>
        <div style={{ width: '100%', border: '1 px', padding: '10px', backgroundColor: '#019267', display: 'block' }}>
          <h2 style={{ color: '#FFD365' }}>
            {data.title.rendered}<p></p>
          </h2>
          <p style={{ marginTop: '-3px', color: '#FDFFA9' }}>
            <h3 style={{color: '#FFD365', width: '100%'}} dangerouslySetInnerHTML={{ __html: data.content.rendered }} ></h3>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home