import assert from "node:assert/strict";
import test from "node:test";
import { AppController } from "../src/app.controller.ts";

test("健康控制器返回就绪状态", () => {
  assert.deepEqual(new AppController().health(), { status: "ok" });
});
