const request = require("supertest");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const { User } = require("../../src/app/models");
describe("Authentication", () => {
  beforeEach(() => {});
  it("should be able to authentication with valid credentials", async () => {
    const user = await User.create({
      name: "Raphael",
      email: "raphaelstn@gmail.com",
      password_hash: "123123"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });
    expect(response.status).toBe(200);
  });
});
