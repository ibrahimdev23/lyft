Technical Sample for Lyft Apprenticeship

Please write a small web application in one of the above languages (Python/Ruby/Javascript). The application only needs to do the following:
1. Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
2. Return a JSON object with the key “return_string” and a string containing every third letter from the original string

(e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.

Note: To see expected behavior you can test against a current working example with the command: curl -X POST https://lyft-interview-test.glitch.me/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
