import express from "express";
import cors from "cors";
import printerRoutes from "./src/routes/printer.routes";
import printJobRoutes from "./src/routes/printJob.routes";
import partRoutes from "./src/routes/part.routes";
import tagRoutes from "./src/routes/tag.routes";
import gCodeCmdRoutes from "./src/routes/gCodeCmd.routes";  
import commandLogRouter from "./src/routes/cmdLogs.routes";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/printers", printerRoutes);
app.use("/api/print-jobs", printJobRoutes);
app.use("/api/parts", partRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/gcode-commands", gCodeCmdRoutes);
app.use("/api/command-logs", commandLogRouter);
export default app;