import passport from "passport";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(401).send({ message: "wrong credentials" });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

        return res.json({ token });
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  })(req, res, next);
};

export const register = async (req, res, next) => {
  passport.authenticate("signup", { session: false }),
    res.status(201).json({
      message: "Signup successful",
      user: req.user,
    });
};
