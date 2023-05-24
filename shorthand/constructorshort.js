// Longhand
class Person {
  private name: string
  public age: int
  protected hobbies: string[]

  constructor(name: string, age: int, hobbies: string[]) {
    this.name = name
    this.age = age
    this.hobbies = hobbies
  }
}

// Shorthand
class Person {
  constructor(
    private name: string,
    public age: int,
    protected hobbies: string[]
  ) {}
}