# Teste de Busca “Pacto Soluções” no Yahoo com Playwright

Este projeto automatiza a busca da empresa **Pacto Soluções** no Yahoo e valida o carregamento do primeiro link do resultado, utilizando **Playwright**.

---

## Descrição

O teste realiza o seguinte fluxo:

1. Acessa o site [Yahoo Search Brasil](https://br.search.yahoo.com/).
2. Localiza o campo de busca e digita "Pacto Soluções".
3. Envia a busca e aguarda os resultados carregarem.
4. Verifica que pelo menos um resultado contém o termo **"Pacto"**.
5. Clica no **primeiro link** dos resultados.
6. Confirma que a nova página carregada tem título contendo "Pacto".

---

## Tecnologias

- [Playwright](https://playwright.dev/)
- Node.js
- JavaScript (ES6)

---

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
