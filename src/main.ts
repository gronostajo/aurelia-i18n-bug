import 'bootstrap';
import {Aurelia} from 'aurelia-framework';
import * as I18nBackend from 'i18next-xhr-backend';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-i18n', instance => {
      instance.i18next.use(I18nBackend);

      return instance.setup({
          backend: {
              loadPath: './locales/{{lng}}/{{ns}}.json'
          },
          lng: 'dev',
          attributes: ['t'],
          debug: true
      });
    });

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
