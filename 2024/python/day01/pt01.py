def calculate_total_distance(left_list, right_list):
    # Sort both lists in ascending order
    sorted_left = sorted(left_list)
    sorted_right = sorted(right_list)

    # Calculate the total distance by summing the absolute differences
    total_distance = sum(abs(a - b) for a, b in zip(sorted_left, sorted_right))
    return total_distance

def read_input_from_file(file_path):
    # Read the file and split lines
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Separate the numbers into two lists
    left_list = []
    right_list = []
    for line in lines:
        left, right = map(int, line.split())
        left_list.append(left)
        right_list.append(right)
    
    return left_list, right_list

def main():
    # file_path = '../../inputs/day01/testInput.txt'
    file_path = '../../inputs/day01/input.txt'
    left_list, right_list = read_input_from_file(file_path)
    total_distance = calculate_total_distance(left_list, right_list)
    print("Total Distance:", total_distance)

if __name__ == "__main__":
    main()
