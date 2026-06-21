
dents = {
    "Արամ": [90, 85, 100],
    "Աննա": [75, 88],
    "Կարեն": []
}

# 1
# usanox = input("Enter Student name for add to list ")
# if usanox in dents:
#     print(f"In group have student in name {usanox}")
# else:
#     dents[usanox] = []
# print(f"{dents}")

# 2
# name = input("Enter a student name for assempt ")
# gnahatakan = int(input("Enter a assessment for student "))
# if name in dents:
#     if gnahatakan >= 0 and gnahatakan <= 100:
#         dents[name].append(gnahatakan)
#     else: 
#         print("Error: Assessment must be between 0 and 100!")
# else:
#     print("Not student in this name")
# print(f"{dents}")

# 3
# for name, marks in dents.items():
#     if len(marks) != 0:
#         mijin = sum(marks) / len(marks)
#         mijin = round(mijin, 1)
#     else:
#         mijin = "N/A"
#     print(f"{name} → {marks} → Միջին: {mijin}")

# 4 & 5
# total_sum = 0
# total_count = 0 
# y = []
# z = []
# best_students = []
# max_mijin = 0
# for name, marks in dents.items():
#     if len(marks) == 0:
#         mijin = "N/A"
#         z.append(name)
#     else:
#         mijin = sum(marks) / len(marks)
#         mijin = round(mijin, 1)
#         if max_mijin < mijin:
#             max_mijin = mijin
#             best_students = [name]
#         elif max_mijin == mijin:
#             best_students.append(name)
#         total_sum += sum(marks)
#         total_count += len(marks)
#         if mijin >= 90:
#             y.append(name)
# print(f"Ընդհանուր ուսանողներ: {len(dents)}")
# print(f"Խմբի միջին գնահատականը: {round(total_sum/total_count,1)}")
# print(f"Գերազանցիկ ուսանողներ՝ {y}") 
# print(f"Ուսանողներ առանց գնահատականի {z}")
# print(f"Լավագույն ուսանող{'ներ' if len(best_students) > 1 else ''} {best_students} միջին գնահատական {max_mijin}")

# 6
# a = input("Enter a name for delet a student ")
# if a in dents:
#     del dents[a]
# else:
#     print("This name student not havea")
# print(f"{dents}")

# 7
# j = input("Enter a student name ")
# if j in dents:
#     i = int(input("Enter a number for remove "))
#     if i in dents[j]:
#         dents[j].remove(i)
#     else:
#         print("Senc gnhatakan chka")
# else:
#     print("Eror")
# print(f"{dents}")

# 8
# sorted_list = []
# for name, marks in dents.items():
#     if len(marks) != 0:
#         mijin = sum(marks) / len(marks)
#         mijin = round(mijin, 1)
#     else: 
#         mijin = 0
#     sorted_list.append((mijin, name))
# verjnakan = sorted(sorted_list, reverse=True)
# for item in verjnakan:
#     tpelu_mijin = "N/A" if item[0] == 0 else item[0]
#     print(f"{item[1]} → Միջին {tpelu_mijin}")

# 9
limit = float(input("Enter a limit for average score: "))
print(f"Students with average < {limit}:")
for name, marks in dents.items():
    if len(marks) != 0:
        mijin = sum(marks) / len(marks)
        mijin = round(mijin, 1)
        if mijin < limit:
            print(f"- {name} → Միջին {mijin}")
    else:
        print(f"- {name} → Միջին N/A")