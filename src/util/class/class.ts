interface Company {
  companyName: string;
}

type companyType = {
  [key in string]: number;
};

export class Employee implements Company {
  companyName: string;

  constructor(companyName: string) {
    this.companyName = companyName;
  }

  static getAverage(employees: Employee[]): companyType {
    const company: companyType = {};
    const totalCompanies = employees.length;
    employees.forEach((employee: Employee) => {
      if (company[employee.companyName]) {
        company[employee.companyName] = company[employee.companyName] + 1;
        company["avg"] = company[employee.companyName] / totalCompanies;
      } else {
        company[employee.companyName] = 1;
        company["avg"] = company[employee.companyName] / totalCompanies;
      }
    });

    return company;
  }
}

const employees: Employee[] = [
  new Employee("Google"),
  new Employee("Facebook"),
  new Employee("Google"),
];

const data = Employee.getAverage(employees);
console.log(data);

class Test extends Employee {}

const test = new Test("companyName");
console.log(test.companyName);
