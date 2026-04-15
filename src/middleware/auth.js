export function auth(req, res, next) {

  const userHeader = req.headers["user"];

  if (!userHeader) {
    return res.status(401).json({ error: "Login required" });
  }

  try {
    req.user = JSON.parse(userHeader);
  } catch {
    return res.status(400).json({ error: "Invalid user" });
  }

  next();
}