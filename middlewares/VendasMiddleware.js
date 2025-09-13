const VendasMiddleware = (req, res, next) => {
  console.log("✅ Middleware executado!");
  next();
};

export default VendasMiddleware;