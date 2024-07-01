import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/Socket.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //instead of this way
    //  await conversation.save()
    //  await newMessage.save()
    //this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    //SOCKET IO FUNCTIONALITY for real time messaging
    const receiverSocketId = getReceiverSocketId(receiverId);

    //emit the message to a specific client
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error.message);
  }
};

const getMessagesBetweenTwoUser = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Interval Server Error" });
    console.log("Error in getting messages getmessage controller", error.message);
  }
};

export { sendMessage, getMessagesBetweenTwoUser };
