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
        police = policy.strip()
        password = password.strip()
        char = policy[-1]
        pos1, _, pos2 = policy[:-2].partition('-')
        if (password[int(pos1)-1] == char) \
                != (password[int(pos2)-1] == char):
                print("\'" + line + "\' is valid")
                valid += 1
        else:
                print("\'" + line + "\' is not valid")
                not_valid += 1

    print(f"There are {valid} valid passwords valid")