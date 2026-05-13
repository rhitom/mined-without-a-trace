<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Agent Deny List

The following actions require explicit user confirmation before proceeding:

- **Do not** read, write, create, or delete any `.env*` file (`.env`, `.env.local`, `.env.production`, etc.).
- **Do not** call `browser_run_code_unsafe` or `browser_evaluate` MCP tools — these execute arbitrary JavaScript in a live browser session and can exfiltrate cookies or session data.
- **Do not** `git push`, force-push, or create/close/merge GitHub PRs without an explicit user instruction in the same conversation turn.
- **Do not** run `npm install` or add packages not already in `package.json` without user confirmation.
- **Do not** modify `next.config.ts` security headers (CSP, X-Frame-Options, etc.) without user review.
- **Do not** write to or modify Vercel deployment configuration or any future Supabase/database credentials.
