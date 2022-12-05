import idea from './idea';
import { topic } from './topic';
import { vote } from './vote';

interface payload {
  id?: number;
  topic: topic;
  ideas: idea[];
  votes : vote[];
}

export default payload;
