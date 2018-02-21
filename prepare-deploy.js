const replace = require("replace");

replace({
  regex: "**BACKEND_URL**",
  replacement: `${process.env.BACKEND_PROD}`,
  paths: ['src/environments/environment.prod.ts'],
  recursive: true,
  silent: true,
});

