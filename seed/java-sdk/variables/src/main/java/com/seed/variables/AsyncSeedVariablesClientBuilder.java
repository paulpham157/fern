/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.variables;

import com.seed.variables.core.ClientOptions;
import com.seed.variables.core.Environment;
import okhttp3.OkHttpClient;

public final class AsyncSeedVariablesClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public AsyncSeedVariablesClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    /**
     * Sets the timeout (in seconds) for the client
     */
    public AsyncSeedVariablesClientBuilder timeout(int timeout) {
        this.clientOptionsBuilder.timeout(timeout);
        return this;
    }

    /**
     * Sets the underlying OkHttp client
     */
    public AsyncSeedVariablesClientBuilder httpClient(OkHttpClient httpClient) {
        this.clientOptionsBuilder.httpClient(httpClient);
        return this;
    }

    public AsyncSeedVariablesClientBuilder rootVariable(String rootVariable) {
        clientOptionsBuilder.rootVariable(rootVariable);
        return this;
    }

    public AsyncSeedVariablesClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new AsyncSeedVariablesClient(clientOptionsBuilder.build());
    }
}
