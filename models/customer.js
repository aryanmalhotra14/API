const mongoose =  require('mongoose');

const customerSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{ type: String, required: true},
    age:{ type: Number, required: true},
    about:{type:String,required:true},
});


module.exports = mongoose.model('Customer', customerSchema);