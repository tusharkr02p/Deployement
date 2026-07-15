const getAllowedOrigins = () =>
  (process.env.CLIENT_URL || "")
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean);

export const corsOptions = {
  origin(origin, callback) {
    // Requests without an Origin header (health checks, curl) are safe to allow.
    if (!origin || getAllowedOrigins().includes(origin.replace(/\/$/, ""))) {
      return callback(null, true);
    }

    return callback(new Error("Origin is not allowed by CORS"));
  },
  credentials: true,
};
