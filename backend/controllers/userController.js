exports.hello = (req, res) => {
    res.json({
        status: true,
        message: 'Hello from the Blockfuselabs!'
    });
};
