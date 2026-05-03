import connect from 'connect';
import createMockMiddleware from 'vite-plugin-mock/es/server';
import loginMock from './login.js';

const app = connect();

// 创建 mock 中间件
const mockMiddleware = createMockMiddleware([loginMock]);

app.use(mockMiddleware);

export default app;