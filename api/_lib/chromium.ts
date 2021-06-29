import chrome from 'chrome-aws-lambda';
import core from 'puppeteer-core';
import {ParsedOptions} from './parser';

export const getBrowserOption = async () => {
  // eslint-disable-next-line no-process-env
  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    await chrome.font(
      'https://rawcdn.githack.com/googlefonts/noto-cjk/165c01b46ea533872e002e0785ff17e44f6d97d8/Sans/OTF/Japanese/NotoSansCJKjp-Regular.otf',
    );
    return {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  } else
    return {
      args: [],
      // eslint-disable-next-line no-process-env
      executablePath: process.env.CHROME_EXECUTABLE_PATH,
      headless: true,
    };
};

export async function getScreenshot(html: string, option: ParsedOptions) {
  const browserOptions = await getBrowserOption();
  const browser = await core.launch(browserOptions);

  const page = await browser.newPage();

  await page.setViewport({width: 1024, height: 720});
  await page.setContent(html);
  const screenshot = await page.screenshot({type: option.type});

  await browser.close();
  return screenshot;
}
