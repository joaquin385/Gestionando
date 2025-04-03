// For now, this is a placeholder middleware that just passes through
// We'll implement proper authentication later
const auth = (req, res, next) => {
  // Temporarily set a mock user ID for testing
  req.user = { id: 'mock-user-id' };
  next();
};

module.exports = auth; 