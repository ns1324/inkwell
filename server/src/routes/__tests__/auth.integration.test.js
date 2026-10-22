// server/src/routes/__tests__/auth.integration.test.js

import request from "supertest";
import { app } from "../../app.js";
import { prisma } from "../../db/client.js";
import { resetDatabase } from "../../test-utils/fixtures.js";

beforeEach(async () => {
    await resetDatabase();
});

afterAll(async () => {
    await prisma.$disconnect();
});

test("full flow: register a user and then log in with the same credentials", async () => {
    // Arrange
    const credentials = {
        email: "integration-test@example.com",
        displayName: "Integration Test User",
        password: "correcthorse",
    };

    // Act: register
    const registerRes = await request(app)
        .post("/api/auth/register")
        .send(credentials);

    // Assert: registration succeeded
    expect(registerRes.status).toBe(201);
    expect(registerRes.body.user).toBeDefined();
    expect(registerRes.body.accessToken).toBeDefined();

    // Act: log in with the same credentials
    const loginRes = await request(app)
        .post("/api/auth/login")
        .send({
            email: credentials.email,
            password: credentials.password,
        });

    // Assert: login succeeded
    expect(loginRes.status).toBe(200);
    expect(loginRes.body.user.email).toBe(credentials.email);
    expect(loginRes.body.accessToken).toBeDefined();
});