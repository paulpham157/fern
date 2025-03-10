/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EnvironmentVariable } from "./EnvironmentVariable";
import { MavenCentralSignatureGithubInfo } from "./MavenCentralSignatureGithubInfo";

export const MavenGithubPublishInfo: core.serialization.ObjectSchema<
    serializers.generatorExec.MavenGithubPublishInfo.Raw,
    FernIr.generatorExec.MavenGithubPublishInfo
> = core.serialization.objectWithoutOptionalProperties({
    registryUrl: core.serialization.string(),
    coordinate: core.serialization.string(),
    usernameEnvironmentVariable: EnvironmentVariable,
    passwordEnvironmentVariable: EnvironmentVariable,
    signature: MavenCentralSignatureGithubInfo.optional(),
    shouldGeneratePublishWorkflow: core.serialization.boolean().optional(),
});

export declare namespace MavenGithubPublishInfo {
    export interface Raw {
        registryUrl: string;
        coordinate: string;
        usernameEnvironmentVariable: EnvironmentVariable.Raw;
        passwordEnvironmentVariable: EnvironmentVariable.Raw;
        signature?: MavenCentralSignatureGithubInfo.Raw | null;
        shouldGeneratePublishWorkflow?: boolean | null;
    }
}
