import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log("erro on application:" + err);
    if (choose.select == 1) {
      await createQRCode();
      return;
    } else if (choose.select == 2) {
      await createPassword();
      return;
    }
  });

  prompt.start;
}

main();
