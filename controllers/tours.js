// @desc:       Get All Tour
// @route:      /api/v1/tours/
// @access:     Public
exports.getTours = async (req, res, next) => {
  res.status(200).json({ success: true });
};

// @desc:       Get A Tour
// @route:      /api/v1/tours/:id
// @access:     Public
exports.getTour = async (req, res, next) => {
  res.status(200).json({ success: true });
};

// @desc:       Create A Tour
// @route:      /api/v1/tours/
// @access:     Private
exports.createTour = async (req, res, next) => {
  res.status(200).json({ success: true });
};

// @desc:       Update A Tour
// @route:      /api/v1/tours/:id
// @access:     Private
exports.updateTour = async (req, res, next) => {
  res.status(200).json({ success: true });
};

// @desc:       Delete A Tour
// @route:      /api/v1/tours/:id
// @access:     Private
exports.deleteTour = async (req, res, next) => {
  res.status(200).json({ success: true });
};
