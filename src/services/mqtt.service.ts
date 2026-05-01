import mqtt from "mqtt";

const client = mqtt.connect("01a3dc71e3914221bd2cc95dd7ace351.s1.eu.hivemq.cloud", {
  username: "hivemq.webclient.1777561096204",
  password: "5F1dfZ<X3ks9nBr&CD,%",
  port: 8883,
});

client.on("connect", () => {
  console.log("✅ MQTT connected");
});

export const publishToPrinter = (printerId: string, message: any) => {
  client.publish(
    `printers/${printerId}/command`,
    JSON.stringify(message)
  );
};