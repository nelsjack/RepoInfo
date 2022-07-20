
function Form({setUsername, setLoading, setRepos, setErrorStatus, loading, username}) {
    const inputPlaceholderText = " GitHub Username"

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
        <div className="form">
            <form className="form">
              <input
                className="input"
                placeholder={inputPlaceholderText}
                onChange={e => setUsername(e.target.value)}
              />
              <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
            </form>
          </div>
    )
}

export default Form;