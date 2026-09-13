import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module.ts";

const app = await NestFactory.create(AppModule, new FastifyAdapter());
await app.listen(Number(process.env.PORT ?? "8080"), "0.0.0.0");
