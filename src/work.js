import React, { Component } from "react";
import axios from 'axios'
import LineChart from "./core/LineChart/index.js"
class Work extends Component {
    isMounted=false;
    componentDidMount(){
        this.isMounted=true;
        this.getJson()

    }
    componentWillUnmount(){
        this.isMounted=false
    }
        state = {
        data: []
    }
    constructor(props) {
        super(props)
       
    }
    getJson = () => {
        var apiUrl = "http://my-json-server.typicode.com/yisehak-awm/finbit-hiring/result"

        axios.get(apiUrl)
            .then((response) => {
                if(this.isMounted){
                this.setState({ data: response.data })
                console.log(response.data)
            }}).catch((error) => {
                console.log(error.response)
            })
    }
    handleChange=(country)=>{
        console.log(country)
    }
    render() {
        return (
            <div>
                <h1>Countries</h1>
                <div>
                    {
                        this.state.data.map(currentCountry => (
                            <label >
                                {currentCountry.country
                                
                                }{
                                    console.log(currentCountry.country)
                                }
                                <input type="checkbox" onChange={()=>this.handleChange(currentCountry.country)}/>
                                
                            </label>
                        ))
                    }
                    
                </div>
                <div>
                    <h1>Duration</h1>
                    <div>
                        <lable>
                            start
                        <input type="number" min='1' max='30' defaultValue="1"/>
                        </lable>
                        <lable >
                            end
                         <input type="number" min='1' max='30' defaultValue="30"></input>
                         </lable>
                    </div>
                </div>
                <div>
                    {
                        console.log(this.state.data.keys[china])
                    }
                    <LineChart data={[]}/>
                </div>
            </div>
        )
    }
}
export default Work;