# Paula Yaniz Macia - Portfolio

My personal portfolio showcasing my work at the intersection of business and technology. I'm a Computer Science and Business Administration student at Washington and Lee University with experience in product management, UX research, and data analysis.

🌐 **Live Site**: [paulayaniz.vercel.app](https://paulayaniz.vercel.app)

## About This Portfolio

This portfolio features my work across:
- Product & UX Projects (AV Raval, Madrid Thrifting Directory, ISAK Konbini)
- GIS & Data Analysis (Cyclone Idai, Ethiopia Analysis)
- Programming Projects (Full-stack web apps, mobile apps, IoT systems)

## Tech Stack

Built with:
- **Framework**: Next.js 16
- **UI**: Once UI Design System
- **Styling**: CSS with design tokens
- **Content**: MDX for project pages
- **Deployment**: Vercel
- **Language**: TypeScript

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to see the portfolio locally.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── work/projects/     # Project MDX files
│   └── about/             # About page
├── resources/
│   ├── content.tsx        # Portfolio content & info
│   └── once-ui.config.ts  # Site configuration
public/
└── images/                # Project images & assets
```

## Updating Content

### Personal Info
Edit `src/resources/content.tsx` to update:
- Bio and introduction
- Work experience
- Education
- Technical skills
- Social links

### Site Config
Edit `src/resources/once-ui.config.ts` for:
- Domain settings
- Theme customization
- Route configuration

### Adding Projects
1. Create a new `.mdx` file in `src/app/work/projects/`
2. Add project images to `public/images/projects/project-01/`
3. Use the existing project files as templates

### Replacing Images
See `public/images/IMAGE-GUIDE.md` for detailed instructions on image placement.

## Deployment

This portfolio auto-deploys to Vercel on every push to `main`. Any changes you commit will be live within 1-2 minutes.

## Contact

- **Email**: pyanizmacia@mail.wlu.edu
- **LinkedIn**: [linkedin.com/in/paulaya](https://www.linkedin.com/in/paulaya/)
- **GitHub**: [github.com/PaulaYaniz](https://github.com/PaulaYaniz)

## Built With

This portfolio is built using the [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template with [Once UI](https://once-ui.com) components.

## License

See `LICENSE.txt` for license information.
