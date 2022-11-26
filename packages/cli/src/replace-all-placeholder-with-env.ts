import serialize from "serialize-javascript";
import { createScriptPlaceholderRegExp } from "../../shared";

export const replaceAllPlaceholderWithEnv = ({
  code,
  env,
}: {
  code: string;
  env: Record<string, string>;
}): string => {
  return code
    .replace(
      createScriptPlaceholderRegExp({
        doubleQuoteSlashCount: 2,
        singleQuoteSlashCount: 1,
      }),
      `JSON.parse(\\'${serialize(env).replace(/"/g, '\\\\"')}\\')`
    )
    .replace(
      createScriptPlaceholderRegExp({
        doubleQuoteSlashCount: 1,
        singleQuoteSlashCount: 0,
      }),
      `JSON.parse('${serialize(env).replace(/"/g, '\\"')}')`
    )
    .replace(
      createScriptPlaceholderRegExp({
        doubleQuoteSlashCount: 0,
        singleQuoteSlashCount: 0,
      }),
      `JSON.parse('${serialize(env)}')`
    );
};
