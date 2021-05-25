import { useState, useEffect } from 'react';
import './GitCards.scss';

export default function GitCards(props) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setLoading(false);
        },
        (error) => {
          setItems([{ id: 0, html_url: "#", full_name: "No Internet! (Probably)" }]);
          setLoading(false);
        }
      )
  }, [props.url])

  let content = null;
  if (loading) {
    content = (<div className="git-card-loading">
      <h3 className="git-name">
        Fetching some fetching projects.
      </h3>
      <p>Good things come with time!</p>
    </div>);
  } else {
    content = (<>
      {items.map((item) =>
        <div key={item.id} className="git-card">
          <a
            className=""
            href={item.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="git-name">
              {item.name}
            </h3>
          </a>
          <p>{item.description ?? "No description :("}</p>
        </div>
      )}
    </>)
  }
  return (
    <div className="git-cards">
      {content}
    </div>
  );
}