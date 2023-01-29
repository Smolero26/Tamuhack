import requests
response = requests.get("https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))")
print(response.status_code)
print(response.json())