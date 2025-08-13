const { test, expect } = require('@playwright/test');

test('Buscar Pacto Soluções no Yahoo e clicar no primeiro link', async ({ page }) => {
  // Acessando o Yahoo
  await page.goto('https://br.search.yahoo.com/');
  await page.waitForTimeout(2000); // pausa de 2s

  // Digitando "Pacto Soluções" e enviando para busca
  const searchInput = page.locator('input[name="p"]');
  await expect(searchInput).toBeVisible();
  await searchInput.fill('Pacto Soluções');
  await page.waitForTimeout(1000); // pausa de 1s
  await searchInput.press('Enter');
  await page.waitForTimeout(2000); // pausa de 2s

  // Verificando se há resultados visíveis contendo "Pacto"
  const result = page.locator('h3.title');
  await expect(result.first()).toContainText(/Pacto/i);
  await page.waitForTimeout(2000); // pausa de 2s

  // Clicando no primeiro link do resultado
  const firstLink = result.first().locator('a');
  await firstLink.click();
  await page.waitForTimeout(3000); // pausa de 3s para carregar página

  // Verificando se a nova página carregou (título contém "Pacto")
  await expect(page).toHaveTitle(/Pacto/i);
});
