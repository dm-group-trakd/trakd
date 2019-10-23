import React from 'react'
import './styles/calories.scss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Doughnut} from 'react-chartjs-2'

class Calories extends React.Component{
    constructor(){
        super()
    }
    render(){
        const data = {
            labels: ["", "calories"],
            datasets: [
              {
                data: [1000, 2000],
                backgroundColor: ["#36A2EB", "#dae0e6"]
              }
            ]
          };
        return(
            <div className = 'calorie-container'>
                <Card>
                    <CardContent>
                        <Doughnut data={data} width ="700" height ="600" />
                    </CardContent>
                </Card>
            </div>
        )
    }
}
export default Calories;