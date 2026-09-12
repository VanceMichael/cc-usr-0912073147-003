import Fastify from "fastify";

const app = Fastify({ logger: true });
app.get("/health", async () => ({ status: "ok" }));
app.post<{ Body: { residentId?: string; value?: number } }>("/measurements", async (request, reply) => {
  if (!request.body?.residentId || typeof request.body.value !== "number") {
    return reply.code(400).send({ error: "residentId 和 value 为必填项" });
  }
  return reply.code(202).send({ status: "recorded" });
});

app.listen({ port: Number(process.env.PORT ?? 8080), host: "0.0.0.0" }).catch((error) => {
  app.log.error(error);
  process.exit(1);
});

