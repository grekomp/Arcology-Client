export class ArcologyStatus {
  turn: number;
  shouldIRestartExperimentAndCry: string;
  isTerminated: boolean;
  eventScore: number;
  experimentScore: number;
  totalScore: number;
  nehoRunes: string[];
  foodQuantity: number;
  waste: number;
  socialCapital: number;
  production: number;
  foodCapacity: number;
  arcologyIntegrity: number;
  population: number;
  populationCapacity: number;
  events: string[];

  constructor() {
    this.turn = -1;
    this.shouldIRestartExperimentAndCry = '';
    this.isTerminated = false;
    this.eventScore = 0;
    this.experimentScore = 0;
    this.totalScore = 0;
    this.nehoRunes = [];
    this.foodQuantity = 0;
    this.waste = 0;
    this.socialCapital = 0;
    this.production = 0;
    this.foodCapacity = 0;
    this.arcologyIntegrity = 0;
    this.population = 0;
    this.populationCapacity = 0;
    this.events = [];
  }
}
