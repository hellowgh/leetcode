class Koa {
  constructor() {
    this.middlewares = [];
  }

  use(middleware) {
    if (typeof middleware !== "function") {
      throw new Error("middleware must be a function");
    }
    this.middlewares.push(middleware);
    return this; // 支持链式调用
  }

  compose() {
    const middlewares = this.middlewares;

    return function (ctx) {
      let index = -1;

      function dispatch(i) {
        if (i <= index) {
            return Promise.reject(new Error("next() called multiple times"));
        }
        index = i;
        let fn = middlewares[i];
        if (!fn) return Promise.resolve();
        try {
          return Promise.resolve(fn(ctx, () => dispatch(i + 1)));
        } catch (err) {
          return Promise.reject(err);
        }
      }

      return dispatch(0);
    };
  }

  // 模拟执行中间件链
  execute(ctx) {
    const fnMiddleware = this.compose();
    return fnMiddleware(ctx);
  }
}

// 使用示例
const app = new Koa();

app.use(async (ctx, next) => {
  console.log("Middleware 1: Before");
  ctx.data = "from Middleware 1";
  await next(); // 传递给下一个中间件
  console.log("Middleware 1: After");
});

app.use(async (ctx, next) => {
  console.log("Middleware 2: Before");
  console.log(ctx.data);
  await next();
  console.log("Middleware 2: After");
});

// 模拟请求上下文
const context = {};

// 执行中间件链
app
  .execute(context)
  .then(() => {
    console.log("All middlewares have been executed");
  })
  .catch((err) => {
    console.error("Error during middleware execution:", err);
  });

console.log(33, function () {});
