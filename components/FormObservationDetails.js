import React from 'react';

class FormObservationDetails extends React.Component {
    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, handleChange } = this.props;
        return (
            <wrapper>
                <nav className="navbar navbar-dark bg-dark justify-content-center">
                    <span className="navbar-brand mb-0 h1">Observation Details</span>
                </nav>
                <div className="container mt-4">
                    <form>
                        <div className="form-group">
                            <label>Observation Details</label>
                            <textarea className="form-control" rows="3" onChange={handleChange('observationDetails')} defaultValue={values.observationDetails}></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-outline-primary m-1" onClick={this.continue}>Continue</button>
                            <button type="submit" className="btn btn-outline-secondary m-1" onClick={this.back}>Go Back</button>
                        </div>
                    </form>
                </div>
            </wrapper>
        )
    }
}

export default FormObservationDetails