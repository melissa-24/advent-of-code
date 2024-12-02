def calculate_similarity_score(left_list, right_list):
    # Create a frequency dictionary for the right list
    frequency_map = {}
    for num in right_list:
        frequency_map[num] = frequency_map.get(num, 0) + 1

    # Calculate the similarity score
    similarity_score = 0
    for num in left_list:
        if num in frequency_map:
            similarity_score += num * frequency_map[num]

    return similarity_score


def read_input_file(file_path):
    left_list = []
    right_list = []

    # Read and parse the file
    with open(file_path, 'r') as file:
        for line in file:
            left, right = map(int, line.split())
            left_list.append(left)
            right_list.append(right)

    return left_list, right_list


def main():
    # file_path = '../../inputs/day01/testInput.txt'
    file_path = '../../inputs/day01/input.txt'
    left_list, right_list = read_input_file(file_path)
    similarity_score = calculate_similarity_score(left_list, right_list)
    print('Similarity Score:', similarity_score)


if __name__ == '__main__':
    main()
