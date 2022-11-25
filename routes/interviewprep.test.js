import app from "../app.js";
import request from "supertest";

describe("Get /interviewprep", function () {
  it("Get all interview", async function () {
    const response = await request(app).get("/interviewprep");
    console.log(response.body.payload);
  });
  it("Get status code", async function () {
    const response = await request(app).get("/interviewprep");
    expect(response.statusCode).toBe(200);
  });
  it("Get body`s has payload", async function () {
    const response = await request(app).get("/interviewprep");
    expect(response.body).toHaveProperty("payload");
  });
  it("Get body`s structure", async function () {
    const response = await request(app).get("/interviewprep");
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
  });
    
});
