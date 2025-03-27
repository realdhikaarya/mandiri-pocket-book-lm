#!/bin/bash

# Build the application
echo "Building the Pocket Book application..."
bun run build

# Create the deployment zip
echo "Creating deployment package..."
zip -r mandiri-pocket-book-deploy.zip out/

echo "Deployment package created: mandiri-pocket-book-deploy.zip"
echo "You can now upload this zip file to your web hosting provider."
echo "For Netlify: Simply drag and drop the zip file to https://app.netlify.com/drop"
