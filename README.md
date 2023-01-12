## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



## API
The API endpoints are build using [deno] deployed on top of supabase edge functions (which in turn are powered by deno deploy). All of the related functions and database schemas, migrations and documentations are under the [supabase](./supabase/README.md) folder.
