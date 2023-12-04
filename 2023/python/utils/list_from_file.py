def create_list_from_file(file_path):
    result_list = []

    with open(file_path, 'r') as file:
        for line in file:
            # Remove leading and trailing whitespaces, and split by any non-digit character
            elements = line.strip().split(r'\D+')
            
            # Filter out empty strings (resulting from consecutive non-digit characters) and extend the result list
            result_list.extend([element for element in elements if element])

    return result_list