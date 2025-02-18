import mongoose from "mongoose";

const chatHistorySchema = new mongoose.Schema(
  {
    userIP: {
      type: String,
      required: true,
    },
    messages: [
      {
        role: String,
        content: String,
        sources: [
          {
            type: Number,
            _id: false,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ChatHistory =
  mongoose.models.ChatHistory ||
  mongoose.model("ChatHistory", chatHistorySchema);

export default ChatHistory;
