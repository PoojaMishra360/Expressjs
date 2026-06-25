function routeMiddleware(req, res, next) {
  console.log(`[routeMiddleware] ${req.method} ${req.url}`);
  res.setHeader('X-Route-Middleware', 'true');

  if (Number(req.query.age) < 18) {
    res.status(403).send('You are not allowed to access this page.');
    return;
  }

  next();
}

export default routeMiddleware;
