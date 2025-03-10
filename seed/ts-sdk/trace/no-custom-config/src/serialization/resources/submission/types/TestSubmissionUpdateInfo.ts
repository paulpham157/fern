/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { RunningSubmissionState } from "./RunningSubmissionState";
import { ErrorInfo } from "./ErrorInfo";
import { GradedTestCaseUpdate } from "./GradedTestCaseUpdate";
import { RecordedTestCaseUpdate } from "./RecordedTestCaseUpdate";

export const TestSubmissionUpdateInfo: core.serialization.Schema<
    serializers.TestSubmissionUpdateInfo.Raw,
    SeedTrace.TestSubmissionUpdateInfo
> = core.serialization
    .union("type", {
        running: core.serialization.object({
            value: RunningSubmissionState,
        }),
        stopped: core.serialization.object({}),
        errored: core.serialization.object({
            value: ErrorInfo,
        }),
        gradedTestCase: GradedTestCaseUpdate,
        recordedTestCase: RecordedTestCaseUpdate,
        finished: core.serialization.object({}),
    })
    .transform<SeedTrace.TestSubmissionUpdateInfo>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TestSubmissionUpdateInfo {
    export type Raw =
        | TestSubmissionUpdateInfo.Running
        | TestSubmissionUpdateInfo.Stopped
        | TestSubmissionUpdateInfo.Errored
        | TestSubmissionUpdateInfo.GradedTestCase
        | TestSubmissionUpdateInfo.RecordedTestCase
        | TestSubmissionUpdateInfo.Finished;

    export interface Running {
        type: "running";
        value: RunningSubmissionState.Raw;
    }

    export interface Stopped {
        type: "stopped";
    }

    export interface Errored {
        type: "errored";
        value: ErrorInfo.Raw;
    }

    export interface GradedTestCase extends GradedTestCaseUpdate.Raw {
        type: "gradedTestCase";
    }

    export interface RecordedTestCase extends RecordedTestCaseUpdate.Raw {
        type: "recordedTestCase";
    }

    export interface Finished {
        type: "finished";
    }
}
