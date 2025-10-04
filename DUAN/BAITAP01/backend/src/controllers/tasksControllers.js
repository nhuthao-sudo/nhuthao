import Tasks from "../models/Tasks.js";

export const getAllTasks = async (req, res) => {
    try{
        const tasks = await Tasks.find().sort({createTasks : -1});
        res.status(200).json(tasks);
    } catch (error){
        console.error("loi khi goi getAllTasks", error);
        res.status(500).json({message : "loi he thong" });
    }
}

export const createTasks = async  (req, res) => {
    try {
        const {title} = req.body;
        const tasks = new Tasks({title});

        const newTasks = await tasks.save();
        res.status(201).json(newTasks);    
    } catch (error) {
        console.error("loi khi goi createTasks", error);
        res.status(500).json({message : "loi he thong" });
    }
}

export const updateTasks = async (req, res) => {
    try {
        const {title, status, completedAt} = req.body;
        const updatedTasks = await Tasks.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                completedAt
            }, 
            {
                new : true
            }
        );

            if (!updateTasks){
                return req.status(404).json({message : "nhim vu khong ton tai"});
            }

            res.status(200).json(updateTasks);

    } catch (error) {
        console.error("loi khi goi updateTasks", error);
        res.status(500).json({message : "loi he thong" });
    }
}

export const deleteTasks = async (req, res) => {
    try {
        const deleteTasks = await Tasks.findByIdAndDelete(req.params.id);

        if (!deleteTasks){
            return res.status(404).json({message : "nhiem vu khong ton tai"});
        }

        res.status(200).json(deleteTasks);
    } catch (error) {
        console.error("loi khi goi deleteTasks", error);
        res.status(500).json({message : "loi he thong" });
    }
}