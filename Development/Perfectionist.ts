import Development from '../Development';
import Leader from '@civ-clone/core-civilization/Leader';

export class Perfectionist extends Development {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 0);
  }
}

export default Perfectionist;
