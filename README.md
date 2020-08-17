This repo contains the code of my website davidespinosa.dev using Angular for the frontend and AWS serverless for the backend.

You will need to install Node (versión LTS): https://nodejs.org/en/

I also recommend you to install Visual Studio Code: https://code.visualstudio.com/ and Git: https://git-scm.com/

Now you will need to create an AWS account (if you don't have it):
https://aws.amazon.com/

Create an access key:
https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html

And configure this generated credentials in your PC with the following command (replacing the values of key and secret):

serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

Each project folder has it's own readme for development and deployment.