module.exports = {
    preset: 'ts-jest', // 使用 ts-jest 来处理 TypeScript 文件
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // 转换 .ts 和 .tsx 文件
      '^.+\\.js$': 'babel-jest', // 转换 .js 文件
    },
    transformIgnorePatterns: [
      '/node_modules/(?!axios)/', // 处理 axios 的 ECMAScript 模块
    ],
  };