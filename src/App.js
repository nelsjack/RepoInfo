import { useEffect, useState } from 'react';
import RepoDetails from "./RepoDetails"
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");

  const githubUrl = "https://api.github.com/";
  const inputPlaceholderText = " GitHub Username"

  useEffect(() => {
    setRepos([]);
    setDetails({});
    setErrorStatus("")
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
  };

  function searchRepos() {
    setLoading(true);
    fetch(`${githubUrl}users/${username}/repos`)
      .then(response => {
        response.json()
        .then(res => {
          setLoading(false);
          if (Array.isArray(res)) {
            setRepos(res)
          } else {
            setErrorStatus("User Not Found")
          }
        }).catch((error) => {return error})
      }).catch((error) => {return error})
  }

  function renderRepo(repo) {
    return (
        <div className="repo" onClick={() => getDetails(repo.name)} key={repo.id}>
          <h2 className="repo-name">
            {repo.name}
          </h2>
        </div>
    );
  }

  function getDetails(repoName) {
    setDetailsLoading(true);
    fetch(`${githubUrl}repos/${username}/${repoName}`)
      .then(response => {
        response.json()
        .then(res => {
          setDetailsLoading(false);
          setDetails(res);
        }).catch((error) => {return error})
      }).catch((error) => {return error});
 }

  return (
      <div className="landing-page-container">
        <h1 className="title">GitHub Repo Finder</h1>
          <div className="form">
            <form className="form">
              <input
                className="input"
                value={username}
                placeholder={inputPlaceholderText}
                onChange={e => setUsername(e.target.value)}
              />
              <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
            </form>
          </div>
          <div className="result-container">
          <h2 className="input-error">{errorStatus}</h2>
              {repos.map(renderRepo)}
          </div>
          <RepoDetails details={details} loading={detailsLoading} />
      </div>
  );
}

export default App;