# Antonio Gomes Portfolio

Portfolio profissional bilíngue (PT/EN) construído com foco em performance, acessibilidade e SEO.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Executar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Qualidade

```bash
npm run lint
npm run build
```

## Estrutura de conteúdo

- `src/content/profile.ts`: textos globais PT/EN, navegação, hero, seções, experiência e skills.
- `src/content/projects.ts`: lista de projetos e detalhes de cada case (PT/EN).
- `src/lib/content.ts`: helpers para buscar e localizar conteúdo.

## Adicionar um novo projeto (passo a passo)

1. Abra `src/content/projects.ts`.
2. Adicione um novo objeto no array `projects` com os campos obrigatórios:
   - `slug`
   - `title`
   - `liveUrl`
   - `stack`
   - `summary` (`pt` e `en`)
   - `description` (`pt` e `en`)
   - `challenge` (`pt` e `en`)
   - `solution` (`pt` e `en`)
   - `results` (`pt` e `en`)
   - `highlights` (`pt` e `en`)
3. Use um `slug` único (ex.: `meu-novo-projeto`).
4. Salve o arquivo. A rota dinâmica será criada automaticamente em `/projects/[slug]`.
5. Rode:

```bash
npm run lint
npm run build
```

## Currículos (PDF)

Os downloads estão em:

- `public/resume-pt.pdf`
- `public/resume-en.pdf`

Substitua esses arquivos pelos PDFs finais mantendo os mesmos nomes.
