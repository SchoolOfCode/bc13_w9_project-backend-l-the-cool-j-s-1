import app from "../app.js";
import request from "supertest";

describe("Get /quizquestions", function () {
  it("Get all quizquestions", async function () {
    const response = await request(app).get("/quizquestions");
    console.log(response);
  });
  it("Get status code", async function () {
    const response = await request(app).get("/quizquestions");
    expect(response.statusCode).toBe(200);
  });
  it("Get body`s has payload", async function () {
    const response = await request(app).get("/quizquestions");
    expect(response.body).toHaveProperty("payload");
  });
  it("Get body`s structure", async function () {
    const response = await request(app).get("/quizquestions");
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
  });
});
