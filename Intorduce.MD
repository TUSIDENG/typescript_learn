# What is TypeScript?

TypeScript is a superset of JavaScript, meaning that it does everything that JavaScript does, but with some added features.

The main reason for using TypeScript is to add static typing to JavaScript. Static typing means that the type of a variable cannot be changed at any point in a program.

## Project TypeScrpit Config

package.json
```json
"scripts": {
    "tsc": "tsc"
}
```
运行命令传递参数：
```bash
# Insert a double dash (--) before your arguments. This tells npm: "Stop parsing flags here, and pass everything after this directly to the underlying command."
npm run tsc -- --init
# npx passes the arguments straight to TypeScript without any extra syntax:
npx tsc --init
```