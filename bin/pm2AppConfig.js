const os = require('os')
module.exports = {
  apps: [
    {
      name: 'zengfan-cli-backend',
      script: './bin/www',
      instances: os.cpus().length, // 启动与 CPU 核数相同的进程数
      exec_mode: 'cluster', // 使用 'cluster' 模式启动
      // watch: true, // 监控文件变动，自动重启（开发环境使用）
      ignore_watch: ['node_modules', 'logs'], // 忽略监控这些文件夹
      env: {
        NODE_ENV: 'development', // 开发环境
      },
      env_production: {
        NODE_ENV: 'production', // 生产环境
      },
      error_file: './logs/pm2-err.log', // 错误日志文件
      out_file: './logs/pm2-out.log', // 正常日志文件
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z', // Z 表示使用当前时区的时间格式
      merge_logs: true, // 合并日志
      max_restarts: 10, // 最大重启次数
      min_uptime: '60s', // 最小运行时间（防止频繁重启）
      max_memory_restart: '300M', // 内存超出限制时重启
    },
  ],
}
