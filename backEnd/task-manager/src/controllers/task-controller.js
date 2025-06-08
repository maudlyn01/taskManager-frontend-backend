import { Task } from "../models/task-model.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ message: "OK", tasks });
    } catch (error) {
        res.status(500).json({ message: "Ocorreu um erro interno no servidor", error });
    }
};

export const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const existingTask = await Task.findById(_id);
        if (!existingTask) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        } else {
            return res.status(200).json({ message: "OK: Tarefa encontrada com sucesso", existingTask });
        }

    } catch (error) {
        res.status(500).json({ message: "Ocorreu um erro interno no servidor", error });
    }
};

export const createTask = async (req, res) => {
    try {
        const body = req.body;
        const { text } = body;

        if (!text) {
            return res.status(400).json({ message: "Título e descrição são obrigatórios." });
        } else {
            const newTask = await Task.create({
                text,
                completed: false,
                createdDate: new Date(),
            });
            return res.status(201).json({ message: "Tarefa criada com sucesso" }, newTask);
        }

    } catch (error) {
        res.status(500).json({ message: "Ocorreu um erro interno no servidor ao criar tarefa, tente novamente", error });

    }


};

export const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const { text, completed } = body;

        const existingTask = await Task.findById(_id);
        if (!existingTask) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        } else {
            const updatedTask = await Task.findById(id).updateOne({
                text,
                completed,
                createdDate: new Date(),

            });
            return res.status(200).json({ message: "Tarefa atualizada com sucesso", updatedTask });
        }

    } catch (error) {
        res.status(500).json({ message: "Ocorreu um erro interno no servidor ao atualizar a tarefa, tente novamente", error });

    }

};

export const deleteTask = async (req, res) => {
    const id = req.params.id;

    try {
        
        const existingTask = await Task.deleteOne({ _id: id });
        if (existingTask.deletedCount === 0) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        } else {
            return res.status(200).json({ message: "Tarefa eliminada com sucesso"});
        }

    } catch (error) {
        res.status(500).json({ message: "Ocorreu um erro interno no servidor ao eliminar a tarefa, tente novamente", error });

    }

};