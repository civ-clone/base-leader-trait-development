import Development from '../Development';
import Leader from '@civ-clone/core-civilization/Leader';

export class Normal extends Development {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 0.5);
  }
}

export default Normal;
