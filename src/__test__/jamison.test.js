import { getSession, updateFatGoal, loginUser, registerUser } from "../redux/reducers/userReducer"

    test("getSession should send a request and receive user", ()=>{
        expect(getSession().type).toBe( "GET_SESSION")
    })

    test("registerUser should add user", ()=>{
        expect(registerUser().type).toBe("REGISTER_USER")
    })

    test("loginUser should create a session for the user", ()=>{
        expect(loginUser().type).toBe("LOGIN_USER")
    })

    test("updateFatGoal should change form the previous goal to the new goal", ()=>{
        expect(updateFatGoal(1).type).toBe("UPDATE_FAT_GOAL")
    })
