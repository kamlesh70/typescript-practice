interface User {
  name: string;
  age: number;
  email?: string;
}

/*
 * 1. Interface don't have any access modifiers also class implementing interface must make interface members as public it can not be private or protected because only we need interface members in the object.
 */

class Admin implements User {
  constructor(public name: string, public age: number) {}
}
