import chrome from 'chrome-aws-lambda';
import core from 'puppeteer-core';

export const getBrowserOption = async () =>
  // eslint-disable-next-line no-process-env
  process.env.AWS_LAMBDA_FUNCTION_VERSION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : {
        args: [],
        // eslint-disable-next-line no-process-env
        executablePath: process.env.CHROME_EXECUTABLE_PATH,
        headless: true,
      };

export async function getScreenshot(html: string) {
  const browserOptions = await getBrowserOption();
  const browser = await core.launch(browserOptions);

  const page = await browser.newPage();

  await page.setViewport({width: 1024, height: 720});
  await page.setContent(html);
  const screenshot = await page.screenshot({type: 'png'});

  await browser.close();
  return screenshot;
}
