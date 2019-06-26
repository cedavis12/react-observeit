import React from 'react';
import FormObserverDetails from './FormObserverDetails';
import FormObservationType from './FormObservationType';
import FormObservationDetails from './FormObservationDetails';
import Confirm from './Confirm';
import Success from './Success';
import Intro from './Intro';


class ObserveForm extends React.Component {
    state = {
        step: 0,
        date: '',
        shift: '',
        observer: '',
        email: '',
        taskDescription: '',
        observationType: '',
        observationDescription: '',
        observationDetails: ''
    }

    //Proceed to the next step of the form
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to the previous step of the form
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle field changes
    handleChange = (input) => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {

        const { step, date, shift, observer, email, taskDescription, observationType, observationDescription, observationDetails } = this.state;
        const values = { date, shift, observer, email, taskDescription, observationType, observationDescription, observationDetails }

        switch (step) {
            case 0: return <Intro
            nextStep={this.nextStep}/>
            case 1:
                return (
                    <FormObserverDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormObservationType
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <FormObservationDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 5:
                return (
                    <Success />
                )
        }
    }
}

export default ObserveForm