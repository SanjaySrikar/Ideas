import { vote } from "./vote";

type idea = {
  id  ?: number,
  name : string,
  title: string,
  topic: string,
  idea: string,
  poll_votes ?: number,
  upVotes ?: number,
  downVotes ?: number,
  createdDate ?: Date,
  votes ?:  vote[]
};
export default idea;
