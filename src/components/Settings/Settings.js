import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { getSession } from "../../redux/reducers/userReducer";
import "./styles/Settings.css"

class Settings extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            avatar: "",
            weight: 0,
            phone_number: 0,
            weight_goal: 0,
            carb_goal: 0,
            calorie_goal: 0,
            protein_goal: 0,
            fat_goal: 0
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="settings-page">
                <section className="settings-card-1">
                    <Card>
                        <CardContent>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Username-input"
                                    label="Username"
                                    type="text"
                                    name="username"
                                    autoComplete="username"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Email-input"
                                    label="Email"
                                    type="text"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Avatar-input"
                                    label="Avatar"
                                    type="text"
                                    name="avatar"
                                    autoComplete="avatar"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Weight-input"
                                    label="Weight"
                                    type="text"
                                    name="weight"
                                    autoComplete="weight"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Phone_Number-input"
                                    label="Phone Number"
                                    type="text"
                                    name="phone_number"
                                    autoComplete="phone_number"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="settings-card-2">
                    <Card>
                        <CardContent>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Weight_Goal-input"
                                    label="Weight Goal"
                                    type="text"
                                    name="weight_goal"
                                    autoComplete="weight_goal"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Calorie_Goal-input"
                                    label="Calorie Goal"
                                    type="text"
                                    name="calorie_goal"
                                    autoComplete="calorie_goal"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Protein_Goal-input"
                                    label="Protein Goal"
                                    type="text"
                                    name="protein_goal"
                                    autoComplete="protein_goal"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Carb_Goal-input"
                                    label="Carb Goal"
                                    type="text"
                                    name="carb_goal"
                                    autoComplete="carb_goal"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Fat_Goal-input"
                                    label="Fat Goal"
                                    type="text"
                                    name="fat_goal"
                                    autoComplete="fat_goal"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}>
                                    update</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>
        )
    }

}
const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    getSession
})(Settings)