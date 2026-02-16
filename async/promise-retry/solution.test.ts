import { assertEquals, assertRejects } from "@std/assert";
import { promiseRetry } from "./solution.ts";

Deno.test("promiseRetry - basic cases", async () => {
  // Success on first attempt
  const successFn = () => Promise.resolve("success");
  assertEquals(await promiseRetry(successFn, 3), "success");

  // Success with return value
  const valueFn = () => Promise.resolve(42);
  assertEquals(await promiseRetry(valueFn, 2), 42);
});

Deno.test("promiseRetry - retry cases", async () => {
  // Success on second attempt
  let attempt1 = 0;
  const retryOnceFn = () => {
    attempt1++;
    return attempt1 === 1 ? Promise.reject("fail") : Promise.resolve("success");
  };
  assertEquals(await promiseRetry(retryOnceFn, 3), "success");

  // Success on last attempt
  let attempt2 = 0;
  const retryTwiceFn = () => {
    attempt2++;
    return attempt2 < 3 ? Promise.reject("fail") : Promise.resolve("done");
  };
  assertEquals(await promiseRetry(retryTwiceFn, 2), "done");
});

Deno.test("promiseRetry - edge cases", async () => {
  // Zero retries, immediate success
  const immediateFn = () => Promise.resolve("ok");
  assertEquals(await promiseRetry(immediateFn, 0), "ok");

  // Single retry
  let singleAttempt = 0;
  const singleRetryFn = () => {
    singleAttempt++;
    return singleAttempt === 1 ? Promise.reject("fail") : Promise.resolve("ok");
  };
  assertEquals(await promiseRetry(singleRetryFn, 1), "ok");
});

Deno.test("promiseRetry - error cases", async () => {
  // All attempts fail
  const failFn = () => Promise.reject("error");
  await assertRejects(
    () => promiseRetry(failFn, 2),
    Error,
    "error"
  );

  // Zero retries with failure
  const zeroRetryFail = () => Promise.reject("immediate fail");
  await assertRejects(
    () => promiseRetry(zeroRetryFail, 0),
    Error,
    "immediate fail"
  );

  // Custom error object
  const customErrorFn = () => Promise.reject(new Error("custom error"));
  await assertRejects(
    () => promiseRetry(customErrorFn, 1),
    Error,
    "custom error"
  );
});
