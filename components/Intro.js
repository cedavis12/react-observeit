import React from 'react';

class Intro extends React.Component {

    continue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <wrapper>
                <nav className="navbar navbar-dark bg-dark justify-content-center">
                    <span className="navbar-brand mb-0 h1">ObserveIt</span>
                </nav>

                <div className="container">
                    <div className="jumbotron jumbotron-fluid mt-4">
                        <div className="container">
                            <h1 className="display-5 text-center">Safety Is Everybody's Business</h1>
                            <img src="https://advancedct.com/wp-content/uploads/2015/12/23.jpg" alt="safety first" className="img-fluid center" />
                            <hr/>
                            <p className="lead text-center">ObserveIt is a safety observation tool that allows you to quickly submit a Laboratory Safety Observation to your manager.</p>
                            <p className="text-center"><strong>Help keep our laboratory safe by reinforcing safe work habits.</strong></p>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-primary m-1" onClick={this.continue}>Let's Begin!</button>
                </div>
               
            </wrapper>
        )
    }
}

export default Intro