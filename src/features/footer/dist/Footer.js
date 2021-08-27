"use strict";
exports.__esModule = true;
var Footer_module_sass_1 = require("./Footer.module.sass");
var facebook_png_1 = require("../../public/images/facebook.png");
var instagram_png_1 = require("../../public/images/instagram.png");
var twitter_png_1 = require("../../public/images/twitter.png");
var Footer = function () {
    return (React.createElement("footer", null,
        React.createElement("div", { className: Footer_module_sass_1["default"].footer },
            React.createElement("div", { className: Footer_module_sass_1["default"].content },
                React.createElement("div", null,
                    React.createElement("small", { className: Footer_module_sass_1["default"].rights }, "Copyright \u00A9 2019 - 2020 proplayer.com. All rights reserved.")),
                React.createElement("div", { className: Footer_module_sass_1["default"].links },
                    React.createElement("p", null, "Our socials:"),
                    React.createElement("img", { src: facebook_png_1["default"], alt: "", className: Footer_module_sass_1["default"].socialLogo }),
                    React.createElement("img", { src: instagram_png_1["default"], alt: "", className: Footer_module_sass_1["default"].socialLogo }),
                    React.createElement("img", { src: twitter_png_1["default"], alt: "", className: Footer_module_sass_1["default"].socialLogo }))))));
};
exports["default"] = Footer;
