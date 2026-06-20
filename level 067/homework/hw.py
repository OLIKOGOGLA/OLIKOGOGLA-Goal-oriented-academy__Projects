students = {
    "Alex": 90,
    "Mary": 95,
    "John": 85
}

top_student = max(students, key=students.get)
print("Top student:", top_student, students[top_student]) 


rooms = {
    101: ["Alex", "Mary"],
    102: [],
    103: ["John"]
}

print("\nOccupied rooms:")
for room, people in rooms.items():
    if people:
        print(f"Room {room}: {', '.join(people)}")

car = {
    "brand": "Toyota",
    "model": "Corolla"
}

print("\nBefore change:", car)
car["model"] = "Camry"
print("After change:", car)
