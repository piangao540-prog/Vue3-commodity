// 模拟登录数据
const users = [
  { account: 'admin', password: '123456' },
  { account: 'test', password: '123456' },
  { account: 'demo', password: '123456' }
];

export default {
  // 登录接口
  'POST /login': (req, res) => {
    const { account, password } = req.body;

    console.log('收到登录请求:', { account, password });

    // 验证参数
    if (!account || !password) {
      return res.json({
        code: '10017',
        message: '用户名不能为空,密码不能为空',
        msg: '用户名不能为空,密码不能为空'
      });
    }

    // 验证用户
    const user = users.find(u => u.account === account && u.password === password);

    if (user) {
      return res.json({
        code: '0',
        message: '登录成功',
        data: {
          token: 'mock-token-' + Date.now(),
          userInfo: {
            id: 1,
            account: user.account,
            username: user.account,
            avatar: ''
          }
        }
      });
    } else {
      return res.json({
        code: '10018',
        message: '用户名或密码错误',
        msg: '用户名或密码错误'
      });
    }
  }
};