import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as ST from "../ST/st";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const name = req.query.name || (req.body && req.body.name) || "friend";
  var result = ST.select(req.body.data).transformWith(req.body.template).root();
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: result,
  };
};

export default httpTrigger;
