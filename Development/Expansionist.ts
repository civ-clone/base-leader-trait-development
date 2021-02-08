import Development from '../Development';
import Leader from '@civ-clone/core-civilization/Leader';

export class Expansionist extends Development {
  constructor(LeaderType: typeof Leader) {
    super(LeaderType, 1);
  }
}

export default Expansionist;
