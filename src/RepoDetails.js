function RepoDetails({ details, loading}) {

    if (details.hasOwnProperty('id')) {
        return (
            <div className="repo-details-container">
                <div className="details-row">
                    <label className="label">Name: </label>
                    <span className="value">{details.name}</span>
                </div>
                <br/>
                <div className="details-row">
                    <label className="label">Forks Count: </label>
                    <span className="value">{details.forks}</span>
                </div>
                <br/>
                <div className="details-row">
                    <label className="label">Language: </label>
                    <span className="value">{details.language}</span>
                </div>
                <br/>
                <div className="details-row">
                    <label className="label">Stars: </label>
                    <span className="value">{details.stargazers_count}</span>
                </div>
            </div>
        );
    }
}

export default RepoDetails