var appRoot = 'src/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/';

module.exports = {
  scssIncludes : [
      'node_modules/uikit/src/scss',
      "node_modules/@fortawesome/fontawesome-pro/scss"
      ],
  assets: [
    "node_modules/@fortawesome/fontawesome-pro/webfonts/**/*.{gif,jpg,png,svg,eot,ttf,woff,woff2}"

  ],

  fonts: appRoot + 'main/themes/fonts/**/*',
  root: appRoot,
  // scss: ['src/main/themes/**/*.scss'],
  scss: {
    dark: 'src/main/themes/dark/theme.scss',
    light: 'src/main/themes/light/theme.scss'
  },
  docs: {
    output: outputRoot + '/docs',
    pug: appRoot + 'docs/**/*.pug',
    source: appRoot + 'docs/**/*.ts',
  },
  pug: appRoot + 'main/**/*.pug',
  source: appRoot + 'main/**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exporSrvtRoot,
  // locales: 'locales/**/*.yml',
  locales: ['en'],
  e2eSpecsSrc: 'test/e2e/src/**/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: ['./typings/**/*.d.ts', './custom_typings/**/*.d.ts']
};