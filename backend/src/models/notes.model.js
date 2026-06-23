const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema(
  {
    topicName: {
      type: String,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    aiNotes: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const notesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    subject:{
        type:String,
        required: true,
    },
    chapter: [
        {
            chapterName:{
                type : String,
                required:true,
            },
           topics: [topicSchema]
        }
    ]
},{
    timestamps: true
})

const notesModel = mongoose.model("notes", notesSchema)
module.exports = notesModel