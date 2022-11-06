import tmp from "tmp";
import { main } from "..";
import { Args, createCommand } from "../create-command";
import { resolveEnv, accessor, scriptPlaceholder } from "../../../shared";
import { resolveEnvExample } from "../../../shared/resolve-env-example";
import { existsSync, readFileSync, writeFileSync } from "fs";

let command = createCommand();

beforeEach(() => {
  command = createCommand();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("cli", () => {
  describe("command", () => {
    test("it should warn if example not found", () => {
      // arrange
      const spy = jest.spyOn(console, "error").mockImplementation();

      // act
      command.exitOverride().parse(["node", "test", "--example", "foo"]);

      // assert
      expect(spy.mock.calls).toMatchInlineSnapshot(`
        [
          [
            "[31m[import-meta-env]: Example file not found: foo[39m",
          ],
          [
            "[31m[import-meta-env]: Output file not found: dist/**/*, .next/**/*, .nuxt/**/*, .output/**/*, build/**/*[39m",
          ],
        ]
      `);
    });

    test("it should warn if output files not found", () => {
      // arrange
      const envExampleFilePath = tmp.fileSync();
      const spy = jest.spyOn(console, "error").mockImplementation();

      // act
      command
        .exitOverride()
        .parse([
          "node",
          "test",
          "--example",
          envExampleFilePath.name,
          "--output",
          "foo",
          "bar",
        ]);

      // assert
      expect(spy.mock.calls).toMatchInlineSnapshot(`
        [
          [
            "[31m[import-meta-env]: Output file not found: foo, bar[39m",
          ],
        ]
      `);
    });

    test("it should warn if output files not found (default)", () => {
      // arrange
      const envExampleFilePath = tmp.fileSync();
      const spy = jest.spyOn(console, "error").mockImplementation();

      // act
      command
        .exitOverride()
        .parse(["node", "test", "--example", envExampleFilePath.name]);

      // assert
      expect(spy.mock.calls).toMatchInlineSnapshot(`
        [
          [
            "[31m[import-meta-env]: Output file not found: dist/**/*, .next/**/*, .nuxt/**/*, .output/**/*, build/**/*[39m",
          ],
        ]
      `);
    });
  });

  describe("main", () => {
    test("integration", () => {
      // arrange
      const envFilePath = tmp.fileSync();
      writeFileSync(envFilePath.name, "FOO=bar\nBAZ=qux");
      const envExampleFilePath = tmp.fileSync();
      writeFileSync(envExampleFilePath.name, "FOO=");
      const outputFile = tmp.fileSync();
      const code = `
<html>
  <body>
    ${scriptPlaceholder}
    <script>${accessor}.FOO</script>
  </body>
</html>
        `.trim();
      writeFileSync(outputFile.name, code);
      const parse = jest.fn();
      const opts = jest.fn(
        () =>
          ({
            env: envFilePath.name,
            example: envExampleFilePath.name,
            output: [outputFile.name],
          } as Args)
      );
      const cmd = jest.fn(() => ({ parse, opts } as unknown as typeof command));
      const di = {
        command: new cmd() as typeof command,
        resolveEnv,
        resolveEnvExample,
      };

      // act
      main(di);

      // assert
      expect(readFileSync(outputFile.name, { encoding: "utf8" }))
        .toMatchInlineSnapshot(`
        "<html>
          <body>
            <script>globalThis.import_meta_env={"FOO":"bar"}</script>
            <script>Object.create(globalThis.import_meta_env || null).FOO</script>
          </body>
        </html>"
      `);
      const backupFileName = outputFile.name + ".bak";
      expect(existsSync(backupFileName)).toBe(true);
      expect(readFileSync(backupFileName, { encoding: "utf8" })).toBe(code);
    });
  });
});
