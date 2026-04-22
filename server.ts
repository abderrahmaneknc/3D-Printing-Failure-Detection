import app from "./app";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
import cors from "cors";

const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: "*", // later you can restrict to your frontend URL
}));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  explorer: true,
  customSiteTitle: "3D Printing API Docs",
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("3D Printing Backend API");
});