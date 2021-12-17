import { Player } from "../src/player";
describe("Player class", function () {
  test("Name is set from constructor", function () {
    let bill: Player = new Player("Bill", 25);
    expect(bill.name).toBe("Bill");
  });

  test("Jersey number is set", function () {
    let bill: Player = new Player("Bill", 25);
    expect(bill.jersey).toBe(25);
  });

  test("Years in league", function () {
    let bill: Player = new Player("Bill", 25);
    expect(bill.yearsInLeague).toBe(0);
  });

  test("getName() getter returns a name", function () {
    let bill: Player = new Player("Bill", 25);
    expect(bill.getName()).toBe("Bill");
  });
});
