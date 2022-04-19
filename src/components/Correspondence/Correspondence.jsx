//Imports
import React, { Component } from "react";

//Iconos
import { IoChevronBackOutline } from "react-icons/io5";

//Componentes
import Digital from "./Formato/Digital";
import Fisica from "./Formato/Fisica"

class Correspondence extends Component {
    state = {
        showDigital: false,
        showFisica: false,
    }

    componentDidMount() {
        this.setState({ show1: false });
        this.setState({ show2: false });
    }

    async hideComponent(name) {
        switch (name) {
            case "showDigital":
                this.setState({ show1: true });
                this.setState({ show2: false });
                break;
            case "showFisica":
                this.setState({ show2: true });
                this.setState({ show1: false });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="body">
                <div className="correspondencecontent">
                    <div className="buttonBack">
                        <i><IoChevronBackOutline /></i>
                        <p className="TitlePage">Nueva Correspondencia</p>
                    </div>
                    <br />

                    <div className="formatodiv">
                        <button onClick={() => this.hideComponent("showDigital")}>
                            Digital
                        </button>
                        <button onClick={() => this.hideComponent("showFisica")}>
                            Fisica
                        </button>
                    </div>

                    {this.state.show1 && <Digital />}
                    <hr />
                    {this.state.show2 && <Fisica />}

                </div>
            </div>
        );
    }
}

export default Correspondence;