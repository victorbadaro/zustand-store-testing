Object.defineProperty(global.self, 'crypto', {
  value: {
    randomUUID() {
      return String(Math.random())
    }
  }
});

export { };
