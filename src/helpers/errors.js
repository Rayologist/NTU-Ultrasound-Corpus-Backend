class LanguageError extends Error {
  constructor() {
    super("Language not found.");
  }
}

export { LanguageError };
