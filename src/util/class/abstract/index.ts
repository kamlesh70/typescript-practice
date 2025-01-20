abstract class Department {
  abstract holidays: string[];
  protected constructor(public name: string) {}

  public addHolidays(holidays: string[]): void {
    if (Array.isArray(holidays)) {
      this.holidays = [...this.holidays, ...holidays];
    }
  }
}

class SalesDepartment extends Department {
  holidays: string[] = ["test"];

  private _testGetSet: string = "";

  constructor() {
    super("Sales Department");
  }

  public get testGetSet(): string {
    return this._testGetSet;
  }

  public set testGetSet(value: string) {
    this._testGetSet = value;
  }
}

const salesDepartment = new SalesDepartment();
salesDepartment.addHolidays(["Sales day off", "Diwali"]);
salesDepartment.testGetSet = "testing";
console.log(salesDepartment.testGetSet);
