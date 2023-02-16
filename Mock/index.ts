import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");

  context.res = {
    // status: 200, /* Defaults to 200 */
    headers: {
      "Content-Type": "application/json",
    },
    body: { body: req.body, query: req.query },
  };
};

export default httpTrigger;
