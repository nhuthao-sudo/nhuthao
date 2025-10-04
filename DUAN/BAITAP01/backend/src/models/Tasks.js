import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ["active","complete"],
            default: "active",
        },
        completedAt : {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true,

    }
);


const Tasks = mongoose.model("Tasks" , tasksSchema);
export default Tasks;

