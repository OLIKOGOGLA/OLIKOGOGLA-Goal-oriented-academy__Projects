# ფუნქცია, რომელიც აბრუნებს ორი რიცხვის ჯამს
def add_numbers(num1, num2):
    return num1 + num2

# ფუნქცია, რომელიც აბრუნებს სრულ სახელს
def full_name(first_name, last_name):
    return f"{first_name} {last_name}"

# add_numbers ფუნქციის გამოძახება 2-ჯერ სხვადასხვა მაგალითით
sum_result1 = add_numbers(5, 7)
sum_result2 = add_numbers(10.5, 4.5)

print("--- სტანდარტული ფუნქციების შედეგები ---")
print(f"რიცხვების ჯამი (მაგალითი 1): {sum_result1}")
print(f"რიცხვების ჯამი (მაგალითი 2): {sum_result2}")

# full_name ფუნქციის გამოძახება 2-ჯერ სხვადასხვა მაგალითით
name_result1 = full_name("გიორგი", "ბერიძე")
name_result2 = full_name("ანი", "კაპანაძე")

print(f"სრული სახელი (მაგალითი 1): {name_result1}")
print(f"სრული სახელი (მაგალითი 2): {name_result2}")


# რიცხვების შეკრების ლამბდა ფუნქცია
add_numbers_lambda = lambda num1, num2: num1 + num2

# სრული სახელის ლამბდა ფუნქცია
full_name_lambda = lambda first_name, last_name: f"{first_name} {last_name}"

# ლამბდა ფუნქციების გამოძახება სხვადასხვა მაგალითით
lambda_sum1 = add_numbers_lambda(20, 30)
lambda_sum2 = add_numbers_lambda(1.2, 2.8)

lambda_name1 = full_name_lambda("ნიკოლოზ", "მამულაშვილი")
lambda_name2 = full_name_lambda("ელენე", "გაბუნია")

print("\n--- ლამბდა ფუნქციების შედეგები ---")
print(f"ლამბდა ჯამი (მაგალითი 1): {lambda_sum1}")
print(f"ლამბდა ჯამი (მაგალითი 2): {lambda_sum2}")
print(f"ლამბდა სახელი (მაგალითი 1): {lambda_name1}")
print(f"ლამბდა სახელი (მაგალითი 2): {lambda_name2}")