import sys

if len(sys.argv) < 1:
    print("Input file expected", file=sys.stderr)
    sys.exit(1)


with open(sys.argv[1]) as infile:
    not_valid = 0
    valid = 0
    for line in infile:
        line = line.strip()
        policy, _, password = line.partition(':')
        char = policy[-1]
        min_count, _, max_count = policy[:-2].partition('-')
        if password.count(char) >= int(min_count) \
            and password.count(char) <= int(max_count):
                print("\'" + line + "\' is valid")
                valid += 1
        else:
                print("\'" + line + "\' is not valid")
                not_valid += 1

    print(f"There are {valid} valid passwords")