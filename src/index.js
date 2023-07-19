import HtmlParser from './HtmlParser';
export default HtmlParser;

export { default as processNodes } from './processNodes';
export { default as convertNodeToElement } from './convertNodeToElement';

// expose htmlparser2 so it can be used if required
import * as htmlparser2 from 'htmlparser2';
export { htmlparser2 };
