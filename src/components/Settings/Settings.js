import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { getSession, getGoals, updateUsername, updateEmail, updateAvatar, updateWeight, updatePhoneNumber, updateWeightGoal, updateCarbGoal, updateCalorieGoal, updateProteinGoal, updateFatGoal } from "../../redux/reducers/userReducer";
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
            fat_goal: 0,
            editStatus: false, 
            editUsername: false,
            editEmail:false,
            editWeight:false,
            editPhoneNumber:false,
            editProfilePic:false,
            editWeightGoal:false,
            editCalorieGoal:false,
            editProteinGoal:false,
            editCarbGoal:false,
            editFatGoal:false
        }
    }
    componentDidUpdate = () => {
        this.props.getSession()
<<<<<<< HEAD
        this.props.getGoals()
        // console.log(this.props.avatar)
        
=======
        console.log(this.props.avatar)

>>>>>>> master
    }
    componentDidMount() {
        this.props.getSession()
    }

    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

<<<<<<< HEAD
    handleUsernameUpdate=()=>{
        const {username}=this.state
        this.props.updateUsername({username})
        this.setState({editUsername:false})
    }
    
    handleEmailUpdate=()=>{
        const {email}=this.state
        this.props.updateEmail({email})
        this.setState({editEmail:false})
    }

    handleAvatarUpdate=()=>{
        const {avatar}=this.state
        this.props.updateAvatar({avatar})
        this.setState({editProfilePic:false})
=======
    handleUsernameUpdate = () => {
        const { username } = this.state
        this.props.updateUsername({ username })
    }

    handleEmailUpdate = () => {
        const { email } = this.state
        this.props.updateEmail({ email })
    }

    handleAvatarUpdate = () => {
        const { avatar } = this.state
        this.props.updateAvatar({ avatar })
>>>>>>> master
        console.log(avatar)
    }

<<<<<<< HEAD
    handleWeightUpdate=()=>{
        const {weight}=this.state
        this.props.updateWeight({weight})
         this.setState({editWeight:false})
    }
    //*
    handlePhoneNumberUpdate=()=>{
        const {phone_number}=this.state
        this.props.updatePhoneNumber({phone_number})
         this.setState({editPhoneNumber:false})
    }
    //*
    handleWeightGoalUpdate=()=>{
        const {weight_goal}=this.state
        this.props.updateWeightGoal({weight_goal})
        this.setState({editWeightGoal:false})
    }
    //*
    handleCalorieGoalUpdate=()=>{
        const {calorie_goal}=this.state
        this.props.updateCalorieGoal({calorie_goal})
        this.setState({editCalorieGoal:false})
    }

    handleProteinGoalUpdate=()=>{
        const {protein_goal}=this.state
        this.props.updateProteinGoal({protein_goal})
        this.setState({editProteinGoal:false})
=======
    handleWeightUpdate = () => {
        const { weight } = this.state
        this.props.updateWeight({ weight })
    }
    //*
    handlePhoneNumberUpdate = () => {
        const { phone_number } = this.state
        this.props.updatePhoneNumber({ phone_number })
    }
    //*
    handleWeightGoalUpdate = () => {
        const { weight_goal } = this.state
        this.props.updateWeightGoal({ weight_goal })
    }
    //*
    handleCalorieGoalUpdate = () => {
        const { calorie_goal } = this.state
        this.props.updateCalorieGoal({ calorie_goal })
    }

    handleProteinGoalUpdate = () => {
        const { protein_goal } = this.state
        this.props.updateProteinGoal({ protein_goal })
>>>>>>> master
    }

    handleCarbGoalUpdate = () => {
        const { carbs_goal } = this.state
        console.log(carbs_goal)
<<<<<<< HEAD
        this.props.updateCarbGoal({carbs_goal})
        this.setState({editCarbGoal:false})
    }

    handleFatGoalUpdate=()=>{
        const {fat_goal}=this.state
        this.props.updateFatGoal({fat_goal})
        this.setState({editFatGoal:false})
=======
        this.props.updateCarbGoal({ carbs_goal })
    }

    handleFatGoalUpdate = () => {
        const { fat_goal } = this.state
        this.props.updateFatGoal({ fat_goal })
>>>>>>> master
    }
    checkUploadResult = (error, resultEvent) => {
        if (resultEvent.event === "success") {
            console.log("Picture uploaded successfully")
            console.log(resultEvent.info.url);
<<<<<<< HEAD
            this.setState({avatar: resultEvent.info.url});
            this.setState({editProfilePic:true})
=======
            this.setState({ avatar: resultEvent.info.url });
>>>>>>> master
        }
    };

    render() {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "kevin14",
                uploadPreset: "xoy9arl8",
                sources: ["local", "url", "dropbox", "facebook", "instagram"],
                cropping: true,
                cropping_aspect_ratio: 1,
                show_skip_crop_button: false,
                Default: false
            },
            (error, result) => {
<<<<<<< HEAD
            this.checkUploadResult(error, result)
        
=======
                this.checkUploadResult(error, result);
>>>>>>> master
            })
        return (
            <div className="settings-page">
        {/* username */}
                <section className="settings-card-1">
                    <Card>
                        <div className = "update-content">
                        <CardContent>
                            <h2 className="settings-settings">Settings</h2>
                            <div className="settings-button-style">
                                {this.state.editUsername === false?
                                <>
                                <h1 className="settingH1">Username:  <p className ="settingP">{this.props.username}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editUsername:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                    set
                                </Button>
                                <Button
                                variant="contained"
                                color="primary"
                                onClick={()=>this.setState({editUsername:false})}>
                                cancel</Button>
                            </>
                            }
                            </div> 

                            {/* email */}
                            <div className="settings-button-style">
                                 {this.state.editEmail === false?
                                <>
                                <h1 className = "settingH1">Email:<p className = "settingP">{this.props.email}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editEmail:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editEmail:false})}>
                                cancel</Button>
                                </>
                                 }
                            </div>

<<<<<<< HEAD
                            {/* weight */}
=======
>>>>>>> master
                            <div className="settings-button-style">
                                 {this.state.editWeight === false?
                                <>
                                <h1 className ="settingH1">Weight: <p className ="settingP">{this.props.weight}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editWeight:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editWeight:false})}>
                                    cancel</Button>
                                </>
                                 }
                            </div>

                            {/* phoneNumber */}
                            <div className="settings-button-style">
                                {this.state.editPhoneNumber === false?
                                <>
                                <h1 className ="settingH1">PhoneNumber:<p className ="settingP">{this.props.phone_number}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editPhoneNumber:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editPhoneNumber:false})}>
                                    cancel</Button>
                                </>
                                }
                            </div>
                            {/* profilePicture */}
                            <div className="settings-button-style">
                                {this.state.editProfilePic === false?
                                <>
                                <h1 className ="settingH1">Edit Profile Picture<img className = "profPic" src ={this.props.avatar}/> </h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => widget.open()}>
                                    update</Button>
<<<<<<< HEAD
                                </>
                                :
                                <>
                                <h1>Add Profile Picture :</h1>
                                <Button
                                     variant="contained"
                                     color="primary"
                                     onClick ={this.handleAvatarUpdate}
                                    >Set</Button>
                                </>
                                }
=======
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleAvatarUpdate}
                                >Set</Button>
>>>>>>> master
                            </div>
                        </CardContent>
                        </div>
                    </Card>
                </section>

                <section className="settings-card-2">
                {/* {weightgoal} */}
                    <Card>
                        <CardContent>
                            <h2 className="settings-goals">Goals</h2>
                            <div className="settings-button-style">
                                   {this.state.editWeightGoal === false?
                                <>
                                <h1 className ="settingH1">Weight Goal:<p className ="settingP">{this.props.weight_goal}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editWeightGoal:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editWeightGoal:false})}>
                                    cancel</Button>
                                    </>
                                   }
                            </div>
                            {/* caloriegoal */}
                            <div className="settings-button-style">
                                {this.state.editCalorieGoal === false?
                                <>
                                <h1 className ="settingH1">Calorie Goal:<p className = "settingP">{this.props.calorie_goal}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editCalorieGoal:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editCalorieGoal:false})}>
                                    cancel</Button>
                                </>
                                }
                            </div>
                            {/* proteingoal */}
                            <div className="settings-button-style">
                                         {this.state.editProteinGoal === false?
                                <>
                                <h1 className = "settingH1">protein:<p className ="settingP">{this.props.protein_goal}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editProteinGoal:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editProteinGoal:false})}>
                                    cancel</Button>
                                </>
                                }
                            </div>
                            {/* carbgoal */}
                            <div className="settings-button-style">
                                {this.state.editCarbGoal === false?
                                <>
                                <h1>Carbs_Goal:<p>{this.props.carbs_goal}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editCarbGoal:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editCarbGoal:false})}>
                                    cancel</Button>
                                </>    
                                }
                            </div>
                            {/* fatgoal */}
                            <div className="settings-button-style">
                                {this.state.editFatGoal === false?
                                <>
                                <h1 className = 'settingH1'>Fat:<p className ='settingP'>{this.props.fat_goal}</p></h1>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editFatGoal:true})}>
                                    Update
                                </Button>
                                </>
                                :
                                <>
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={()=>this.setState({editFatGoal:false})}>
                                    cancel</Button>
                                </>
                                }
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
<<<<<<< HEAD
        avatar:reduxState.userReducer.avatar,
        email: reduxState.userReducer.email,
        phone_number: reduxState.userReducer.phone_number,
        username: reduxState.userReducer.username,
        weight: reduxState.userReducer.weight,
        weight_goal:reduxState.userReducer.weight_goal,
        calorie_goal:reduxState.userReducer.calorie_goal,
        protein_goal:reduxState.userReducer.protein_goal,
        carbs_goal:reduxState.userReducer.carbs_goal,
        fat_goal:reduxState.userReducer.fat_goal
       
=======
        avatar: reduxState.userReducer.avatar
>>>>>>> master
    }
}

export default connect(mapStateToProps, {
    getSession, getGoals, updateUsername, updateEmail, updateAvatar, updateWeight, updatePhoneNumber, updateWeightGoal, updateCarbGoal, updateCalorieGoal, updateProteinGoal, updateFatGoal
})(Settings)