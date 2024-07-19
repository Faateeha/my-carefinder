This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
Access to healthcare in Nigeria can be challenging and thorough. It is absurd that the first thing to living is being healthy. Carefinder is a simple tool that aims to help users find, export, and share hospitals within the region. 
Requirements and Implementation Guide:
- Hospital Search: Carefinder allows users to search for hospitals within their region. Users can input their location or select from a list of nearby cities to find hospitals in their area. The platform will list hospitals and their respective contact details, including address, phone number, and email.
- Export Hospitals: Carefinder allows users to export the list of hospitals to a CSV file, making it easy to save and share the information. This feature will be implemented using Firebase's built-in file storage.
- Share Hospitals: Carefinder also allows users to share the list of hospitals with others. Users can share the information via email or by generating a shareable link. This feature will be implemented using Firebase's built-in email and link-sharing functionalities.
- User Authentication: Carefinder requires admin users to create an account to access the platform's admin features. This feature will be implemented using Firebase's built-in authentication feature, which supports multiple authentication methods, including email/password and social media logins.
- Markdown Support: Carefinder allows admin users to write content(create hospital entries and corresponding details) with a markdown. This feature makes it easy for users to format their content, add links, and insert images. The platform will provide a simple text editor that supports markdown syntax.
