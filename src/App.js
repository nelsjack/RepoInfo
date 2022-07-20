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


  return (
      <div className="landing-page-container">
        <h1 className="title">GitHub Repo Finder</h1>
          <Form setUsername={setUsername} setLoading={setLoading} setErrorStatus={setErrorStatus} setRepos={setRepos} loading={loading} username={username}/>
          <ResultContainer repos={repos} errorStatus={errorStatus} username={username} setDetails={setDetails}/>
          <RepoDetails details={details}/>
      </div>
  );
}

export default App;