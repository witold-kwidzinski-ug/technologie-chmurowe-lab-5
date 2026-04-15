const app = require("../server")
const request = require("supertest")
const DB = require("../db")

jest.mock("../db")

test("health", async () => {
    const res = await request(app).get("/health")

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe("ok")
})


test("stats", async () => {
    DB.query.mockResolvedValue({rows: [{count: "3"}]})
    const res = await request(app).get("/stats")

    expect(res.statusCode).toBe(200)
    expect(res.body.size).toBe("3")
    expect(res.body.id).toBeDefined()
    expect(res.body.uptime).toBeGreaterThanOrEqual(0)
    expect(res.body.reqCount).toBeGreaterThanOrEqual(0)
})