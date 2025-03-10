/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedFileUpload from "../../../../api/index";
import * as core from "../../../../core";

export const Id: core.serialization.Schema<serializers.Id.Raw, SeedFileUpload.Id> = core.serialization.string();

export declare namespace Id {
    export type Raw = string;
}
