# yogeshcrafts.in

Yogesh Pokale's portfolio, web resume, and downloadable LaTeX resume.
Built with Next.js App Router and deployed to Cloudflare Workers through OpenNext.

## Development

```sh
npm install
npm run dev
```

## Public content and resume

- `src/data/career.json`: approved identity, summary, experience, skills, education, and study status.
- `src/data/projects.json`: selected work and archived projects, with explicit ownership and public overviews.
- `src/data/tech-registry.json`: readable technology labels used by both the website and PDF.
- `npm run resume:source`: generates `src/resume/resume.tex` from those files. Edit the JSON, not the generated LaTeX.
- The Build Resume PDF workflow regenerates the source and compiles `public/resume.pdf`. Review the extracted text and rendered pages before using an updated PDF.

Private career evidence stays outside this repository. Only approved public descriptions belong here. Coursework and exams pending are professional development, not earned certifications. Keep original role and project dates unless new dates are confirmed.

## Contact

Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to a real Formspree endpoint to enable the contact form. Without one, the contact section offers direct email. Never commit credentials.

## Builds and hosting

```sh
npm run build
npm run build:cf
```

The OpenNext output is configured in `wrangler.jsonc` for Cloudflare Workers. Publishing uses the existing `npm run deploy` command when authorized.
