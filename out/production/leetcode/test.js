async function doSomethingA() {
  return Promise.reject(new Error('A'));
}

async function doSomethingB() {
  return 'B'
}

async function example() {
  try {
    try {
      await doSomethingA();
    } catch (error) {
      // console.log('A错误', error);
    }

    await doSomethingB();

    console.log('操作成功');
  } catch (error) {
    console.log('出错了：', error);
  }
}

example();