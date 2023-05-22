API Gateway URL = https://b3wzpa0hz0.execute-api.us-east-1.amazonaws.com/v1/graphql
S3_BUCKET = lambda-graph-api

aws cloudformation deploy \
  --template-file ./cloudformation.yml \
  --stack-name lambda-graph-api-2 \
  --parameter-overrides BucketName=lambda-graph-api Version=latest \
  --capabilities CAPABILITY_IAM

  aws cloudformation describe-stacks \
--stack-name=lambda-graph-api-2 \
--query "Stacks[0].Outputs[?OutputKey=='ApiUrl'].OutputValue" \
--output text

https://n7m5szr73g.execute-api.us-east-1.amazonaws.com/v1/graphql

S3_BUCKET=lambda-graph-api ./bin/deploy