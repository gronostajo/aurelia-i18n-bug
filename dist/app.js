var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "aurelia-i18n"], function (require, exports, aurelia_i18n_1) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            return _super.apply(this, arguments) || this;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        return App;
    }(aurelia_i18n_1.BaseI18N));
    exports.App = App;
});

//# sourceMappingURL=app.js.map
