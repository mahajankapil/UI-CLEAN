import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock API for User Data
  app.get("/api/user", (req, res) => {
    res.json({
      name: "Arjun Kumar",
      role: "Junior Explorer",
      streak: 12,
      xp: 1250,
      level: 5,
      rank: 4,
      topPercentage: "5%",
      skillsDone: 12,
      certificates: 3,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
    });
  });

  // Mock API for Skills
  app.get("/api/skills", (req, res) => {
    res.json([
      { id: "robotics", name: "Robotics", xp: 450, icon: "Bot", color: "bg-blue-50", iconColor: "text-blue-500" },
      { id: "ai", name: "AI Basics", xp: 320, icon: "Cpu", color: "bg-purple-50", iconColor: "text-purple-500" },
      { id: "carpentry", name: "Carpentry", xp: 210, icon: "Hammer", color: "bg-yellow-50", iconColor: "text-yellow-500" },
      { id: "plumbing", name: "Plumbing", xp: 150, icon: "Droplets", color: "bg-cyan-50", iconColor: "text-cyan-500" },
      { id: "mechanics", name: "Mechanics", xp: 500, icon: "Settings", color: "bg-red-50", iconColor: "text-red-500" },
      { id: "art", name: "Art & Craft", xp: 120, icon: "Palette", color: "bg-pink-50", iconColor: "text-pink-500" },
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
