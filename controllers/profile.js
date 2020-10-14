const handleProfileGet= (req,res,db)=>{
    const {id} = req.params;
    db.select('*').from('users').where({id})
    .then(user=>{
        if(user.length){
            res.json(user[0])

        }else{
            res.status(400).json('NOT FOUND')
        }
    })
    .catch(err=> res.status(400).json('error getting user'))
    // if(!found){
    //     res.status(404).json('no susch user'); 
    // }
}

module.exports={
    handleProfileGet
}