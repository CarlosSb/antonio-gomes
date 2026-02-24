# Case Study Playbook

## Structure (always use)
1. Summary (3 lines): what it is, who it is for, why it exists.
2. Problem: what was painful before.
3. Solution: features and key technical decisions.
4. Architecture: Frontend -> API -> DB -> Queues/Services -> Integrations.
5. Trade-offs: why X instead of Y.
6. Results: 3-5 metrics with measurement source.
7. What I would change: 2-3 real learnings.
8. Links: demo, repository (if public), screenshots, short video.

## Evidence checklist by project type

### SEO / Performance projects
- Lighthouse (mobile + desktop)
- Web Vitals (LCP, INP, CLS)
- sitemap/robots/metadata proof
- TTFB and JS payload improvements (if available)

### Payments / PIX / webhooks projects
- Checkout and payment status flow
- Transaction/admin dashboard
- Webhook logs/audit screen
- Idempotency and retry evidence

### Multi-tenant / RBAC projects
- Tenant switching UI
- Roles and permissions UI/table
- Data isolation proof across tenants
- Access control coverage and incident prevention

## Impact writing format
- Use `Before -> After` with measurable result.
- Example: `Before: manual confirmation and duplicate risk -> After: idempotent webhook + retries + audit trail, reducing operational errors.`

## 7-day execution plan
1. Replace resume placeholder with current PDF.
2. Create one consistent thumbnail per project.
3. Add 3 screenshots per project (home, critical feature, admin/architecture).
4. Collect Lighthouse/Speed metrics and add 2-3 numbers per project.
5. Turn best project into a deep case study.
6. Review PT/EN consistency across routes.
7. Review CTAs (primary action, contact, availability).
