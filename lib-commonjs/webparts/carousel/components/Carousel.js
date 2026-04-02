"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Carousel_module_scss_1 = tslib_1.__importDefault(require("./Carousel.module.scss"));
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var react_slick_1 = tslib_1.__importDefault(require("react-slick"));
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
var Carousel = function (props) {
    var description = props.description, environmentMessage = props.environmentMessage;
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };
    return (React.createElement("section", { className: Carousel_module_scss_1.default.carousel },
        React.createElement("div", { className: Carousel_module_scss_1.default.box },
            React.createElement("h3", null, (0, sp_lodash_subset_1.escape)(description)),
            React.createElement("div", null, environmentMessage)),
        React.createElement(react_slick_1.default, tslib_1.__assign({}, settings),
            React.createElement("div", null, "Monday"),
            React.createElement("div", null, "Tuesday"))));
};
exports.default = Carousel;
//# sourceMappingURL=Carousel.js.map