module.exports = {
  env: {
    doc: 'Environment',
    format: ['development', 'production'],
    default: 'development',
    env: 'NODE_ENV'
  },
  http: {
    port: {
      doc: 'HTTP Server port',
      env: 'HTTP_PORT',
      default: 3001
    }
  },
  storage: {
    directory: {
      doc: 'Server storage directory',
      env: 'STORAGE_DIR',
      default: '/tmp/todo'
    }
  }
}