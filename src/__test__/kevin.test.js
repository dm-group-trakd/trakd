const {loginUser} =require ("../../Server/Controllers/userController")

describe ("loginUser function should return correct username and password", ()=>{
    test("should return right username",()=>{
        expect(loginUser("kev")).toBe("kev")
    })
})