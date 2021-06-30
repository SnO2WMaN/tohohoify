import chrome from 'chrome-aws-lambda';
import {ParsedOptions} from './parser';

export async function getScreenshot(html: string, option: ParsedOptions) {
  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: true,
  });

  const page = await browser.newPage();

  await page.setViewport({width: 1024, height: 720});
  await page.setContent(html, {waitUntil: 'networkidle0'});
  const screenshot = await page.screenshot({type: option.type});

  await browser.close();
  return screenshot;
}
