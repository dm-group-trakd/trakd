import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./styles/tips.scss"
import axios from 'axios'

export default class Tips extends Component{
    constructor(){
        super()
        this.state={
            tips:""
        }

    }
    componentDidMount (){
        axios.get('/api/tips').then(response =>{
            let randomNum = Math.floor(Math.random() * 9)+1 
            this.setState({tips:response.data[randomNum].tips})
            console.log(response)
        })
    }

    render(){
        return(
            <div className = "tips-main">
                <Card>
                    <CardContent>
                            <div className = "tips-conatiner">
                                <h1 className = "tips">{this.state.tips}.</h1>
                            </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
