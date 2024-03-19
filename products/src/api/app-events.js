module.exports = (app) => {
  app.use("/app-events", async (req, res, next) => {
    const { payload } = req.body;

    res.json(payload);
  });
};
