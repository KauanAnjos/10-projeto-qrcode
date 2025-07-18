import prompt from "prompt";

prompt.start();

prompt.get(["username", "password"], (err, result) => {
  console.log(result);
  console.log(" Dados pessoasis");
  console.log("username: " + result.username);
  console.log("password: " + result.password);
});
