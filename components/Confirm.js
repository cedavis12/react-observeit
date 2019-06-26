import React from 'react';

class Confirm extends React.Component {
    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {
            date, shift, observer, email, taskDescription, observationType, observationDescription, observationDetails
        } } = this.props;
        return (
            <wrapper>
                <nav className="navbar navbar-dark bg-dark justify-content-center">
                    <span className="navbar-brand mb-0 h1">Confirm Safety Observation</span>
                </nav>
                <div className="container">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item lead"><span className="lead"><strong>Observation Date: </strong></span> {date}</li>
                        <li className="list-group-item lead"><span className="lead"><strong>Shift: </strong></span>{shift}</li>
                        <li className="list-group-item lead"><span className="lead"><strong>Observer: </strong></span>{observer}</li>
                        <li className="list-group-item lead"><span className="lead"><strong>Observer Email Address: </strong></span>{email}</li>
                        <li className="list-group-item lead"><span className="lead"><strong>Observation Description: </strong></span>{taskDescription}</li>
                        <li className="list-group-item lead"><span className="lead"><strong>Observation Type: </strong></span>{observationType}</li>
                        <li className="list-group-item lead"><span className="lead"><strong>Observation Description Category: </strong></span>{observationDescription}</li>
                        <li className="list-group-item lead mb-2"><span className="lead"><strong>Observation Details: </strong></span>{observationDetails}</li>
                    </ul>
                    <button type="submit" className="btn btn-outline-success m-1" onClick={this.continue}>Confirm</button>
                    <button type="submit" className="btn btn-outline-secondary m-1" onClick={this.back}>Go Back</button>
                </div>
            </wrapper>
        )
    }
}

export default Confirm