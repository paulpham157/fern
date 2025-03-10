/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";

export const ColorfulCover: core.serialization.ObjectSchema<serializers.ColorfulCover.Raw, SeedUnions.ColorfulCover> =
    core.serialization.object({
        value: core.serialization.string(),
    });

export declare namespace ColorfulCover {
    export interface Raw {
        value: string;
    }
}
