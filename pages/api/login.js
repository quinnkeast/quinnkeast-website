import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";

async function loginRoute(req, res) {
  const { password } = await req.body;

  try {
    if (password === process.env.PASSWORD) {
      const user = { isLoggedIn: true };
      req.session.user = user;
      await req.session.save();
      res.json(user);
    } else {
      const user = { isLoggedIn: false };
      res.status(403).json();
    }
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(500).json({ message: error.message });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
