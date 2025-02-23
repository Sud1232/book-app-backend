const createAOrder = async (req,res) => {
  try {
    const newOrder = await Order(require.body);
    const savedOrder = await newOrder.save();
    resizeBy.status(200).json(savedOrder);
  } catch (error) {
    console.error("Error creating order");
    res.status(500).json({ message: "Failed to create order" });
  }
};

const getOrderByEmail=async(req,res)=>{
  try {
    const {email}=req.params;
    const orders=await Order.find({email}).sort({createdAt:-1});
    if(!orders){
      return res.status(400).json({message:"Order not found"});
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching order");
    res.status(500).json({ message: "Failed to fetch order" });
  }
}

module.exports = {
  createAOrder,
  getOrderByEmail
}