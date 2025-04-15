#!/bin/bash


if [ "$#" -ne 1 ]; then
   echo "You must provide a file to convert to JSON."
   echo "USAGE: $0 <cvs_file>"
   exit 1
fi

cvs_file="$1"
json_file="${cvs_file%.csv}.json"

{
  echo "["
  header=$(head -n 1 "$cvs_file")
  IFS=',' read -r -a headers <<< "$header"
  tail -n +2 "$cvs_file" | while IFS="," read -r -a fields; do
      echo "  {"
      for i in "${!headers[@]}"; do
        echo -n "   \"${headers[$i]}\": \"${fields[$i]}\""
        if [ "$i" -lt $((${#headers[@]} - 1)) ]; then
          echo ","
        else
          echo ""
        fi
      done
      echo "  },"
  done
  echo "]"

} > "$json_file"


sed -i '$ s/},/}/' "$json_file"

echo "JSON file complete"

