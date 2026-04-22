import app from "./app";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
const PORT = process.env.PORT || 3000;


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