using System;
using System.Net.Http;
using SeedLiteral.Core;

namespace SeedLiteral;

public partial class RequestOptions : IRequestOptions
{
    /// <summary>
    /// The Base URL for the API.
    /// </summary>
    public string? BaseUrl { get; init; }

    /// <summary>
    /// The http client used to make requests.
    /// </summary>
    public HttpClient? HttpClient { get; init; }

    /// <summary>
    /// The http client used to make requests.
    /// </summary>
    public int? MaxRetries { get; init; }

    /// <summary>
    /// The timeout for the request.
    /// </summary>
    public TimeSpan? Timeout { get; init; }

    public string? Version { get; init; }

    public bool? AuditLogging { get; init; }

    /// <summary>
    /// The http headers sent with the request.
    /// </summary>
    Headers IRequestOptions.Headers { get; init; } = new();
}
