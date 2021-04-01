const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

describe('Application', () => {

  test('the application is running', async () => {
    const response = await page.goto('http://localhost:5000');
    const status = response.status();
    expect(status).toBe(200);
  });

  test('a stylesheet is generated if css is imported', async () => {
    const element = await page.$('[rel="stylesheet"]');
    expect(element).toBeTruthy();
  });

});

afterAll(async () => {
  browser.close();
});