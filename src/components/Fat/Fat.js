import React from 'react'
import './styles/Fat.scss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Doughnut } from 'react-chartjs-2'
import {connect} from 'react-redux'
import {getFood} from '../../redux/reducers/foodReducer'
import Button from '@material-ui/core/Button';

class Fat extends React.Component {
    constructor() {
        super()
        this.state = {
            eaten: 0
        }
    }

    componentDidMount = () => {
        this.props.getFood().then(() => {

            let fatTotal = 0
            for (let i = 0; i < this.props.food.length; i++) {

                fatTotal += this.props.food[i].fat
                
            }
            this.setState({
                
            
                    eaten: fatTotal
                
            })
        })
    
        console.log(this.props.food)
    }

    render() {
        const data = {
            labels: ["", "fat"],
            datasets: [
                {
                    data: [this.state.eaten, 2000 - this.state.eaten ],
                    backgroundColor: ["#36A2EB", "#dae0e6"]
                }
            ]
        };
        return (
            <div className='calorie-container'>
                
                <Card>
                <h1 id="Nutrient-Header">Fat</h1>
                
                <div className="Nutrients-Nav">
                <Button onClick={this.props.showCalories}  color="primary"  variant="contained" id="FatButton">Calories</Button>
                <Button onClick = {this.props.showProtein}  color="primary"  variant="contained" >Protein</Button>
                
                <Button onClick = {this.props.showCarbs}  color="primary"  variant="contained" >Carbs</Button>

                
                </div>
                    <CardContent>
                        <Doughnut data={data} width="500" height="400" />
                    </CardContent>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
        food: reduxState.foodReducer.food
    }
}
export default connect(mapStateToProps, {
getFood
})(Fat);