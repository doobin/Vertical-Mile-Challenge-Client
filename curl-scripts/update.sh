curl "http://localhost:4741/logs/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "log": {
      "date": "'"${DATE}"'",
      "feet": "'"${FEET}"'",
      "activity": "'"${ACTIVITY}"'"
    }
  }'

echo
