import { Behaviour, Entity } from "../../";

export abstract class Friendly extends Entity {
  public behaviour: Behaviour.positive = Behaviour.positive;
  public chain: 0 = 0;
}