const jwt = require('jsonwebtoken');
const Station = require('../../models/Station');

// GET
exports.getAllStation = async (req, res) => {
  const authHeader = req.headers.token;
  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;
  try {
    const stations = await Station.find({ userId: userId });
    res.status(200).json(stations);
  } catch (error) {
    res.status(500).json('Something went wrong!');
  }
};

// GET
exports.getStationById = async (req, res) => {
  const authHeader = req.headers.token;
  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;
  try {
    const station = await Station.findOne({ _id: req.params.id });
    if (station.userId === userId) {
      res.status(200).json(station);
    } else {
      res.status(403).json('You are not allowed!');
    }
  } catch (error) {
    res.status(500).json('Something went wrong!');
  }
};

// CREATE
exports.createStation = async (req, res) => {
  const authHeader = req.headers.token;
  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;
  const newStation = new Station({ userId, ...req.body });
  try {
    const savedStation = await newStation.save();
    res.status(200).json(savedStation);
  } catch (error) {
    res.status(500).json('Something went wrong!');
  }
};

// UPDATE
exports.updateStation = async (req, res) => {
  const authHeader = req.headers.token;
  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;
  try {
    const station = await Station.findOne({ _id: req.params.id });
    if (station.userId === userId) {
      const updateStation = await Station.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateStation);
    } else {
      res.status(403).json('You are not allowed!');
    }
  } catch (error) {
    res.status(500).json('Something went wrong!');
  }
};

// DELETE
exports.deleteStation = async (req, res) => {
  const authHeader = req.headers.token;
  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.id;
  try {
    const station = await Station.findOne({ _id: req.params.id });
    if (station.userId === userId) {
      await Station.findByIdAndDelete(req.params.id);
      res.status(200).json('Station Deleted Successfully!');
    } else {
      res.status(403).json('You are not allowed!');
    }
  } catch (error) {
    res.status(500).json('Something went wrong!');
  }
};
