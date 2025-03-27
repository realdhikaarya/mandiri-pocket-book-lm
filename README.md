# Bank Mandiri Sales Pocket Book

A comprehensive pocket book app for Bank Mandiri sales teams to assist with Livin Merchant and EDC onboarding processes. This application simplifies the lengthy steps into a user-friendly, easy-to-navigate guide that can be used during sales negotiations.

## Features

- **Simplified Livin Merchant Registration Guide**: 5-step process with visual aids
- **Streamlined EDC Registration Process**: Clear requirements and step-by-step instructions
- **Comprehensive FAQ Section**: Organized by categories for quick reference
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)

## Deployment Options

### Option 1: Deploy to Netlify (Recommended)

1. Download the deployment package: `mandiri-pocket-book-deploy.zip`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Simply drag and drop the zip file onto the Netlify Drop area
4. Netlify will automatically unzip and deploy your site
5. Your pocket book will be available at a Netlify URL (e.g., `https://your-site-name.netlify.app`)
6. You can customize the URL in the Netlify dashboard under "Site settings"

### Option 2: Deploy to Any Web Hosting

1. Download the deployment package: `mandiri-pocket-book-deploy.zip`
2. Extract the contents to your computer
3. Upload all the files to your web hosting via FTP or their file manager
4. The site should be accessible from your domain immediately

### Option 3: Deploy Locally (Intranet)

If you want to host the app on your company's intranet:

1. Download the deployment package: `mandiri-pocket-book-deploy.zip`
2. Extract the contents to a folder on your intranet web server
3. Configure your intranet server to serve these static files
4. Share the internal URL with your sales team

## Development

If you want to make changes to the pocket book:

1. Clone this repository
2. Install dependencies: `bun install`
3. Start the development server: `bun run dev`
4. Make your changes
5. Build for production: `bun run build`
6. The build output will be in the `out` directory

## Customizing the Pocket Book

You can customize the pocket book content by editing the following files:

- `src/components/content/welcome.tsx`: Main welcome page
- `src/components/content/liven-merchant.tsx`: Livin Merchant registration guide
- `src/components/content/edc-registration.tsx`: EDC registration process
- `src/components/content/faq.tsx`: Frequently asked questions

## Contact

For assistance or further customization, please contact your IT department or the application provider.
