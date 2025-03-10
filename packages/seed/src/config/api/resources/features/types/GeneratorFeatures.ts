/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernSeedConfig from "../../../index";

/**
 * Based on the features outlined within https://www.notion.so/buildwithfern/Generator-Features-2cc7e6c87fc54738843940d35af5c6a4?pvs=4
 */
export interface GeneratorFeatures {
    /**
     * Every endpoint should have an optional final parameter where the user can configure request level options.
     * Those should include: authentication, headers, query, and body parameter overrides and inclusions, as well
     * as reties and timeouts.
     */
    requestOptions: FernSeedConfig.FeatureImplementation;
    /**
     * Certain endpoints should have the ability to include an idempotency keys in the headers, to allow for safe retries.
     * In implementation, details can be found in the `idempotencyHeaders` field of the `IntermediateRepresentation`.
     */
    idempotency: FernSeedConfig.FeatureImplementation;
    /** SDK clients return an iterator that handles the pagination for the consumer. */
    autoPagination: FernSeedConfig.FeatureImplementation;
    /** The SDK should wrap the OAuth2 flow, and provide a way to automatically retrieve, refresh, and use the token. */
    oauth: FernSeedConfig.FeatureImplementation;
    /**
     * The SDK should allow for the defaulting of authentication headers from environment variables. Each authentication scheme
     * has a corresponding envvar property within it's Fern definition (`tokenEnvVar` in the BearerAuthScheme definition, for example).
     */
    authEnvVarScanning: FernSeedConfig.FeatureImplementation;
    /**
     * Currently we parse AsyncAPI specs to allow for configuration of event driven communication (like websockets). SDKs must
     * consume these definitions and support these protocols.
     */
    websocket: FernSeedConfig.FeatureImplementation;
    /**
     * Primarily used for chat completion.
     * Support streaming json responses, and provide a way to consume them. This
     */
    streamingJson: FernSeedConfig.FeatureImplementation;
    /** Support uploading files via multipart/form-data. */
    fileUpload: FernSeedConfig.FeatureImplementation;
    /** Support downloading files. */
    fileDownload: FernSeedConfig.FeatureImplementation;
    /** Generated code snippets for each endpoint are written to a snippets.json file. */
    snippets: FernSeedConfig.FeatureImplementation;
    /** Generated tests leveraging snippets, that can be run/tested via `fern test`. */
    snippetTests: FernSeedConfig.FeatureImplementation;
    /**
     * The SDK should support the creation of custom exceptions and handling them within the SDK. For example, we should be: creating a top level error
     * following the pattern OrganizationError which includes a status code and body, which should be thrown for API errors (e.g. do not throw the generic
     * error from the request client), we should additionally create basic error types out of the box for common issues: JSON parsing and timeout errors.
     */
    errors: FernSeedConfig.FeatureImplementation;
    /**
     * The SDK should support forward compatible enums, meaning the SDK should pass through "unknown" enum values as strings.
     * This means that if the API adds a new enum value, the SDK handles it without need for upgrade.
     */
    forwardCompatibleEnums: FernSeedConfig.FeatureImplementation;
    /**
     * The SDK should provide a way to access additional properties on the response object.
     * This is useful for when the API adds new fields to the response object and the user wants to grab them without upgrading the SDK.
     */
    additionalProperties: FernSeedConfig.FeatureImplementation;
    /**
     * The SDK should generate an API reference markdown file (reference.md at the root level) that shows all the endpoints, their documentation,
     *  their parameters, and their responses.
     */
    apiReferenceGeneration: FernSeedConfig.FeatureImplementation;
    /**
     * Whether the generator supports reading the whitelabel configuration.
     * If true, the generator will not mention `fern` in the header of the
     * generated code.
     *
     * Instead of `This file was auto-generated by Fern from our API Definition`,
     * the header will read `This file was auto-generated from our API Definition`.
     */
    whitelabel: FernSeedConfig.FeatureImplementation;
    /**
     * The SDK should support taking in a request and polling endpoint pair, alongside polling
     * options (polling interval and max attempts) to wrap the endpoint pair and return the final
     * response type of the polling endpoint.
     *
     * This is for convenience to obfuscate the need for two distinct endpoints.
     * This should support sync and async implementations where available.
     */
    polling: FernSeedConfig.FeatureImplementation;
}
