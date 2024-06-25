import User from "../models/user.model.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserIds = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserIds } }).select("-password");

    res.status(200).json({ filteredUsers });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log(error.message, "Error in getUserForSidebar");
  }
};

export { getUsersForSidebar };
