tasks = []

while True:
    print("TO DO LIST")
    print("1. Add task")
    print("2. Remove task")
    print("3. Show tasks")
    print("4. Exit")

    choice = input("Choose (1–4): ")

    if choice == "1":
        task = input("Enter task: ")
        tasks.append(task)
        print("Task added!")

    elif choice == "2":
        if not tasks:
            print("No tasks to remove!")
        else:
            print("Your tasks:")
            i = 1
            for t in tasks:
                print(f"{i}. {t}")
                i += 1

            num = int(input("Enter task number to remove: "))
            if 1 <= num <= len(tasks):
                tasks.pop(num - 1)
                print("Task removed!")
            else:
                print("Invalid task number!")

    elif choice == "3":
        if not tasks:
            print("No tasks yet!")
        else:
            print("Your tasks:")
            i = 1
            for t in tasks:
                print(f"{i}. {t}")
                i += 1


    elif choice == "4":
        print("Goodbye!")
        break

    else:
        print("Invalid option, choose 1–4.")