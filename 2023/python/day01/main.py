from pathlib import Path
from utils import create_list_from_file

file_path = Path('../../inputs/day01/testInput.txt')
result_list = create_list_from_file(file_path)
print(result_list)