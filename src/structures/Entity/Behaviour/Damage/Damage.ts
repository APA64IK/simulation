import { Entity, Behaviour } from "../../../";

export type TBehaviourDamage = Behaviour.aggressive | Behaviour.neutral;

export abstract class Damage extends Entity {
  public behaviour: TBehaviourDamage = Behaviour.aggressive;
  public abstract damage: number;
}