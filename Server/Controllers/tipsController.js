module.exports ={
    getTips:(req,res)=>{
        const db = req.app.get("db")
        db.tips.tips().then(tips=>{
            res.status(200).json(tips)
        })
    }
}