import { parse, ParseError } from "jsonc-parser";

export function parseJsonc<T>(text: string): T {
  const errors: ParseError[] = [];
  const data = parse(text, errors, { allowTrailingComma: true }) as T;

  if (errors.length > 0) {
    const message = errors
      .map((e) => `offset ${e.offset}: ${e.error}`)
      .join("; ");
    throw new Error(`Invalid JSONC: ${message}`);
  }

  if (data === undefined) {
    throw new Error("JSONC parsed to undefined");
  }

  return data;
}
