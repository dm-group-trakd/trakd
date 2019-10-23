const {updateAvatar,updateWeight,updatePhoneNumber,updateProteinGoal} =require ("../redux/reducers/userReducer")

describe ("goals should update correctly", ()=>{
    test("should return the type for avatar", ()=>{
        expect(updateAvatar("string").type).toBe("UPDATE_AVATAR")
    })
    test("should return the right weight",()=>{
        expect(updateWeight(150).type).toBe("UPDATE_WEIGHT")
    })
    test("should return the right type",()=>{
        expect(updatePhoneNumber(123456789).type).toBe("UPDATE_PHONE_NUMBER")
    })
    test("should return right type",()=>{
        expect(updateProteinGoal(123).type).toBe("UPDATE_PROTEIN_GOAL")
    })
})