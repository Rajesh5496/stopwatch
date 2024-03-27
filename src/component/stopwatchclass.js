import React, { Component } from "react";
import styles from "./stopwatch.module.css";

class Stopwatchclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonclicked: true,
            elapsedSeconds: 0,
            intervalId: null
        };
    }

    handlebuttonclick = () => {
        if (!this.state.intervalId) {
            const newIntervalId = setInterval(() => {
                this.setState(prevState => ({
                    elapsedSeconds: prevState.elapsedSeconds + 1
                }));
            }, 1000);
            this.setState({
                intervalId: newIntervalId,
                buttonclicked: false
            });
        }
    };

    handleStop = () => {
        clearInterval(this.state.intervalId);
        this.setState({
            intervalId: null,
            buttonclicked: true
        });
    };

    handlereset = () => {
        clearInterval(this.state.intervalId);
        this.setState({
            elapsedSeconds: 0,
            intervalId: null
        });
    };

    render() {
        const { buttonclicked, elapsedSeconds } = this.state;
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;

        return (
            <div>
                <h2>Stopwatch</h2>
                <p>
                    Time: {minutes < 10 ? `${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                </p>
                <div>
                    {buttonclicked ? (
                        <button type="button" onClick={this.handlebuttonclick}>
                            Start
                        </button>
                    ) : (
                        <button type="button" onClick={this.handleStop}>
                            Stop
                        </button>
                    )}
                    <button type="button" onClick={this.handlereset}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

export default Stopwatchclass;
