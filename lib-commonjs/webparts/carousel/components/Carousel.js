"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Carousel_module_scss_1 = tslib_1.__importDefault(require("./Carousel.module.scss"));
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var Carousel = function (props) {
    var description = props.description;
    return (React.createElement("section", { className: Carousel_module_scss_1.default.carousel },
        React.createElement("div", { className: Carousel_module_scss_1.default.box },
            React.createElement("h1", null, (0, sp_lodash_subset_1.escape)(description)))));
};
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map