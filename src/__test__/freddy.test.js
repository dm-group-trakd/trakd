import {logoutUser, updateUsername, updateEmail, getGoals} from '../redux/reducers/userReducer'
import {handleInput} from '../components/Settings'

// UNIT TESTS
describe("Logging out user, should be functional", () => {
    test("Logging out a user should return an empty object", () => {
        expect(logoutUser()).toEqual({"type": "LOGOUT_USER"})
    })
})

describe("Updating username, should be functional", () => {
    test("Updating username should return an new username", () => {
        expect(updateUsername("freddy12").type).toBe("UPDATE_USERNAME")
    })
})

describe("Updating email, should be functional", () => {
    test("Updating email should return an new email", () => {
        expect(updateEmail("freddy12@mfmf.com").type).toBe("UPDATE_EMAIL")
    })
})

describe("Getting all goals, should be functional", () => {
    test("Getting goals should return the users goals", () => {
        expect(getGoals().type).toBe("GET_GOALS")
    })
})

// COMPONENT TESTING
describe("handleInput for username should function", () => {
    test("Typing should update state for username", () => {
        expect(handleInput()).toBe()
    })
})


