import { useEffect, useState } from 'react';
import RepoDetails from "./RepoDetails"
import Form from './Form';
import './App.css';
import ResultContainer from './ResultContainer';

function App() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [details, setDetails] = useState({});
  const [errorStatus, setErrorStatus] = useState("");
  const [loading, setLoading] = useState(false);

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
    fetch(`https://api.github.com/users/${username}/repos`)
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

  return (
      <div className="landing-page-container">
        <h1 className="title">GitHub Repo Finder</h1>
          <Form setUsername={setUsername} loading={loading} handleSubmit={handleSubmit}/>
          <ResultContainer repos={repos} errorStatus={errorStatus} username={username} setDetails={setDetails}/>
          <RepoDetails details={details}/>
      </div>
  );
}

export default App;