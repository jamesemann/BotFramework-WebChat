export { App, AppProps } from './App';
export { Chat, ChatProps, FormatOptions } from './Chat';
export * from 'botframework-directlinejs';
export { HumanInTheLoopBotConnection } from './HumanInTheLoopBotConnection';
export { queryParams } from './Attachment';
// below are shims for compatibility with old browsers (IE 10 being the main culprit)
import 'core-js/modules/es6.string.starts-with';
import 'core-js/modules/es6.array.find';
import 'core-js/modules/es6.array.find-index';
