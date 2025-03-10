/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";

export abstract class SeedPaginationError extends Error {
    constructor(public readonly errorName?: string) {
        super();
        Object.setPrototypeOf(this, SeedPaginationError.prototype);
    }

    public abstract send(res: express.Response): Promise<void>;
}
