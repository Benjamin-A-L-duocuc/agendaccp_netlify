import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '12b95e8be2f0b36758b9a65e569fa1d25d991712', queries,  });
export default client;
  