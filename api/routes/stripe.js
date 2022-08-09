const router = required("express").Router()
const stripe = required("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req,res)=>{
    stripe.charges.create({
        soures: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
          res.status(500).json(stripeErr);
        }else{
          res.status(200).json(stripeRes);
        }
    });
})
module.exports = router;