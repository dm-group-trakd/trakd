import React from 'react'
import './styles/calories.scss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Doughnut } from 'react-chartjs-2'
import {connect} from 'react-redux'
import {getFood} from '../../redux/reducers/foodReducer'
import Button from '@material-ui/core/Button';

class Calories extends React.Component {
    constructor() {
        super()
        this.state = {
            eaten: 0
        }
    }

    componentDidMount = () => {
        this.props.getFood().then(() => {
            let calorieTotal = 0
            for (let i = 0; i < this.props.food.length; i++) {
                calorieTotal += this.props.food[i].calories
            }
            this.setState({
                    eaten: calorieTotal   
            })
        })
    }

    componentDidUpdate(prevProps) {
        console.log('hit calorie comp')
        if(JSON.stringify(prevProps.food) !== JSON.stringify(this.props.food)) {
            console.log('hit2')
            this.props.getFood().then(() => {
                let calorieTotal = 0
                for (let i = 0; i < this.props.food.length; i++) {
                    calorieTotal += this.props.food[i].calories
                }
                this.setState({
                        eaten: calorieTotal   
                })
            })
        }
    } 

    render() {
        const data = {
            labels: ["", "calories"],
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
                    <section>
                        <h1 id="Nutrient-Header">Calories</h1>
                        <h1>{this.state.eaten}</h1>
                        <div className="Nutrients-Nav">
                        <Button onClick = {this.props.showProtein}  color="primary"  variant="contained" >Protein</Button>
                        <Button onClick = {this.props.showFat}  color="primary"  variant="contained" >Fat</Button>
                        <Button onClick = {this.props.showCarbs} color="primary"  variant="contained" >Carbs</Button>
                        </div>
                            
                            <CardContent>
                                <Doughnut data={data} width="400" height="300" options={{responsive: true}}/>
                            </CardContent>
                    </section>
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
})(Calories);