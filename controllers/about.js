exports.get  = (req,res)=>{
    res.render('./pages/about', {
        user: req.user
      })
    }