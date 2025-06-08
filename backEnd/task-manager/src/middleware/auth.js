/**
 export function validateTask(req, res, next) {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "Título e descrição são obrigatórios." });
    }
    next();
}
 */