class BankAccount:
    def __init__(self,owner):
        self.owner = owner
        self.balance = 0
    def deposit(self,amount):
        if amount > 0:
            self.balance += amount
        else:
            print("Սխալ")
    def withdraw(self,amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Բավարար միջոցներ չկան")
    def transfer(self, target_account, amount):
         if self.balance >= amount:      
            self.balance -= amount      
            target_account.deposit(amount) 
            print("Փոխանցումը կատարվեց:")
         else:
            print("Բավարար միջոցներ չկան փոխանցման համար:")
    def show_info(self):
        print(f"{self.owner} \n {self.balance}")

accounts =  {}

while True:
        print("1 — Ստեղծել հաշիվ ")
        print("2 — Մուտքագրել գումար ")
        print("3 — Հանել գումար ")
        print("4 — Փոխանցել գումար ")
        print("5 — Ցույց տալ մեկ հաշիվ ")
        print("6 — Ցույց տալ բոլոր հաշիվները ")
        print("7 — Ջնջել հաշիվ ")
        print("8 — Ցույց տալ ամենահարուստ հաճախորդին ")
        print("9 — Ցույց տալ վիճակագրությունը ")
        print("0 — Ելք ")

        choice = input("Ընտրեք գործողությունը: ")

        if choice == "1":
            name = input("Ներմուծեք անունը: ")
            if name in accounts:
                print("Այսպիսի հաշիվ արդեն գոյություն ունի:")
            else:
                new_account = BankAccount(name)
                accounts[name] = new_account
                print("Հաշիվը հաջողությամբ ստեղծվեց:")
        elif choice == "2":
            name = input("Ո՞ր հաշվի վրա եք ուզում գումար նստեցնել: ")
            if name in accounts:
                amount = float(input("Ներմուծեք գումարի չափը: "))
                accounts[name].deposit(amount)
            else:
                print("Հաշիվը չի գտնվել:")
        elif choice == "3":
            name = input("Ո՞ր հաշվից եք ուզում գումար հանել: ")
            if name in accounts:
                amount = float(input("Ներմուծեք գումարի չափը: "))
                accounts[name].withdraw(amount)
        elif choice == "4":
            name = input("Ո՞ր հաշվին եք ուզում գումար փոխանցել: ")
            name1 = input("Ում հաշվից եք ուզում գումար փոխանցել: ")
            
            if name in accounts and name1 in accounts:
                amount = float(input("Ներմուծեք գումարի չափը: "))
                accounts[name1].transfer(accounts[name], amount)
            else:
                print("Հաշիվներից մեկը կամ երկուսն էլ չեն գտնվել:")
        elif choice == "5":
            name = input("Ո՞ր հաշվի տեղեկությունն եք ուզում տեսնել: ")
            if name in accounts:
                accounts[name].show_info()  
            else:
                print("Հաշիվը չի գտնվել:")
        elif choice == "6":
            if len(accounts) != 0:
                for acc in accounts.values():
                    acc.show_info()
            else:
                print("Չկա ոչ մի հաշիվ:")
        elif choice == "7":
            name = input("Ո՞ր հաշիվն եք ուզում ջնջել: ")
            if name in accounts:
                del accounts[name]  # Սա բառարանից լրիվ ջնջում է այդ key-ն ու իր value-ն
                print(f"{name} անունով հաշիվը հաջողությամբ ջնջվեց:")
            else:
                print("Հաշիվը չի գտնվել:")
        elif choice == "8":
            if len(accounts) == 0:
                print("Բանկում դեռ ոչ մի հաշիվ չկա:")
            else:
                richest_account = None
                for acc in accounts.values():
                    if richest_account is None or acc.balance > richest_account.balance:
                        richest_account = acc
                
                print(f"Ամենահարուստ հաճախորդը {richest_account.owner}-ն է, մնացորդը՝ {richest_account.balance} դրամ:")
        elif choice == "9":
            if len(accounts) == 0:
                print("Բանկում դեռ ոչ մի հաշիվ չկա: Վիճակագրություն չկա:")
            else:
                total_accounts = len(accounts)
                total_balance = 0
                zero_balance_count = 0
                
                for acc in accounts.values():
                    total_balance += acc.balance
                    if acc.balance == 0:
                        zero_balance_count += 1
                
                average_balance = total_balance / total_accounts
                
                print("--- ՎԻՃԱԿԱԳՐՈՒԹՅՈՒՆ ---")
                print(f"Հաշիվների ընդհանուր քանակը՝ {total_accounts}")
                print(f"Բոլոր հաշիվների ընդհանուր գումարը՝ {total_balance} դրամ")
                print(f"Միջին մնացորդը՝ {average_balance} դրամ")
                print(f"Զրոյական մնացորդով հաշիվների քանակը՝ {zero_balance_count}")

        elif choice == "0":
            print("Ծրագիրն ավարտվեց: Ցտեսություն:")
            break