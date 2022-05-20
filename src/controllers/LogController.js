class LogController {
  async parse(req, res) {
    res.status(200).json();
  };
}

export default new LogController();
