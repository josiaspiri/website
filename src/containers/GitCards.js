import { useState, useEffect } from 'react';
import './GitCards.scss';

export default function GitCards(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong.');
        }
      })
      .then(result => {
        setItems(result);
      })
      .catch(error => setError(error))
      .finally(_ => setLoading(false));
  }, []);

  return <div className="git-cards">
    {error && <div className="git-card"><h3>Something broke.</h3></div>}
    {loading && <div className="git-card"><h3>Fetching projects.</h3></div>}

    {items.length === 0 && !(error || loading) ?
      <div className="git-card"><h3>Nothing is here!</h3></div> :
      items.map((item, index) =>
        <a
          href={item.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div key={index} className="git-card">
            <h3 className="git-name">
              {item.name}
            </h3>
            <p>{item.description}</p>
          </div>
        </a>)}
  </div>
}