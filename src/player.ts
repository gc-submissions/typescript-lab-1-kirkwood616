export class Player {
  name: string;
  jersey: number;
  yearsInLeague: number = 0; // DEFAULT STARTING VALUE
  constructor(name: string, jersey: number) {
    this.name = name;
    this.jersey = jersey;
  }

  // METHOD: GETTER
  getName(): string {
    return this.name;
  }

  getJersey(): number {
    return this.jersey;
  }

  getYearsInLeague(): number {
    return this.yearsInLeague;
  }

  //METHOD: SETTER
  setJersey(newJerseyNumber: number): void {
    this.jersey = newJerseyNumber;
  }

  //OTHER METHODS (SETTER)
  playerAnniversary(): void {
    this.yearsInLeague++;
  }
}

let mark: Player = new Player("Mark", 13);

console.log(mark.name);
console.log(mark.yearsInLeague);
console.log(mark);
console.log(mark.getName());
mark.setJersey(23);
console.log(mark.jersey);
mark.playerAnniversary();
console.log("Years in league: " + mark.getYearsInLeague());
