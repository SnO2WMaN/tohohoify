import {VercelApiHandler} from '@vercel/node';
import {getScreenshot} from './_lib/chromium';
import {parseRequest} from './_lib/parser';
import {getHtml} from './_lib/template';

const handler: VercelApiHandler = async (req, res) => {
  try {
    const option = parseRequest(req);
    const html = getHtml(option);
    const screenshot = await getScreenshot(html, option);

    res.status(200);
    res.setHeader('Content-Type', `image/${option.type}`);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.end(screenshot);
  } catch (error) {
    // eslint-disable-next-line no-process-env
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    res.status(500);
    res.end();
  }
};

export default handler;
