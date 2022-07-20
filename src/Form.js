
function Form({setUsername, handleSubmit, loading}) {
    const inputPlaceholderText = " GitHub Username"

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