parsedVersion=$(echo "${version//./}")
if [[ "$parsedVersion" -lt "300" ]]
then 
    python3 server/py3_server.py
else
    python3 server/py3_server.py
fi