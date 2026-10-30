# AGENTS.md --- Item Zone

## Mission

Build **Item Zone**, a reliable, fast, mobile-friendly multi-category
e-commerce store for Bangladesh. Priorities: correctness, security,
accessibility, maintainability, performance, and consistent UI. Use BDT
(৳) for prices. Do not invent business rules, product data, shipping
fees, or policies.

## Stack

-   Next.js 16 --- App Router
-   TypeScript --- strict typing; avoid `any`
-   Tailwind CSS --- use the project's existing setup
-   shadcn/ui and Lucide React --- reuse existing components/icons
-   MongoDB --- use the existing database connection pattern
-   Better Auth --- only if already configured or explicitly requested

Before changing dependencies or configuration, inspect the existing
project and follow its conventions.

## Token-efficient working rules

1.  Inspect only the files relevant to the task. Do not dump the whole
    repository.
2.  Start with a short plan (up to 3 bullets) for non-trivial tasks;
    then implement.
3.  Prefer small, focused changes over broad refactors.
4.  Reuse existing components, utilities, types, and patterns. Do not
    recreate them.
5.  Do not repeat the task or explain obvious code. Keep the final
    response concise.
6.  Do not generate multiple alternatives unless asked.
7.  Ask one focused question only when a missing requirement blocks safe
    implementation. Otherwise make a reasonable, clearly stated
    assumption.
8.  Do not read `node_modules`, build output, lockfiles, or generated
    files unless necessary.
9.  Do not run expensive commands repeatedly. Run the narrowest relevant
    check once after changes.
10. In the final response, report: what changed, checks run and their
    result, and any remaining issue.

## Project discovery

Before implementation: - Check `package.json`, the lockfile name,
`tsconfig.json`, `next.config.*`, and the relevant route/component
files. - Preserve the current package manager. Never replace the
lockfile or switch package managers without permission. - Confirm
whether the project uses `src/`, existing aliases, Server Components,
and established naming conventions. - Do not assume a folder or file
exists; verify before editing.

## Next.js conventions

-   Use the App Router and follow the project's existing route
    structure.
-   Prefer Server Components. Add `"use client"` only when state,
    effects, event handlers, or browser APIs are needed.
-   Keep secrets and database access on the server. Never expose secret
    environment variables with `NEXT_PUBLIC_`.
-   Use Route Handlers for HTTP endpoints when appropriate; validate all
    incoming data.
-   Use `loading.tsx`, `error.tsx`, `not-found.tsx`, and metadata where
    they improve the route.
-   Use `next/image` for local/remote images where practical; configure
    remote hosts explicitly.
-   Avoid unnecessary client-side fetching, effects, and duplicated
    state.
-   Do not use a custom Next.js server unless the task or hosting
    requirement explicitly needs it.

## TypeScript and code quality

-   Keep strict types. Prefer `unknown` over `any`; narrow values before
    use.
-   Reuse shared domain types and avoid duplicate interfaces.
-   Handle nullable values and errors explicitly.
-   Keep functions small and names descriptive.
-   Avoid premature abstractions, unnecessary comments, and speculative
    features.
-   Do not suppress TypeScript or ESLint errors with casts,
    `@ts-ignore`, or disable comments unless justified and documented.

## UI and design system

-   Follow the existing Item Zone brand direction:
    -   Orange: `#FF6B00`
    -   Near-black: `#111318`
    -   Yellow accent: `#FFB800`
    -   Light background: `#F8FAFC`
-   Use design tokens/CSS variables and existing Tailwind/shadcn
    conventions. Avoid scattered one-off colors.
-   Build responsive layouts mobile-first unless the existing project
    specifies otherwise.
-   Reuse shadcn/ui components; do not install another UI library for a
    small need.
-   Use semantic HTML, visible focus states, keyboard-accessible
    controls, and labels for form fields.
-   Include loading, empty, error, disabled, and success states where
    relevant.
-   Avoid decorative UI that harms clarity, accessibility, or
    performance.
-   Do not use emoji as interface icons; use Lucide icons already
    installed.
-   Do not invent ratings, stock counts, discounts, testimonials,
    urgency timers, or trust claims.

## E-commerce business rules

-   Store money as integer **poisha** (৳1 = 100 poisha); format for
    display as BDT.
-   Calculate prices, discounts, shipping, and totals on the server.
    Never trust totals or prices sent by the browser.
-   Validate product IDs, quantities, variants, addresses, and status
    transitions on the server.
-   Check stock on the server at order placement; prevent overselling
    using appropriate atomic/transactional operations.
-   Save order-item snapshots (product name/SKU, unit price, quantity,
    selected variant) so historical orders remain accurate.
-   Do not mark an online payment as paid based only on a client
    redirect. Verify payment server-to-server with the provider.
-   Make order creation and payment callbacks safe against duplicate
    requests where applicable.
-   Enforce authorization for admin actions on the server, not only by
    hiding UI.
-   Do not invent shipping, cancellation, refund, or return policies.
    Ask or leave clearly marked TODOs.

## MongoDB and server-side data

-   Reuse one shared MongoDB client/connection pattern; do not open a
    new connection per request.
-   Keep database operations on the server.
-   Validate and normalize data before writes.
-   Use indexes for actual lookup patterns and enforce uniqueness where
    required (for example, SKU or slug if the business rules require
    it).
-   Never expose database credentials or raw internal errors to clients.
-   Do not create or modify production data, indexes, or collections
    without explicit authorization.

## Security and privacy

-   Treat all user input as untrusted; validate on the server.
-   Never hardcode secrets, tokens, credentials, or private keys.
-   Never log passwords, session tokens, payment secrets, or full
    sensitive customer data.
-   Enforce authentication and role/ownership checks on every protected
    server operation.
-   Avoid unsafe HTML rendering and unsafe MongoDB query construction.
-   Do not weaken security settings to make a feature work.
-   Keep `.env*` secrets out of Git; update `.env.example` with variable
    names and safe placeholders only.

## Dependencies and commands

-   Do not add a dependency if the existing stack can solve the problem
    cleanly.
-   Before adding a package, explain why it is needed and ask if the
    choice materially affects architecture, cost, or security.
-   Never run destructive commands, database resets, migrations,
    deployments, or DNS changes without explicit approval.
-   Do not claim a command or test passed unless it was actually run and
    its output checked.

## Testing and completion

-   For each change, run the narrowest relevant checks available (for
    example, lint, typecheck, or targeted tests).
-   Add or update tests for business-critical logic when a test setup
    exists.
-   Manually verify responsive behavior and key interaction states when
    UI changes.
-   If checks cannot run, state why; do not imply the work is verified.
-   Before finishing, review the diff for unrelated edits, accidental
    secrets, debug logs, and unused code.

## Scope discipline

-   Implement only what the user requested and what is necessary for it.
-   Do not silently redesign unrelated pages, rename routes, change
    APIs, alter database schemas, or modify authentication behavior.
-   Preserve existing functionality unless the task explicitly changes
    it.
-   If requirements conflict with this file, follow the user's latest
    explicit instruction, while maintaining security and data integrity.
