import { Behaviour } from "./index";

export abstract class Entity {
  public abstract behaviour: Behaviour;
  public abstract chain: number;
  public abstract health: number;
  public x: number = 0;
  public y: number = 0;
  public z: number = 0;
}