# Intrandom.com - Random Number Generator API

At intrandom.com, we prioritize fairness and transparency in generating random numbers. We employ a provably fair approach by utilizing a seed that allows users to verify the randomness and ensure impartiality of the generated numbers.

## Usage

### Generating a Random Number

To generate a random number, make a GET request to the API with the specified minimum, maximum, and seed if possible.

```bash
curl -X GET \
-H "Content-Type: application/json" \
-H "x-api-key: {YOUR_API_KEY}" \
https://api.intrandom.com/generate/{MY_SEED}
```

#### Link Queries:

| Query  |  Type  | Default | Required |
| :----: | :----: | :-----: | :------: |
| `from` | Number |    0    |  false   |
|  `to`  | Number |   100   |  false   |

### Validate a Random Number

To validate your random number, make a GET request to the API with the specified minimum, maximum, and Random Key.

```bash
curl -X GET \
-H "Content-Type: application/json" \
-H "x-api-key: {YOUR_API_KEY}" \
https://api.intrandom.com/generate/validate/{MY_SEED}
```

#### Link Queries:

| Query  |  Type  | Default | Required |
| :----: | :----: | :-----: | :------: |
| `from` | Number |    0    |  false   |
|  `to`  | Number |   100   |  false   |
| `key`  | String |   --    |   true   |

### Generakeyng an API Key

To generate an API key, make a POST request to the API with the specified email and password.

```bash
curl -X POST \
-H "Content-Type: application/json" \
-d '{"username":"{YOUR_USERNAME}", "email": "{YOUR_EMAIL}", "password": "{YOUR_PASSWORD}"}' \
https://api.intrandom.com/auth/register
```

If you lost your API Key you can just make a POST request to the API with the specified email/username and password.

```bash
curl -X POST \
-H "Content-Type: application/json" \
-d '{"auther": "{YOUR_EMAIL/YOUR_USERNAME}", "password": "{YOUR_PASSWORD}"}' \
https://api.intrandom.com/auth/me
```

# License
intrandom.com is licensed under the MIT License.
