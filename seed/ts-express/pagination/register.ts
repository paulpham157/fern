/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import { ComplexService } from "./api/resources/complex/service/ComplexService";
import { UsersService } from "./api/resources/users/service/UsersService";

export function register(
    expressApp: express.Express | express.Router,
    services: {
        complex: ComplexService;
        users: UsersService;
    },
): void {
    (expressApp as any).use("", services.complex.toRouter());
    (expressApp as any).use("/users", services.users.toRouter());
}
