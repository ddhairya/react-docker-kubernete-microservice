import React, { Component } from "react";
import axios from "axios";

class ServerApi extends Component{
    state = {
        noOfVisits : 0
    }

    componentDidMount(){
        this.fetchNoOfVisits()
    }

    async fetchNoOfVisits(){
        const vists = await axios.get('/api/')
        this.setState({ noOfVisits : vists.data})
    }

    renderNoOfVists(){
        return this.state.noOfVisits
    }

    render() {
        return(
            <div>
                {this.renderNoOfVists()}
            </div>
        )
    }
}

export default ServerApi