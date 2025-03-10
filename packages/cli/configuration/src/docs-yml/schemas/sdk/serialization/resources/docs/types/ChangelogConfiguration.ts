/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDocsConfig from "../../../../api/index";
import * as core from "../../../../core";
import { ChangelogFolderRelativePath } from "./ChangelogFolderRelativePath";
import { WithPermissions } from "./WithPermissions";
import { WithFeatureFlags } from "./WithFeatureFlags";

export const ChangelogConfiguration: core.serialization.ObjectSchema<
    serializers.ChangelogConfiguration.Raw,
    FernDocsConfig.ChangelogConfiguration
> = core.serialization
    .object({
        changelog: ChangelogFolderRelativePath,
        title: core.serialization.string().optional(),
        slug: core.serialization.string().optional(),
        icon: core.serialization.string().optional(),
        hidden: core.serialization.boolean().optional(),
    })
    .extend(WithPermissions)
    .extend(WithFeatureFlags);

export declare namespace ChangelogConfiguration {
    export interface Raw extends WithPermissions.Raw, WithFeatureFlags.Raw {
        changelog: ChangelogFolderRelativePath.Raw;
        title?: string | null;
        slug?: string | null;
        icon?: string | null;
        hidden?: boolean | null;
    }
}
