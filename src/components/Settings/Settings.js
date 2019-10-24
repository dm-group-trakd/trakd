import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { getSession, updateUsername, updateEmail, updateAvatar, updateWeight, updatePhoneNumber, updateWeightGoal, updateCarbGoal, updateCalorieGoal, updateProteinGoal, updateFatGoal } from "../../redux/reducers/userReducer";
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
            carbs_goal: 0,
            calorie_goal: 0,
            protein_goal: 0,
            fat_goal: 0
        }
    }
    componentDidUpdate=()=>{
        this.props.getSession()
        console.log(this.props.avatar)
        
    }
    componentDidMount(){
        this.props.getSession()
    }

    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUsernameUpdate=()=>{
        const {username}=this.state
        this.props.updateUsername({username})
    }
    
    handleEmailUpdate=()=>{
        const {email}=this.state
        this.props.updateEmail({email})
    }

    handleAvatarUpdate=()=>{
        const {avatar}=this.state
        this.props.updateAvatar({avatar})
        console.log(avatar)
    }    

    handleWeightUpdate=()=>{
        const {weight}=this.state
        this.props.updateWeight({weight})
    }
    //*
    handlePhoneNumberUpdate=()=>{
        const {phone_number}=this.state
        this.props.updatePhoneNumber({phone_number})
    }
    //*
    handleWeightGoalUpdate=()=>{
        const {weight_goal}=this.state
        this.props.updateWeightGoal({weight_goal})
    }
    //*
    handleCalorieGoalUpdate=()=>{
        const {calorie_goal}=this.state
        this.props.updateCalorieGoal({calorie_goal})
    }

    handleProteinGoalUpdate=()=>{
        const {protein_goal}=this.state
        this.props.updateProteinGoal({protein_goal})
    }

    handleCarbGoalUpdate=()=>{
        const {carbs_goal}=this.state
        console.log(carbs_goal)
        this.props.updateCarbGoal({carbs_goal})
    }

    handleFatGoalUpdate=()=>{
        const {fat_goal}=this.state
        this.props.updateFatGoal({fat_goal})
    }
    checkUploadResult = (error,resultEvent) => {
        if (resultEvent.event === "success") {
            console.log("Picture uploaded successfully")
            console.log(resultEvent.info.url);
            this.setState({avatar: resultEvent.info.url});
        }
    };

    render() {
        const widget = window.cloudinary.createUploadWidget(
            {
            cloudName: "kevin14",
            uploadPreset: "xoy9arl8",
            sources: ["local", "url", "dropbox", "facebook", "instagram"],
            cropping: true,
            cropping_aspect_ratio : 1,
            show_skip_crop_button: false,
            Default: false
            },
            (error, result) => {
            this.checkUploadResult(error, result);
            })
        return (
            <div className="settings-page">
                <section className="settings-card-1">
                    <Card>
                        <CardContent>
                            <h2 className="settings-settings">Settings</h2>
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
                                    onClick={this.handleUsernameUpdate}>
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
                                    onClick={this.handleEmailUpdate}>
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
                                    onClick={this.handleWeightUpdate}>
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
                                    onClick={this.handlePhoneNumberUpdate}
                                    id="update-phone-number">
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <h1>Add Profile Picture :</h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>widget.open()}>
                                    update</Button>
                                    <Button
                                     variant="contained"
                                     color="primary"
                                     onClick ={this.handleAvatarUpdate}
                                    >Set</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="settings-card-2">
                    <Card>
                        <CardContent>
                            <h2 className="settings-goals">Goals</h2>
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
                                    onClick={this.handleWeightGoalUpdate}>
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
                                    onClick={this.handleCalorieGoalUpdate}>
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
                                    onClick={this.handleProteinGoalUpdate}>
                                    update</Button>
                            </div>
                            <div className="settings-button-style">
                                <TextField
                                    id="outlined-Carbs_Goal-input"
                                    label="Carbs Goal"
                                    type="text"
                                    name="carbs_goal"
                                    autoComplete="carbs_goal"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput} >
                                </TextField>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleCarbGoalUpdate}>
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
                                    onClick={this.handleFatGoalUpdate}>
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
        user_id: reduxState.userReducer.user_id,
        avatar:reduxState.userReducer.avatar
    }
}

export default connect(mapStateToProps, {
    getSession, updateUsername, updateEmail, updateAvatar, updateWeight, updatePhoneNumber, updateWeightGoal, updateCarbGoal, updateCalorieGoal, updateProteinGoal, updateFatGoal
})(Settings)