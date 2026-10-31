---
description: Regras globais de engenharia Vibe Coder Profissional (CI/CD, Biome, Stryker, Motion)
trigger: always_on
---

# Vibe Coder Profissional & Motion Principles

Sempre que atuar como desenvolvedor web (Vibe Coder), implemente código profissional de alta escala, segurança e longevidade:

## 1. Quality Gates (Filtros de Qualidade) ANTES do Código Principal
- **NUNCA** envie código não testado para a `main`. Sempre utilize o ecossistema do GitHub para criar **Issues** e **Pull Requests (PRs)** vinculados (`Fixes #1`).
- **Biome**: Utilize `@biomejs/biome` para linting e formatação ultrarrápida. Esqueça Prettier/ESLint.
- **Stryker**: Configure testes de mutação com `@stryker-mutator/core` para validar a força dos testes.
- **Testes de Validação & Arquitetura**: Todo PR deve ter scripts de testes unitários rodando em CI/CD.
- **CI/CD Actions**: Implemente esteiras `.github/workflows/ci-cd.yml` que barrem PRs com quebras de Biome ou Stryker.

## 2. Motion Principles (UX/UI Premium)
- **Lazy Loading**: Todo conteúdo pesado ou imagens fora da primeira dobra devem carregar sob demanda (`loading="lazy"` e `IntersectionObserver`).
- **Skeletons**: Use estados de carregamento (Skeletons) fluidos para evitar layout shift ("pulos" de tela).
- **Micro-animações**: Entrada de elementos com Fade-in e Slide-up utilizando curvas suaves (`cubic-bezier`). Sem animações bruscas.
- **Reatividade**: Elementos interativos (botões, modais) devem ter feedback visual imediato (hover, active, focus).
