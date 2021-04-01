const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:5000');
});

describe('Home', () => {

  test('the title is changed', async () => {
    const element = await page.$('title');
    const title = await page.evaluate(el => el.innerText, element);
    expect(title).toBe('Polyable Tests - Nulla-chan te dá as boas vindas!');
  });

  test('the description meta is present', async () => {
    const element = await page.$('[name="description"]');
    const description = await page.evaluate(el => {
      return el.getAttribute('content');
    }, element);
    expect(description).toBe('Polyable Tests foi feito com Nullstack');
  });

  test('the html lang is updated', async () => {
    const element = await page.$('[lang="pt-BR"]');
    expect(element).toBeTruthy();
  });

});

describe('Polyable', () => {

  test('"botão" can be clicked and runs "exibe"', async () => {
    await page.click('button[data-btn]');
    await page.waitForSelector('[data-btn="clicado!"]');
    const btn = await page.$('[data-btn="clicado!"]');
    expect(btn).toBeTruthy();
  });
  
  test('"entrada" can be typed and runs "exibe"', async () => {
    await page.focus('input[data-input]');
    await page.keyboard.type('test');
    await page.waitForSelector('[data-input="digitado!"]');
    const input = await page.$('[data-input="digitado!"]');
    expect(input).toBeTruthy();
  });

});

afterAll(async () => {
  browser.close();
});