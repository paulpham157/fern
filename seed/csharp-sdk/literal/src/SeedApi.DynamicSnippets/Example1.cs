using global::System.Threading.Tasks;
using SeedLiteral;
using SeedLiteral.Core;

namespace Usage;

public class Example1
{
    public async global::System.Threading.Tasks.Task Do() {
        var client = new SeedLiteralClient(
            clientOptions: new ClientOptions{
                BaseUrl = "https://api.fern.com"
            }
        );

        await client.Headers.SendAsync(
            new SendLiteralsInHeadersRequest{
                Query = "query"
            }
        );
    }

}
