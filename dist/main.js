define(["require", "exports", "i18next-xhr-backend", "bootstrap"], function (require, exports, I18nBackend) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-i18n', function (instance) {
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
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=main.js.map
