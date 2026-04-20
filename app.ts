import express from "express";
import cors from "cors";
import printerRoutes from "./src/routes/printer.routes";
import printJobRoutes from "./src/routes/printJob.routes";
import partRoutes from "./src/routes/part.routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/printers", printerRoutes);
app.use("/api/print-jobs", printJobRoutes);
app.use("/api/parts", partRoutes);
export default app;