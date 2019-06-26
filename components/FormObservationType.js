import React from 'react';

class FormObservationType extends React.Component {
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
                    <span className="navbar-brand mb-0 h1">Observation Type</span>
                </nav>
                <div className="container mt-4">
                    <form>
                        <div className="form-group">
                            <label>Task Description</label>
                            <select className="form-control" onChange={handleChange('taskDescription')} defaultValue={values.taskDescription}>
                                <option>Choose a task description</option>
                                <option>Transferring disinfectants</option>
                                <option>Sampling utilities</option>
                                <option>Working in laminar flow hood or biosafety cabinet</option>
                                <option>Handling sharps, glass, or hot objects</option>
                                <option>Personal behavior or PPE</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Observation Type</label>
                            <select className="form-control" onChange={handleChange('observationType')} defaultValue={values.observationType}>
                                <option>Choose an observation type</option>
                                <option>Safe</option>
                                <option>At Risk</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Observation Description Category</label>
                            <select className="form-control" onChange={handleChange('observationDescription')} defaultValue={values.observationDescription}>
                                <option>Choose an ovservation category</option>
                                <option>Personnel Behavior</option>
                                <option>Equipment</option>
                                <option>Condition</option>
                            </select>
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

export default FormObservationType