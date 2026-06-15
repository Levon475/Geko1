price = int(input("Enter price "))
if price > 10000:
    print(f"You have a 10 percent discount and final price is {price - (price*10/100)}")