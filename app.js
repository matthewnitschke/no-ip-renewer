const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.noip.com/login?ref_url=console');

    await page.type('input[name=username]', '')
    await page.type('input[name=password]', '')
    await page.$eval('#clogs', form => form.submit());

    await page.screenshot({ path: 'screenshots/example.png' });

    await browser.close();
})();