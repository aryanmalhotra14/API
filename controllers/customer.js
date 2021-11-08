const Customer = require('../models/customer');
const mongoose = require('mongoose');

exports.customer_get_all = async (req, res) => {
      try{ 
      let customer = await Customer.find();
      res.status(201).json({customer: customer});
    }catch(err) {
           console.log(err);
           res.status(500).json({
               error: err
           });
       };
    }

exports.customer_create_customer= async (req, res) => {
  try{
    const{
        name,
        age,
        about
       } = req.body;

      let customer = new Customer({
          _id : new mongoose.Types.ObjectId(),
          name,
          age,
          about
      });
      await customer.save();
      res.status(201).json({message: "Customer Created", customer: customer});
  }
       catch(err) {
       console.log(err);
       res.status(500).json({
       error:err
       });
}
}

exports.customer_get_customer = async(req, res) => {
   try{
    const id = req.params.customerId;
    const customer = await Customer.findById(id)
            if(customer) {
                res.status(200).json({
                  customer: customer
                });
            } 
            else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }
   }
       catch(err) {
           console.log(err);
           res.status(500).json({ error: err });
       };
}

exports.customer_update_customer =  async (req, res) => {
   try{
    const id = req.params.customerId;
  let updatedCustomer=await Customer.findByIdAndUpdate(id, req.body,{
      new: true
  });
   res.status(200).json({
           message:'Customer updated',updatedCustomer,
       });
   }
    catch(err){
       console.log(err);
       res.status(400).json({ error: err });
   };
}
exports.customer_delete = async(req, res) => {
   try{
    const id = req.params.customerId;
    await Customer.remove({ _id: id })
        res.status(200).json({
            message:'Customer deleted',
        });
   }
    catch(err){
       console.log(err);
       res.status(500).json({ error: err });
   };
}

