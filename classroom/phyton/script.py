def print_board(board):
    """Գծում է խաղատախտակը ընթացիկ վիճակով"""
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---|---|---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---|---|---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")

def check_win(board, player):
    """Ստուգում է՝ արդյոք նշված խաղացողը (X կամ O) հաղթել է"""
    # Հաղթական համակցությունների ինդեքսները (տողեր, սյուներ, անկյունագծեր)
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Տողեր
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Սյուներ
        [0, 4, 8], [2, 4, 6]              # Անկյունագծեր
    ]
    for condition in win_conditions:
        if board[condition[0]] == board[condition[1]] == board[condition[2]] == player:
            return True
    return False

def check_draw(board):
    """Ստուգում է՝ արդյոք խաղը ոչ-ոքի է ավարտվել (ազատ տեղ չկա)"""
    return " " not in board

def tic_tac_toe():
    # Խաղատախտակը ներկայացնում ենք 9 դատարկ տեղերով ցուցակի (list) տեսքով
    # Դիրքերը համապատասխանում են 0-ից 8 ինդեքսներին
    board = [" "] * 9
    current_player = "X"
    
    print("Բարի գալուստ Իքս-Նոլիկ խաղ Python-ով:")
    print("Դիրքերը համապատասխանում են 1-ից 9 թվերին (ինչպես հեռախոսի ստեղնաշարը)՝")
    print(" 1 | 2 | 3 \n---|---|---\n 4 | 5 | 6 \n---|---|---\n 7 | 8 | 9 ")

    while True:
        print_board(board)
        
        # Խաղացողից վերցնում ենք քայլը
        try:
            move = int(input(f"Խաղացող {current_player}, ընտրիր դիրքը (1-9): ")) - 1
        except ValueError:
            print("Խնդրում ենք ներմուծել միայն թիվ:")
            continue
            
        # Ստուգում ենք՝ արդյոք ներմուծված թիվը ճիշտ տիրույթում է և վանդակը դատարկ է
        if move < 0 or move > 8 or board[move] != " ":
            print("Սխալ քայլ: Այդ վանդակը կամ զբաղված է, կամ թիվը սխալ է: Փորձիր նորից:")
            continue
            
        # Կատարում ենք քայլը
        board[move] = current_player
        
        # Ստուգում ենք հաղթանակը
        if check_win(board, current_player):
            print_board(board)
            print(f"Շնորհավորում ենք: Խաղացող {current_player}-ը հաղթեց:")
            break
            
        # Ստուգում ենք ոչ-ոքին
        if check_draw(board):
            print_board(board)
            print("Խաղն ավարտվեց ոչ-ոքի:")
            break
            
        # Փոխում ենք խաղացողին (X -> O կամ O -> X)
        current_player = "O" if current_player == "X" else "X"

# Խաղի գործարկում
if __name__ == "__main__":
    tic_tac_toe()