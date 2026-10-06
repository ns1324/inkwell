// Temporary in-memory database placeholder.
// Replace this module with the real Prisma client when persistence is added.

const users = [];
const posts = [];
let nextUserId = 1;
let nextPostId = 1;

export const prisma = {
    user: {
        async findUnique({ where: { email } }) {
            return users.find((user) => user.email === email) ?? null;
        },

        async create({ data }) {
            const user = { id: String(nextUserId++), ...data };
            users.push(user);
            return user;
        },
    },

    post: {
        async create({ data }) {
            const post = { id: String(nextPostId++), ...data };
            posts.push(post);
            return post;
        },
        
        async findMany({ where, orderBy, skip = 0, take }) {
            return posts
                .filter((post) => !where?.status || post.status === where.status)
                .sort((a, b) => new Date(b[Object.keys(orderBy)[0]]) - new Date(a[Object.keys(orderBy)[0]]))
                .slice(skip, skip + take);
        },
    },
};

/*
// server/src/db/client.js
//
// A single, shared Prisma client instance. Per ADR-001 (Lecture 5),
// this is the only file that imports @prisma/client directlyoutside
// the repositories/ layer — repositories import THIS module,not
// @prisma/client, keeping the ORM itself swappable in principle.

import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const { PrismaClient } = pkg;

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const prisma = new PrismaClient({ adapter });
*/