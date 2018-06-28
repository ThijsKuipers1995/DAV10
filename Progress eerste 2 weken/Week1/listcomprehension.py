# 2 dimensionale lijst
table = csvtable
# lijst met landen
countries = [...]
# als land op index 0 staat
newTable = [row for row in table if row[0] in countries]
