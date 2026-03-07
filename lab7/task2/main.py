from models import Animal, Dog, Cat
def main() -> None:
    animals = [Animal("Mistery", 2, "gray"), Dog("Rocky", 8, "orange-white", "Moscow watchdog"), Cat("Lili", 8, "white-gray", indoor = True)]
    for a in animals:
        print(a)
        print(a.info())
        print("speak: ", a.speak())
        a.celebrate_birthday()
        print("after birthday: ", a.info())
        print("-"* 30)
        for a in animals:
            if isinstance(a, Dog):
                print(a.fetch("ball"))
            elif isinstance(a, Cat):
                print(a.hunt())

if __name__ == "__main__":
    main()