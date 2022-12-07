import idea from './idea';
import { topic } from './topic';
import { user } from './user';
import { vote } from './vote';

interface payload {
  id ?: number;
  topic: topic;
  ideas: idea[];
  votes : vote[];
  users : user[]
}

export default payload;
