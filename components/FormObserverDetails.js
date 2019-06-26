import React from 'react';

class FormObserverDetails extends React.Component {
    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;
        return (
            <wrapper>
                <nav className="navbar navbar-dark bg-dark justify-content-center">
                    <span className="navbar-brand mb-0 h1">Observer Details</span>
                </nav>
                <div className="container mt-4">
                    <form>
                        <div className="form-group">
                            <label className="col-form-label">Date</label>
                            <input type="date" className="form-control" onChange={handleChange('date')} defaultValue={values.date} />
                        </div>
                        <div className="form-group">
                            <label>Shift</label>
                            <select className="form-control" onChange={handleChange('shift')} defaultValue={values.shift}>
                                <option>Choose a shift</option>
                                <option>First</option>
                                <option>Second</option>
                                <option>Third</option>
                                <option>Weekend</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Observer</label>
                            <input type="text" className="form-control" placeholder="Full Name of Observer" onChange={handleChange('observer')} defaultValue={values.observer} />
                        </div>
                        <div className="form-group">
                            <label>Observer Email Address</label>
                            <input type="text" className="form-control" placeholder="Observer Email Address" onChange={handleChange('email')} defaultValue={values.email} />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-primary" onClick={this.continue}>Continue</button>
                    </form>
                </div>
            </wrapper>
        )
    }
}

export default FormObserverDetails