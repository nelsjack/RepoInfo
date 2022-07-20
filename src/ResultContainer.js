function ResultContainer({repos, username, errorStatus, setDetails}) {

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
        fetch(`https://api.github.com/repos/${username}/${repoName}`)
          .then(response => {
            response.json()
            .then(res => {
              setDetails(res);
            }).catch((error) => {return error})
          }).catch((error) => {return error});
     }
     
    return (
        <div className="result-container">
            {repos.map(renderRepo)}
            <h2 className="input-error">{errorStatus}</h2>
        </div>
    )
}

export default ResultContainer;