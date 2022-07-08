import { useEffect, useState } from 'react';
import RepoDetails from "./RepoDetails"
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    setRepos([]);
    setDetails({});
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  };

  function searchRepos() {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        response.json()
        .then(res => {
          setLoading(false);
          if (Array.isArray(res)) {
            setRepos(res)
          } else {
            alert("bad input")
          }
        })
      })
  }

  function renderRepo(repo) {
    return (
        <div className="row" onClick={() => getDetails(repo.name)} key={repo.id}>
          <h2 className="repo-name">
            {repo.name}
          </h2>
        </div>
    );
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
      .then(response => {
        response.json()
        .then(res => {
          setDetailsLoading(false);
          setDetails(res);
        });
      });
 }

  return (
    <div className="page">
      <div className="langing-page-container">
          <div className="form">
            <form className="form">
              <input
                className="input"
                value={username}
                placeholder="GitHub Username"
                onChange={e => setUsername(e.target.value)}
              />
              <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
            </form>
            <div className="result-container">
              {repos.map(renderRepo)}
            </div>
          <RepoDetails details={details} loading={detailsLoading} />
        </div>
      </div>
    </div>
  );
}

export default App;