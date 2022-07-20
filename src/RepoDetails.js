function RepoDetails({ details }) {

    function renderDetailsRow(label, value) {
        return (
            <div className="details-row-container">
                <div className="details-row">
                        <label className="label">{label}</label>
                        <span className="value">{details[value]}</span>
                </div>
                <br/>
            </div>
        )
    }
        
    if (details.hasOwnProperty('id')) {
        return (
            <div className="repo-details-container">
                {renderDetailsRow('Name: ', 'name')}
                {renderDetailsRow('Forks: ', 'forks')}
                {renderDetailsRow('Language: ', 'language')}
                {renderDetailsRow('Stars: ', 'stargazers_count')}
            </div>
        );
    }
}

export default RepoDetails;