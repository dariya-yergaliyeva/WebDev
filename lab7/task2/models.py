class Animal:
    def __init__(self, name: str, age: int, color: str):
        self.name = name
        self.age = age
        self.color = color

    def speak(self) -> str:
        return "..."
    def info(self) -> str:
        return f"{self.name} is {self.age} years old and {self.color}."
    def celebrate_birthday(self) -> None:
        self.age += 1
    def __str__(self) -> str:
        return f"{self.__class__.__name__}(name={self.name}, age={self.age}, color={self.color})"
    
class Dog(Animal):
    def __init__(self, name: str, age: int, color: str, breed: str):
        super().__init__(name, age, color)
        self.breed = breed
    def speak(self) -> str:
        return "gaf"
    def fetch(self, item: str) -> str:
        return f"{self.name} fetched the {item}!"
    def __str__(self) -> str:
        return f"{super().__str__()}, breed={self.breed}"
    
class Cat(Animal):
    def __init__(self, name: str, age: int, color: str, indoor: bool):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self) -> str:
        return "meow"
    def hunt(self) -> str:
        return f"{self.name} is hunting"
    def __str__(self) -> str:
        place = "indoor" if self.indoor else "outdoor"
        return f"{super().__str__()}, lifestyle={place}"