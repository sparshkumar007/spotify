// api/hello.js
export default (req,res) => {
    res.status(200).json({ message: 'Hello from the serverless function!' });
};
