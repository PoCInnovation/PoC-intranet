const isBodyValid = (schema: any, location: string = 'body') => async (req: any, res: any, next: any) => {
    schema.validateAsync(req[location])
        .then(() => next())
        .catch((err: Error) => {
            console.error("Error: " + err.message);
            res.status(400);
            return res.send("Invalid request").end();
        });
};

export { isBodyValid };