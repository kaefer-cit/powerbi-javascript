/*! powerbi-models v1.0.5 | (c) 2016 Microsoft Corporation MIT */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["powerbi-models"] = factory();
	else
		root["powerbi-models"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Validators = __webpack_require__(1).Validators;
	var PageSizeType;
	(function (PageSizeType) {
	    PageSizeType[PageSizeType["Widescreen"] = 0] = "Widescreen";
	    PageSizeType[PageSizeType["Standard"] = 1] = "Standard";
	    PageSizeType[PageSizeType["Cortana"] = 2] = "Cortana";
	    PageSizeType[PageSizeType["Letter"] = 3] = "Letter";
	    PageSizeType[PageSizeType["Custom"] = 4] = "Custom";
	})(PageSizeType = exports.PageSizeType || (exports.PageSizeType = {}));
	var DisplayOption;
	(function (DisplayOption) {
	    DisplayOption[DisplayOption["FitToPage"] = 0] = "FitToPage";
	    DisplayOption[DisplayOption["FitToWidth"] = 1] = "FitToWidth";
	    DisplayOption[DisplayOption["ActualSize"] = 2] = "ActualSize";
	})(DisplayOption = exports.DisplayOption || (exports.DisplayOption = {}));
	var BackgroundType;
	(function (BackgroundType) {
	    BackgroundType[BackgroundType["Default"] = 0] = "Default";
	    BackgroundType[BackgroundType["Transparent"] = 1] = "Transparent";
	})(BackgroundType = exports.BackgroundType || (exports.BackgroundType = {}));
	var VisualContainerDisplayMode;
	(function (VisualContainerDisplayMode) {
	    VisualContainerDisplayMode[VisualContainerDisplayMode["Visible"] = 0] = "Visible";
	    VisualContainerDisplayMode[VisualContainerDisplayMode["Hidden"] = 1] = "Hidden";
	})(VisualContainerDisplayMode = exports.VisualContainerDisplayMode || (exports.VisualContainerDisplayMode = {}));
	var LayoutType;
	(function (LayoutType) {
	    LayoutType[LayoutType["Master"] = 0] = "Master";
	    LayoutType[LayoutType["Custom"] = 1] = "Custom";
	    LayoutType[LayoutType["MobilePortrait"] = 2] = "MobilePortrait";
	    LayoutType[LayoutType["MobileLandscape"] = 3] = "MobileLandscape";
	})(LayoutType = exports.LayoutType || (exports.LayoutType = {}));
	var SectionVisibility;
	(function (SectionVisibility) {
	    SectionVisibility[SectionVisibility["AlwaysVisible"] = 0] = "AlwaysVisible";
	    SectionVisibility[SectionVisibility["HiddenInViewMode"] = 1] = "HiddenInViewMode";
	})(SectionVisibility = exports.SectionVisibility || (exports.SectionVisibility = {}));
	var Permissions;
	(function (Permissions) {
	    Permissions[Permissions["Read"] = 0] = "Read";
	    Permissions[Permissions["ReadWrite"] = 1] = "ReadWrite";
	    Permissions[Permissions["Copy"] = 2] = "Copy";
	    Permissions[Permissions["Create"] = 4] = "Create";
	    Permissions[Permissions["All"] = 7] = "All";
	})(Permissions = exports.Permissions || (exports.Permissions = {}));
	var ViewMode;
	(function (ViewMode) {
	    ViewMode[ViewMode["View"] = 0] = "View";
	    ViewMode[ViewMode["Edit"] = 1] = "Edit";
	})(ViewMode = exports.ViewMode || (exports.ViewMode = {}));
	var TokenType;
	(function (TokenType) {
	    TokenType[TokenType["Aad"] = 0] = "Aad";
	    TokenType[TokenType["Embed"] = 1] = "Embed";
	})(TokenType = exports.TokenType || (exports.TokenType = {}));
	var FilterType;
	(function (FilterType) {
	    FilterType[FilterType["Advanced"] = 0] = "Advanced";
	    FilterType[FilterType["Basic"] = 1] = "Basic";
	    FilterType[FilterType["Unknown"] = 2] = "Unknown";
	    FilterType[FilterType["IncludeExclude"] = 3] = "IncludeExclude";
	    FilterType[FilterType["RelativeDate"] = 4] = "RelativeDate";
	    FilterType[FilterType["TopN"] = 5] = "TopN";
	})(FilterType = exports.FilterType || (exports.FilterType = {}));
	var RelativeDateFilterTimeUnit;
	(function (RelativeDateFilterTimeUnit) {
	    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Days"] = 0] = "Days";
	    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Weeks"] = 1] = "Weeks";
	    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarWeeks"] = 2] = "CalendarWeeks";
	    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Months"] = 3] = "Months";
	    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarMonths"] = 4] = "CalendarMonths";
	    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Years"] = 5] = "Years";
	    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarYears"] = 6] = "CalendarYears";
	})(RelativeDateFilterTimeUnit = exports.RelativeDateFilterTimeUnit || (exports.RelativeDateFilterTimeUnit = {}));
	var RelativeDateOperators;
	(function (RelativeDateOperators) {
	    RelativeDateOperators[RelativeDateOperators["InLast"] = 0] = "InLast";
	    RelativeDateOperators[RelativeDateOperators["InThis"] = 1] = "InThis";
	    RelativeDateOperators[RelativeDateOperators["InNext"] = 2] = "InNext";
	})(RelativeDateOperators = exports.RelativeDateOperators || (exports.RelativeDateOperators = {}));
	var Filter = /** @class */ (function () {
	    function Filter(target, filterType) {
	        this.target = target;
	        this.filterType = filterType;
	    }
	    Filter.prototype.toJSON = function () {
	        return {
	            $schema: this.schemaUrl,
	            target: this.target,
	            filterType: this.filterType
	        };
	    };
	    ;
	    return Filter;
	}());
	exports.Filter = Filter;
	var NotSupportedFilter = /** @class */ (function (_super) {
	    __extends(NotSupportedFilter, _super);
	    function NotSupportedFilter(target, message, notSupportedTypeName) {
	        var _this = _super.call(this, target, FilterType.Unknown) || this;
	        _this.message = message;
	        _this.notSupportedTypeName = notSupportedTypeName;
	        _this.schemaUrl = NotSupportedFilter.schemaUrl;
	        return _this;
	    }
	    NotSupportedFilter.prototype.toJSON = function () {
	        var filter = _super.prototype.toJSON.call(this);
	        filter.message = this.message;
	        filter.notSupportedTypeName = this.notSupportedTypeName;
	        return filter;
	    };
	    NotSupportedFilter.schemaUrl = "http://powerbi.com/product/schema#notSupported";
	    return NotSupportedFilter;
	}(Filter));
	exports.NotSupportedFilter = NotSupportedFilter;
	var IncludeExcludeFilter = /** @class */ (function (_super) {
	    __extends(IncludeExcludeFilter, _super);
	    function IncludeExcludeFilter(target, isExclude, values) {
	        var _this = _super.call(this, target, FilterType.IncludeExclude) || this;
	        _this.values = values;
	        _this.isExclude = isExclude;
	        _this.schemaUrl = IncludeExcludeFilter.schemaUrl;
	        return _this;
	    }
	    IncludeExcludeFilter.prototype.toJSON = function () {
	        var filter = _super.prototype.toJSON.call(this);
	        filter.isExclude = this.isExclude;
	        filter.values = this.values;
	        return filter;
	    };
	    IncludeExcludeFilter.schemaUrl = "http://powerbi.com/product/schema#includeExclude";
	    return IncludeExcludeFilter;
	}(Filter));
	exports.IncludeExcludeFilter = IncludeExcludeFilter;
	var TopNFilter = /** @class */ (function (_super) {
	    __extends(TopNFilter, _super);
	    function TopNFilter(target, operator, itemCount) {
	        var _this = _super.call(this, target, FilterType.TopN) || this;
	        _this.operator = operator;
	        _this.itemCount = itemCount;
	        _this.schemaUrl = TopNFilter.schemaUrl;
	        return _this;
	    }
	    TopNFilter.prototype.toJSON = function () {
	        var filter = _super.prototype.toJSON.call(this);
	        filter.operator = this.operator;
	        filter.itemCount = this.itemCount;
	        return filter;
	    };
	    TopNFilter.schemaUrl = "http://powerbi.com/product/schema#topN";
	    return TopNFilter;
	}(Filter));
	exports.TopNFilter = TopNFilter;
	var RelativeDateFilter = /** @class */ (function (_super) {
	    __extends(RelativeDateFilter, _super);
	    function RelativeDateFilter(target, operator, timeUnitsCount, timeUnitType, includeToday) {
	        var _this = _super.call(this, target, FilterType.RelativeDate) || this;
	        _this.operator = operator;
	        _this.timeUnitsCount = timeUnitsCount;
	        _this.timeUnitType = timeUnitType;
	        _this.includeToday = includeToday;
	        _this.schemaUrl = RelativeDateFilter.schemaUrl;
	        return _this;
	    }
	    RelativeDateFilter.prototype.toJSON = function () {
	        var filter = _super.prototype.toJSON.call(this);
	        filter.operator = this.operator;
	        filter.timeUnitsCount = this.timeUnitsCount;
	        filter.timeUnitType = this.timeUnitType;
	        filter.includeToday = this.includeToday;
	        return filter;
	    };
	    RelativeDateFilter.schemaUrl = "http://powerbi.com/product/schema#relativeDate";
	    return RelativeDateFilter;
	}(Filter));
	exports.RelativeDateFilter = RelativeDateFilter;
	var BasicFilter = /** @class */ (function (_super) {
	    __extends(BasicFilter, _super);
	    function BasicFilter(target, operator) {
	        var values = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            values[_i - 2] = arguments[_i];
	        }
	        var _this = _super.call(this, target, FilterType.Basic) || this;
	        _this.operator = operator;
	        _this.schemaUrl = BasicFilter.schemaUrl;
	        if (values.length === 0 && operator !== "All") {
	            throw new Error("values must be a non-empty array unless your operator is \"All\".");
	        }
	        /**
	         * Accept values as array instead of as individual arguments
	         * new BasicFilter('a', 'b', 1, 2);
	         * new BasicFilter('a', 'b', [1,2]);
	         */
	        if (Array.isArray(values[0])) {
	            _this.values = values[0];
	        }
	        else {
	            _this.values = values;
	        }
	        return _this;
	    }
	    BasicFilter.prototype.toJSON = function () {
	        var filter = _super.prototype.toJSON.call(this);
	        filter.operator = this.operator;
	        filter.values = this.values;
	        return filter;
	    };
	    BasicFilter.schemaUrl = "http://powerbi.com/product/schema#basic";
	    return BasicFilter;
	}(Filter));
	exports.BasicFilter = BasicFilter;
	var BasicFilterWithKeys = /** @class */ (function (_super) {
	    __extends(BasicFilterWithKeys, _super);
	    function BasicFilterWithKeys(target, operator, values, keyValues) {
	        var _this = _super.call(this, target, operator, values) || this;
	        _this.keyValues = keyValues;
	        _this.target = target;
	        var numberOfKeys = target.keys ? target.keys.length : 0;
	        if (numberOfKeys > 0 && !keyValues) {
	            throw new Error("You shold pass the values to be filtered for each key. You passed: no values and " + numberOfKeys + " keys");
	        }
	        if (numberOfKeys === 0 && keyValues && keyValues.length > 0) {
	            throw new Error("You passed key values but your target object doesn't contain the keys to be filtered");
	        }
	        for (var i = 0; i < _this.keyValues.length; i++) {
	            if (_this.keyValues[i]) {
	                var lengthOfArray = _this.keyValues[i].length;
	                if (lengthOfArray !== numberOfKeys) {
	                    throw new Error("Each tuple of key values should contain a value for each of the keys. You passed: " + lengthOfArray + " values and " + numberOfKeys + " keys");
	                }
	            }
	        }
	        return _this;
	    }
	    BasicFilterWithKeys.prototype.toJSON = function () {
	        var filter = _super.prototype.toJSON.call(this);
	        filter.keyValues = this.keyValues;
	        return filter;
	    };
	    return BasicFilterWithKeys;
	}(BasicFilter));
	exports.BasicFilterWithKeys = BasicFilterWithKeys;
	var AdvancedFilter = /** @class */ (function (_super) {
	    __extends(AdvancedFilter, _super);
	    function AdvancedFilter(target, logicalOperator) {
	        var conditions = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            conditions[_i - 2] = arguments[_i];
	        }
	        var _this = _super.call(this, target, FilterType.Advanced) || this;
	        _this.schemaUrl = AdvancedFilter.schemaUrl;
	        // Guard statements
	        if (typeof logicalOperator !== "string" || logicalOperator.length === 0) {
	            // TODO: It would be nicer to list out the possible logical operators.
	            throw new Error("logicalOperator must be a valid operator, You passed: " + logicalOperator);
	        }
	        _this.logicalOperator = logicalOperator;
	        var extractedConditions;
	        /**
	         * Accept conditions as array instead of as individual arguments
	         * new AdvancedFilter('a', 'b', "And", { value: 1, operator: "Equals" }, { value: 2, operator: "IsGreaterThan" });
	         * new AdvancedFilter('a', 'b', "And", [{ value: 1, operator: "Equals" }, { value: 2, operator: "IsGreaterThan" }]);
	         */
	        if (Array.isArray(conditions[0])) {
	            extractedConditions = conditions[0];
	        }
	        else {
	            extractedConditions = conditions;
	        }
	        if (extractedConditions.length === 0) {
	            throw new Error("conditions must be a non-empty array. You passed: " + conditions);
	        }
	        if (extractedConditions.length > 2) {
	            throw new Error("AdvancedFilters may not have more than two conditions. You passed: " + conditions.length);
	        }
	        if (extractedConditions.length === 1 && logicalOperator !== "And") {
	            throw new Error("Logical Operator must be \"And\" when there is only one condition provided");
	        }
	        _this.conditions = extractedConditions;
	        return _this;
	    }
	    AdvancedFilter.prototype.toJSON = function () {
	        var filter = _super.prototype.toJSON.call(this);
	        filter.logicalOperator = this.logicalOperator;
	        filter.conditions = this.conditions;
	        return filter;
	    };
	    AdvancedFilter.schemaUrl = "http://powerbi.com/product/schema#advanced";
	    return AdvancedFilter;
	}(Filter));
	exports.AdvancedFilter = AdvancedFilter;
	function isFilterKeyColumnsTarget(target) {
	    return isColumn(target) && !!target.keys;
	}
	exports.isFilterKeyColumnsTarget = isFilterKeyColumnsTarget;
	function isBasicFilterWithKeys(filter) {
	    return getFilterType(filter) === FilterType.Basic && !!filter.keyValues;
	}
	exports.isBasicFilterWithKeys = isBasicFilterWithKeys;
	function getFilterType(filter) {
	    if (filter.filterType) {
	        return filter.filterType;
	    }
	    var basicFilter = filter;
	    var advancedFilter = filter;
	    if ((typeof basicFilter.operator === "string")
	        && (Array.isArray(basicFilter.values))) {
	        return FilterType.Basic;
	    }
	    else if ((typeof advancedFilter.logicalOperator === "string")
	        && (Array.isArray(advancedFilter.conditions))) {
	        return FilterType.Advanced;
	    }
	    else {
	        return FilterType.Unknown;
	    }
	}
	exports.getFilterType = getFilterType;
	function isMeasure(arg) {
	    return arg.table !== undefined && arg.measure !== undefined;
	}
	exports.isMeasure = isMeasure;
	function isColumn(arg) {
	    return arg.table !== undefined && arg.column !== undefined;
	}
	exports.isColumn = isColumn;
	function isHierarchy(arg) {
	    return arg.table !== undefined && arg.hierarchy !== undefined && arg.hierarchyLevel !== undefined;
	}
	exports.isHierarchy = isHierarchy;
	var QnaMode;
	(function (QnaMode) {
	    QnaMode[QnaMode["Interactive"] = 0] = "Interactive";
	    QnaMode[QnaMode["ResultOnly"] = 1] = "ResultOnly";
	})(QnaMode = exports.QnaMode || (exports.QnaMode = {}));
	var ExportDataType;
	(function (ExportDataType) {
	    ExportDataType[ExportDataType["Summarized"] = 0] = "Summarized";
	    ExportDataType[ExportDataType["Underlying"] = 1] = "Underlying";
	})(ExportDataType = exports.ExportDataType || (exports.ExportDataType = {}));
	var BookmarksPlayMode;
	(function (BookmarksPlayMode) {
	    BookmarksPlayMode[BookmarksPlayMode["Off"] = 0] = "Off";
	    BookmarksPlayMode[BookmarksPlayMode["Presentation"] = 1] = "Presentation";
	})(BookmarksPlayMode = exports.BookmarksPlayMode || (exports.BookmarksPlayMode = {}));
	function normalizeError(error) {
	    var message = error.message;
	    if (!message) {
	        message = error.path + " is invalid. Not meeting " + error.keyword + " constraint";
	    }
	    return {
	        message: message
	    };
	}
	function validatePlayBookmarkRequest(input) {
	    var errors = exports.Validators.playBookmarkRequestValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validatePlayBookmarkRequest = validatePlayBookmarkRequest;
	function validateAddBookmarkRequest(input) {
	    var errors = exports.Validators.addBookmarkRequestValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateAddBookmarkRequest = validateAddBookmarkRequest;
	function validateApplyBookmarkByNameRequest(input) {
	    var errors = exports.Validators.applyBookmarkByNameRequestValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateApplyBookmarkByNameRequest = validateApplyBookmarkByNameRequest;
	function validateApplyBookmarkStateRequest(input) {
	    var errors = exports.Validators.applyBookmarkStateRequestValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateApplyBookmarkStateRequest = validateApplyBookmarkStateRequest;
	function validateSettings(input) {
	    var errors = exports.Validators.settingsValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateSettings = validateSettings;
	function validateCustomPageSize(input) {
	    var errors = exports.Validators.customPageSizeValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateCustomPageSize = validateCustomPageSize;
	function validateExtension(input) {
	    var errors = exports.Validators.extentionValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateExtension = validateExtension;
	function validateReportLoad(input) {
	    var errors = exports.Validators.reportLoadValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateReportLoad = validateReportLoad;
	function validateCreateReport(input) {
	    var errors = exports.Validators.reportCreateValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateCreateReport = validateCreateReport;
	function validateDashboardLoad(input) {
	    var errors = exports.Validators.dashboardLoadValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateDashboardLoad = validateDashboardLoad;
	function validateTileLoad(input) {
	    var errors = exports.Validators.tileLoadValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateTileLoad = validateTileLoad;
	function validatePage(input) {
	    var errors = exports.Validators.pageValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validatePage = validatePage;
	function validateFilter(input) {
	    var errors = exports.Validators.filtersValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateFilter = validateFilter;
	function validateSaveAsParameters(input) {
	    var errors = exports.Validators.saveAsParametersValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateSaveAsParameters = validateSaveAsParameters;
	function validateLoadQnaConfiguration(input) {
	    var errors = exports.Validators.loadQnaValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateLoadQnaConfiguration = validateLoadQnaConfiguration;
	function validateQnaInterpretInputData(input) {
	    var errors = exports.Validators.qnaInterpretInputDataValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateQnaInterpretInputData = validateQnaInterpretInputData;
	function validateExportDataRequest(input) {
	    var errors = exports.Validators.exportDataRequestValidator.validate(input);
	    return errors ? errors.map(normalizeError) : undefined;
	}
	exports.validateExportDataRequest = validateExportDataRequest;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var typeValidator_1 = __webpack_require__(2);
	var extensionsValidator_1 = __webpack_require__(3);
	var settingsValidator_1 = __webpack_require__(5);
	var bookmarkValidator_1 = __webpack_require__(6);
	var filtersValidator_1 = __webpack_require__(7);
	var fieldRequiredValidator_1 = __webpack_require__(8);
	var anyOfValidator_1 = __webpack_require__(9);
	var reportLoadValidator_1 = __webpack_require__(10);
	var reportCreateValidator_1 = __webpack_require__(11);
	var dashboardLoadValidator_1 = __webpack_require__(12);
	var tileLoadValidator_1 = __webpack_require__(13);
	var pageValidator_1 = __webpack_require__(14);
	var qnaValidator_1 = __webpack_require__(15);
	var saveAsParametersValidator_1 = __webpack_require__(16);
	var mapValidator_1 = __webpack_require__(17);
	var layoutValidator_1 = __webpack_require__(18);
	var exportDataValidator_1 = __webpack_require__(19);
	exports.Validators = {
	    advancedFilterTypeValidator: new typeValidator_1.EnumValidator([0]),
	    advancedFilterValidator: new filtersValidator_1.AdvancedFilterValidator(),
	    anyArrayValidator: new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator()])]),
	    anyFilterValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.BasicFilterValidator(), new filtersValidator_1.AdvancedFilterValidator(), new filtersValidator_1.IncludeExcludeFilterValidator(), new filtersValidator_1.NotSupportedFilterValidator(), new filtersValidator_1.RelativeDateFilterValidator(), new filtersValidator_1.TopNFilterValidator()]),
	    anyValueValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator()]),
	    basicFilterTypeValidator: new typeValidator_1.EnumValidator([1]),
	    basicFilterValidator: new filtersValidator_1.BasicFilterValidator(),
	    playBookmarkRequestValidator: new bookmarkValidator_1.PlayBookmarkRequestValidator(),
	    addBookmarkRequestValidator: new bookmarkValidator_1.AddBookmarkRequestValidator(),
	    applyBookmarkByNameRequestValidator: new bookmarkValidator_1.ApplyBookmarkByNameRequestValidator(),
	    applyBookmarkStateRequestValidator: new bookmarkValidator_1.ApplyBookmarkStateRequestValidator(),
	    applyBookmarkValidator: new anyOfValidator_1.AnyOfValidator([new bookmarkValidator_1.ApplyBookmarkByNameRequestValidator(), new bookmarkValidator_1.ApplyBookmarkStateRequestValidator()]),
	    backgroundValidator: new typeValidator_1.EnumValidator([0, 1]),
	    booleanArrayValidator: new typeValidator_1.BooleanArrayValidator(),
	    booleanValidator: new typeValidator_1.BooleanValidator(),
	    commandExtensionValidator: new extensionsValidator_1.CommandExtensionValidator(),
	    conditionItemValidator: new filtersValidator_1.ConditionItemValidator(),
	    customLayoutValidator: new layoutValidator_1.CustomLayoutValidator(),
	    customLayoutDisplayOptionValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
	    customPageSizeValidator: new pageValidator_1.CustomPageSizeValidator(),
	    dashboardLoadValidator: new dashboardLoadValidator_1.DashboardLoadValidator(),
	    displayStateModeValidator: new typeValidator_1.EnumValidator([0, 1]),
	    displayStateValidator: new layoutValidator_1.DisplayStateValidator(),
	    exportDataRequestValidator: new exportDataValidator_1.ExportDataRequestValidator(),
	    extensionPointsValidator: new extensionsValidator_1.ExtensionPointsValidator(),
	    extentionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.ExtensionValidator()]),
	    extentionValidator: new extensionsValidator_1.ExtensionValidator(),
	    fieldRequiredValidator: new fieldRequiredValidator_1.FieldRequiredValidator(),
	    filterColumnTargetValidator: new filtersValidator_1.FilterColumnTargetValidator(),
	    filterConditionsValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.ConditionItemValidator()]),
	    filterHierarchyTargetValidator: new filtersValidator_1.FilterHierarchyTargetValidator(),
	    filterMeasureTargetValidator: new filtersValidator_1.FilterMeasureTargetValidator(),
	    filterTargetValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator()]),
	    filtersArrayValidator: new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.BasicFilterValidator(), new filtersValidator_1.AdvancedFilterValidator(), new filtersValidator_1.RelativeDateFilterValidator()])]),
	    filtersValidator: new filtersValidator_1.FilterValidator(),
	    includeExcludeFilterValidator: new filtersValidator_1.IncludeExcludeFilterValidator(),
	    includeExludeFilterTypeValidator: new typeValidator_1.EnumValidator([3]),
	    layoutTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3]),
	    loadQnaValidator: new qnaValidator_1.LoadQnaValidator(),
	    menuExtensionValidator: new extensionsValidator_1.MenuExtensionValidator(),
	    notSupportedFilterTypeValidator: new typeValidator_1.EnumValidator([2]),
	    notSupportedFilterValidator: new filtersValidator_1.NotSupportedFilterValidator(),
	    numberArrayValidator: new typeValidator_1.NumberArrayValidator(),
	    numberValidator: new typeValidator_1.NumberValidator(),
	    pageLayoutValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new layoutValidator_1.VisualLayoutValidator()]),
	    pageSizeTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5]),
	    pageSizeValidator: new pageValidator_1.PageSizeValidator(),
	    pageValidator: new pageValidator_1.PageValidator(),
	    pageViewFieldValidator: new pageValidator_1.PageViewFieldValidator(),
	    pagesLayoutValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new layoutValidator_1.PageLayoutValidator()]),
	    permissionsValidator: new typeValidator_1.EnumValidator([0, 1, 2, 4, 7]),
	    qnaInterpretInputDataValidator: new qnaValidator_1.QnaInterpretInputDataValidator(),
	    qnaSettingValidator: new qnaValidator_1.QnaSettingsValidator(),
	    relativeDateFilterOperatorValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
	    relativeDateFilterTimeUnitTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6]),
	    relativeDateFilterTypeValidator: new typeValidator_1.EnumValidator([4]),
	    relativeDateFilterValidator: new filtersValidator_1.RelativeDateFilterValidator(),
	    reportCreateValidator: new reportCreateValidator_1.ReportCreateValidator(),
	    reportLoadValidator: new reportLoadValidator_1.ReportLoadValidator(),
	    saveAsParametersValidator: new saveAsParametersValidator_1.SaveAsParametersValidator(),
	    settingsValidator: new settingsValidator_1.SettingsValidator(),
	    stringArrayValidator: new typeValidator_1.StringArrayValidator(),
	    stringValidator: new typeValidator_1.StringValidator(),
	    tileLoadValidator: new tileLoadValidator_1.TileLoadValidator(),
	    tokenTypeValidator: new typeValidator_1.EnumValidator([0, 1]),
	    topNFilterTypeValidator: new typeValidator_1.EnumValidator([5]),
	    topNFilterValidator: new filtersValidator_1.TopNFilterValidator(),
	    viewModeValidator: new typeValidator_1.EnumValidator([0, 1]),
	    visualLayoutValidator: new layoutValidator_1.VisualLayoutValidator(),
	};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var ObjectValidator = /** @class */ (function () {
	    function ObjectValidator() {
	    }
	    ObjectValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        if (typeof input !== "object" || Array.isArray(input)) {
	            return [{
	                    message: field !== undefined ? field + " must be an object" : "input must be an object",
	                    path: path,
	                    keyword: "type"
	                }];
	        }
	        return null;
	    };
	    return ObjectValidator;
	}());
	exports.ObjectValidator = ObjectValidator;
	var ArrayValidator = /** @class */ (function () {
	    function ArrayValidator(itemValidators) {
	        this.itemValidators = itemValidators;
	    }
	    ArrayValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        if (!(Array.isArray(input))) {
	            return [{
	                    message: field + " property is invalid",
	                    path: (path ? path + "." : "") + field,
	                    keyword: "type"
	                }];
	        }
	        for (var i = 0; i < input.length; i++) {
	            var fieldsPath = (path ? path + "." : "") + field + "." + i;
	            for (var _i = 0, _a = this.itemValidators; _i < _a.length; _i++) {
	                var validator = _a[_i];
	                var errors = validator.validate(input[i], fieldsPath, field);
	                if (errors) {
	                    return [{
	                            message: field + " property is invalid",
	                            path: (path ? path + "." : "") + field,
	                            keyword: "type"
	                        }];
	                }
	            }
	        }
	        return null;
	    };
	    return ArrayValidator;
	}());
	exports.ArrayValidator = ArrayValidator;
	var TypeValidator = /** @class */ (function () {
	    function TypeValidator(expectedType) {
	        this.expectedType = expectedType;
	    }
	    TypeValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        if (!(typeof input === this.expectedType)) {
	            return [{
	                    message: field + " must be a " + this.expectedType,
	                    path: (path ? path + "." : "") + field,
	                    keyword: "type"
	                }];
	        }
	        return null;
	    };
	    return TypeValidator;
	}());
	exports.TypeValidator = TypeValidator;
	var StringValidator = /** @class */ (function (_super) {
	    __extends(StringValidator, _super);
	    function StringValidator() {
	        return _super.call(this, "string") || this;
	    }
	    return StringValidator;
	}(TypeValidator));
	exports.StringValidator = StringValidator;
	var BooleanValidator = /** @class */ (function (_super) {
	    __extends(BooleanValidator, _super);
	    function BooleanValidator() {
	        return _super.call(this, "boolean") || this;
	    }
	    return BooleanValidator;
	}(TypeValidator));
	exports.BooleanValidator = BooleanValidator;
	var NumberValidator = /** @class */ (function (_super) {
	    __extends(NumberValidator, _super);
	    function NumberValidator() {
	        return _super.call(this, "number") || this;
	    }
	    return NumberValidator;
	}(TypeValidator));
	exports.NumberValidator = NumberValidator;
	var ValueValidator = /** @class */ (function () {
	    function ValueValidator(possibleValues) {
	        this.possibleValues = possibleValues;
	    }
	    ValueValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        if (this.possibleValues.indexOf(input) < 0) {
	            return [{
	                    message: field + " property is invalid",
	                    path: (path ? path + "." : "") + field,
	                    keyword: "invalid"
	                }];
	        }
	        return null;
	    };
	    return ValueValidator;
	}());
	exports.ValueValidator = ValueValidator;
	var EnumValidator = /** @class */ (function (_super) {
	    __extends(EnumValidator, _super);
	    function EnumValidator(possibleValues) {
	        var _this = _super.call(this) || this;
	        _this.possibleValues = possibleValues;
	        return _this;
	    }
	    EnumValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var valueValidator = new ValueValidator(this.possibleValues);
	        return valueValidator.validate(input, path, field);
	    };
	    return EnumValidator;
	}(NumberValidator));
	exports.EnumValidator = EnumValidator;
	var StringArrayValidator = /** @class */ (function (_super) {
	    __extends(StringArrayValidator, _super);
	    function StringArrayValidator() {
	        return _super.call(this, [new StringValidator()]) || this;
	    }
	    StringArrayValidator.prototype.validate = function (input, path, field) {
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return [{
	                    message: field + " must be an array of strings",
	                    path: (path ? path + "." : "") + field,
	                    keyword: "type"
	                }];
	        }
	        return null;
	    };
	    return StringArrayValidator;
	}(ArrayValidator));
	exports.StringArrayValidator = StringArrayValidator;
	var BooleanArrayValidator = /** @class */ (function (_super) {
	    __extends(BooleanArrayValidator, _super);
	    function BooleanArrayValidator() {
	        return _super.call(this, [new BooleanValidator()]) || this;
	    }
	    BooleanArrayValidator.prototype.validate = function (input, path, field) {
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return [{
	                    message: field + " must be an array of booleans",
	                    path: (path ? path + "." : "") + field,
	                    keyword: "type"
	                }];
	        }
	        return null;
	    };
	    return BooleanArrayValidator;
	}(ArrayValidator));
	exports.BooleanArrayValidator = BooleanArrayValidator;
	var NumberArrayValidator = /** @class */ (function (_super) {
	    __extends(NumberArrayValidator, _super);
	    function NumberArrayValidator() {
	        return _super.call(this, [new NumberValidator()]) || this;
	    }
	    NumberArrayValidator.prototype.validate = function (input, path, field) {
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return [{
	                    message: field + " must be an array of numbers",
	                    path: (path ? path + "." : "") + field,
	                    keyword: "type"
	                }];
	        }
	        return null;
	    };
	    return NumberArrayValidator;
	}(ArrayValidator));
	exports.NumberArrayValidator = NumberArrayValidator;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var MenuExtensionValidator = /** @class */ (function (_super) {
	    __extends(MenuExtensionValidator, _super);
	    function MenuExtensionValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    MenuExtensionValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "title",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "icon",
	                validators: [validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return MenuExtensionValidator;
	}(typeValidator_1.ObjectValidator));
	exports.MenuExtensionValidator = MenuExtensionValidator;
	var ExtensionPointsValidator = /** @class */ (function (_super) {
	    __extends(ExtensionPointsValidator, _super);
	    function ExtensionPointsValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ExtensionPointsValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "visualContextMenu",
	                validators: [validator_1.Validators.menuExtensionValidator]
	            },
	            {
	                field: "visualOptionsMenu",
	                validators: [validator_1.Validators.menuExtensionValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ExtensionPointsValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ExtensionPointsValidator = ExtensionPointsValidator;
	var ExtensionItemValidator = /** @class */ (function (_super) {
	    __extends(ExtensionItemValidator, _super);
	    function ExtensionItemValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ExtensionItemValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "name",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "extend",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.extensionPointsValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ExtensionItemValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ExtensionItemValidator = ExtensionItemValidator;
	var CommandExtensionValidator = /** @class */ (function (_super) {
	    __extends(CommandExtensionValidator, _super);
	    function CommandExtensionValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CommandExtensionValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "title",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "icon",
	                validators: [validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return CommandExtensionValidator;
	}(ExtensionItemValidator));
	exports.CommandExtensionValidator = CommandExtensionValidator;
	var ExtensionValidator = /** @class */ (function (_super) {
	    __extends(ExtensionValidator, _super);
	    function ExtensionValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ExtensionValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "command",
	                validators: [validator_1.Validators.commandExtensionValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ExtensionValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ExtensionValidator = ExtensionValidator;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var MultipleFieldsValidator = /** @class */ (function () {
	    function MultipleFieldsValidator(fieldValidatorsPairs) {
	        this.fieldValidatorsPairs = fieldValidatorsPairs;
	    }
	    MultipleFieldsValidator.prototype.validate = function (input, path, field) {
	        if (!this.fieldValidatorsPairs) {
	            return null;
	        }
	        var fieldsPath = path ? path + "." + field : field;
	        for (var _i = 0, _a = this.fieldValidatorsPairs; _i < _a.length; _i++) {
	            var fieldValidators = _a[_i];
	            for (var _b = 0, _c = fieldValidators.validators; _b < _c.length; _b++) {
	                var validator = _c[_b];
	                var errors = validator.validate(input[fieldValidators.field], fieldsPath, fieldValidators.field);
	                if (errors) {
	                    return errors;
	                }
	            }
	        }
	        return null;
	    };
	    return MultipleFieldsValidator;
	}());
	exports.MultipleFieldsValidator = MultipleFieldsValidator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var SettingsValidator = /** @class */ (function (_super) {
	    __extends(SettingsValidator, _super);
	    function SettingsValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    SettingsValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "filterPaneEnabled",
	                validators: [validator_1.Validators.booleanValidator]
	            },
	            {
	                field: "navContentPaneEnabled",
	                validators: [validator_1.Validators.booleanValidator]
	            },
	            {
	                field: "bookmarksPaneEnabled",
	                validators: [validator_1.Validators.booleanValidator]
	            },
	            {
	                field: "useCustomSaveAsDialog",
	                validators: [validator_1.Validators.booleanValidator]
	            },
	            {
	                field: "extensions",
	                validators: [validator_1.Validators.extentionArrayValidator]
	            },
	            {
	                field: "layoutType",
	                validators: [validator_1.Validators.layoutTypeValidator]
	            },
	            {
	                field: "customLayout",
	                validators: [validator_1.Validators.customLayoutValidator]
	            },
	            {
	                field: "background",
	                validators: [validator_1.Validators.backgroundValidator]
	            },
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return SettingsValidator;
	}(typeValidator_1.ObjectValidator));
	exports.SettingsValidator = SettingsValidator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var PlayBookmarkRequestValidator = /** @class */ (function (_super) {
	    __extends(PlayBookmarkRequestValidator, _super);
	    function PlayBookmarkRequestValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PlayBookmarkRequestValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "playMode",
	                validators: [validator_1.Validators.fieldRequiredValidator, new typeValidator_1.EnumValidator([0, 1])]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return PlayBookmarkRequestValidator;
	}(typeValidator_1.ObjectValidator));
	exports.PlayBookmarkRequestValidator = PlayBookmarkRequestValidator;
	var AddBookmarkRequestValidator = /** @class */ (function (_super) {
	    __extends(AddBookmarkRequestValidator, _super);
	    function AddBookmarkRequestValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    AddBookmarkRequestValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "state",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "displayName",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "apply",
	                validators: [validator_1.Validators.booleanValidator]
	            },
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return AddBookmarkRequestValidator;
	}(typeValidator_1.ObjectValidator));
	exports.AddBookmarkRequestValidator = AddBookmarkRequestValidator;
	var ApplyBookmarkByNameRequestValidator = /** @class */ (function (_super) {
	    __extends(ApplyBookmarkByNameRequestValidator, _super);
	    function ApplyBookmarkByNameRequestValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ApplyBookmarkByNameRequestValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "name",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ApplyBookmarkByNameRequestValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ApplyBookmarkByNameRequestValidator = ApplyBookmarkByNameRequestValidator;
	var ApplyBookmarkStateRequestValidator = /** @class */ (function (_super) {
	    __extends(ApplyBookmarkStateRequestValidator, _super);
	    function ApplyBookmarkStateRequestValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ApplyBookmarkStateRequestValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "state",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ApplyBookmarkStateRequestValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ApplyBookmarkStateRequestValidator = ApplyBookmarkStateRequestValidator;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var FilterColumnTargetValidator = /** @class */ (function (_super) {
	    __extends(FilterColumnTargetValidator, _super);
	    function FilterColumnTargetValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    FilterColumnTargetValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "table",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "column",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return FilterColumnTargetValidator;
	}(typeValidator_1.ObjectValidator));
	exports.FilterColumnTargetValidator = FilterColumnTargetValidator;
	var FilterHierarchyTargetValidator = /** @class */ (function (_super) {
	    __extends(FilterHierarchyTargetValidator, _super);
	    function FilterHierarchyTargetValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    FilterHierarchyTargetValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "table",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "hierarchy",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "hierarchyLevel",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return FilterHierarchyTargetValidator;
	}(typeValidator_1.ObjectValidator));
	exports.FilterHierarchyTargetValidator = FilterHierarchyTargetValidator;
	var FilterMeasureTargetValidator = /** @class */ (function (_super) {
	    __extends(FilterMeasureTargetValidator, _super);
	    function FilterMeasureTargetValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    FilterMeasureTargetValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "table",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "measure",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return FilterMeasureTargetValidator;
	}(typeValidator_1.ObjectValidator));
	exports.FilterMeasureTargetValidator = FilterMeasureTargetValidator;
	var BasicFilterValidator = /** @class */ (function (_super) {
	    __extends(BasicFilterValidator, _super);
	    function BasicFilterValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    BasicFilterValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "target",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
	            },
	            {
	                field: "operator",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "values",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyArrayValidator]
	            },
	            {
	                field: "filterType",
	                validators: [validator_1.Validators.basicFilterTypeValidator]
	            },
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return BasicFilterValidator;
	}(typeValidator_1.ObjectValidator));
	exports.BasicFilterValidator = BasicFilterValidator;
	var AdvancedFilterValidator = /** @class */ (function (_super) {
	    __extends(AdvancedFilterValidator, _super);
	    function AdvancedFilterValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    AdvancedFilterValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "target",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
	            },
	            {
	                field: "logicalOperator",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "conditions",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterConditionsValidator]
	            },
	            {
	                field: "filterType",
	                validators: [validator_1.Validators.advancedFilterTypeValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return AdvancedFilterValidator;
	}(typeValidator_1.ObjectValidator));
	exports.AdvancedFilterValidator = AdvancedFilterValidator;
	var RelativeDateFilterValidator = /** @class */ (function (_super) {
	    __extends(RelativeDateFilterValidator, _super);
	    function RelativeDateFilterValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    RelativeDateFilterValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "target",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
	            },
	            {
	                field: "operator",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateFilterOperatorValidator]
	            },
	            {
	                field: "timeUnitsCount",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.numberValidator]
	            },
	            {
	                field: "timeUnitType",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateFilterTimeUnitTypeValidator]
	            },
	            {
	                field: "includeToday",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.booleanValidator]
	            },
	            {
	                field: "filterType",
	                validators: [validator_1.Validators.relativeDateFilterTypeValidator]
	            },
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return RelativeDateFilterValidator;
	}(typeValidator_1.ObjectValidator));
	exports.RelativeDateFilterValidator = RelativeDateFilterValidator;
	var TopNFilterValidator = /** @class */ (function (_super) {
	    __extends(TopNFilterValidator, _super);
	    function TopNFilterValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    TopNFilterValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "target",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
	            },
	            {
	                field: "operator",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "itemCount",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.numberValidator]
	            },
	            {
	                field: "filterType",
	                validators: [validator_1.Validators.topNFilterTypeValidator]
	            },
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return TopNFilterValidator;
	}(typeValidator_1.ObjectValidator));
	exports.TopNFilterValidator = TopNFilterValidator;
	var NotSupportedFilterValidator = /** @class */ (function (_super) {
	    __extends(NotSupportedFilterValidator, _super);
	    function NotSupportedFilterValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    NotSupportedFilterValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "target",
	                validators: [validator_1.Validators.filterTargetValidator]
	            },
	            {
	                field: "message",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "notSupportedTypeName",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "filterType",
	                validators: [validator_1.Validators.notSupportedFilterTypeValidator]
	            },
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return NotSupportedFilterValidator;
	}(typeValidator_1.ObjectValidator));
	exports.NotSupportedFilterValidator = NotSupportedFilterValidator;
	var IncludeExcludeFilterValidator = /** @class */ (function (_super) {
	    __extends(IncludeExcludeFilterValidator, _super);
	    function IncludeExcludeFilterValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    IncludeExcludeFilterValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "target",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
	            },
	            {
	                field: "isExclude",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.booleanValidator]
	            },
	            {
	                field: "values",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyArrayValidator]
	            },
	            {
	                field: "filterType",
	                validators: [validator_1.Validators.includeExludeFilterTypeValidator]
	            },
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return IncludeExcludeFilterValidator;
	}(typeValidator_1.ObjectValidator));
	exports.IncludeExcludeFilterValidator = IncludeExcludeFilterValidator;
	var FilterValidator = /** @class */ (function (_super) {
	    __extends(FilterValidator, _super);
	    function FilterValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    FilterValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        return validator_1.Validators.anyFilterValidator.validate(input, path, field);
	    };
	    return FilterValidator;
	}(typeValidator_1.ObjectValidator));
	exports.FilterValidator = FilterValidator;
	var ConditionItemValidator = /** @class */ (function (_super) {
	    __extends(ConditionItemValidator, _super);
	    function ConditionItemValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ConditionItemValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "value",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyValueValidator]
	            },
	            {
	                field: "operator",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ConditionItemValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ConditionItemValidator = ConditionItemValidator;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var FieldRequiredValidator = /** @class */ (function () {
	    function FieldRequiredValidator() {
	    }
	    FieldRequiredValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return [{
	                    message: field + " is required",
	                    path: (path ? path + "." : "") + field,
	                    keyword: "required"
	                }];
	        }
	        return null;
	    };
	    return FieldRequiredValidator;
	}());
	exports.FieldRequiredValidator = FieldRequiredValidator;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var AnyOfValidator = /** @class */ (function () {
	    function AnyOfValidator(validators) {
	        this.validators = validators;
	    }
	    AnyOfValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var valid = false;
	        for (var _i = 0, _a = this.validators; _i < _a.length; _i++) {
	            var validator = _a[_i];
	            var errors = validator.validate(input, path, field);
	            if (!errors) {
	                valid = true;
	                break;
	            }
	        }
	        if (!valid) {
	            return [{
	                    message: field + " property is invalid",
	                    path: (path ? path + "." : "") + field,
	                    keyword: "invalid"
	                }];
	        }
	        return null;
	    };
	    return AnyOfValidator;
	}());
	exports.AnyOfValidator = AnyOfValidator;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var ReportLoadValidator = /** @class */ (function (_super) {
	    __extends(ReportLoadValidator, _super);
	    function ReportLoadValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ReportLoadValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "accessToken",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "id",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "groupId",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "settings",
	                validators: [validator_1.Validators.settingsValidator]
	            },
	            {
	                field: "pageName",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "filters",
	                validators: [validator_1.Validators.filtersArrayValidator]
	            },
	            {
	                field: "permissions",
	                validators: [validator_1.Validators.permissionsValidator]
	            },
	            {
	                field: "viewMode",
	                validators: [validator_1.Validators.viewModeValidator]
	            },
	            {
	                field: "tokenType",
	                validators: [validator_1.Validators.tokenTypeValidator]
	            },
	            {
	                field: "bookmark",
	                validators: [validator_1.Validators.applyBookmarkValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ReportLoadValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ReportLoadValidator = ReportLoadValidator;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var ReportCreateValidator = /** @class */ (function (_super) {
	    __extends(ReportCreateValidator, _super);
	    function ReportCreateValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ReportCreateValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "accessToken",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "datasetId",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "groupId",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "tokenType",
	                validators: [validator_1.Validators.tokenTypeValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ReportCreateValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ReportCreateValidator = ReportCreateValidator;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var DashboardLoadValidator = /** @class */ (function (_super) {
	    __extends(DashboardLoadValidator, _super);
	    function DashboardLoadValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    DashboardLoadValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "accessToken",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "id",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "groupId",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "pageView",
	                validators: [validator_1.Validators.pageViewFieldValidator]
	            },
	            {
	                field: "tokenType",
	                validators: [validator_1.Validators.tokenTypeValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return DashboardLoadValidator;
	}(typeValidator_1.ObjectValidator));
	exports.DashboardLoadValidator = DashboardLoadValidator;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var TileLoadValidator = /** @class */ (function (_super) {
	    __extends(TileLoadValidator, _super);
	    function TileLoadValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    TileLoadValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "accessToken",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "id",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "dashboardId",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "groupId",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "pageView",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "tokenType",
	                validators: [validator_1.Validators.tokenTypeValidator]
	            },
	            {
	                field: "width",
	                validators: [validator_1.Validators.numberValidator]
	            },
	            {
	                field: "height",
	                validators: [validator_1.Validators.numberValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return TileLoadValidator;
	}(typeValidator_1.ObjectValidator));
	exports.TileLoadValidator = TileLoadValidator;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var PageSizeValidator = /** @class */ (function (_super) {
	    __extends(PageSizeValidator, _super);
	    function PageSizeValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PageSizeValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "type",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.pageSizeTypeValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return PageSizeValidator;
	}(typeValidator_1.ObjectValidator));
	exports.PageSizeValidator = PageSizeValidator;
	var CustomPageSizeValidator = /** @class */ (function (_super) {
	    __extends(CustomPageSizeValidator, _super);
	    function CustomPageSizeValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CustomPageSizeValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "width",
	                validators: [validator_1.Validators.numberValidator]
	            },
	            {
	                field: "height",
	                validators: [validator_1.Validators.numberValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return CustomPageSizeValidator;
	}(PageSizeValidator));
	exports.CustomPageSizeValidator = CustomPageSizeValidator;
	var PageValidator = /** @class */ (function (_super) {
	    __extends(PageValidator, _super);
	    function PageValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PageValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "name",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return PageValidator;
	}(typeValidator_1.ObjectValidator));
	exports.PageValidator = PageValidator;
	var PageViewFieldValidator = /** @class */ (function (_super) {
	    __extends(PageViewFieldValidator, _super);
	    function PageViewFieldValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PageViewFieldValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var possibleValues = ["actualSize", "fitToWidth", "oneColumn"];
	        if (possibleValues.indexOf(input) < 0) {
	            return [{
	                    message: "pageView must be a string with one of the following values: \"actualSize\", \"fitToWidth\", \"oneColumn\""
	                }];
	        }
	        return null;
	    };
	    return PageViewFieldValidator;
	}(typeValidator_1.StringValidator));
	exports.PageViewFieldValidator = PageViewFieldValidator;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var LoadQnaValidator = /** @class */ (function (_super) {
	    __extends(LoadQnaValidator, _super);
	    function LoadQnaValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    LoadQnaValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "accessToken",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	            {
	                field: "datasetIds",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
	            },
	            {
	                field: "question",
	                validators: [validator_1.Validators.stringValidator]
	            },
	            {
	                field: "viewMode",
	                validators: [validator_1.Validators.viewModeValidator]
	            },
	            {
	                field: "settings",
	                validators: [validator_1.Validators.qnaSettingValidator]
	            },
	            {
	                field: "tokenType",
	                validators: [validator_1.Validators.tokenTypeValidator]
	            },
	            {
	                field: "groupId",
	                validators: [validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return LoadQnaValidator;
	}(typeValidator_1.ObjectValidator));
	exports.LoadQnaValidator = LoadQnaValidator;
	var QnaSettingsValidator = /** @class */ (function (_super) {
	    __extends(QnaSettingsValidator, _super);
	    function QnaSettingsValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    QnaSettingsValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "filterPaneEnabled",
	                validators: [validator_1.Validators.booleanValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return QnaSettingsValidator;
	}(typeValidator_1.ObjectValidator));
	exports.QnaSettingsValidator = QnaSettingsValidator;
	var QnaInterpretInputDataValidator = /** @class */ (function (_super) {
	    __extends(QnaInterpretInputDataValidator, _super);
	    function QnaInterpretInputDataValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    QnaInterpretInputDataValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "datasetIds",
	                validators: [validator_1.Validators.stringArrayValidator]
	            },
	            {
	                field: "question",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            },
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return QnaInterpretInputDataValidator;
	}(typeValidator_1.ObjectValidator));
	exports.QnaInterpretInputDataValidator = QnaInterpretInputDataValidator;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var SaveAsParametersValidator = /** @class */ (function (_super) {
	    __extends(SaveAsParametersValidator, _super);
	    function SaveAsParametersValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    SaveAsParametersValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "name",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return SaveAsParametersValidator;
	}(typeValidator_1.ObjectValidator));
	exports.SaveAsParametersValidator = SaveAsParametersValidator;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var typeValidator_1 = __webpack_require__(2);
	var MapValidator = /** @class */ (function (_super) {
	    __extends(MapValidator, _super);
	    function MapValidator(keyValidators, valueValidators) {
	        var _this = _super.call(this) || this;
	        _this.keyValidators = keyValidators;
	        _this.valueValidators = valueValidators;
	        return _this;
	    }
	    MapValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        for (var key in input) {
	            if (input.hasOwnProperty(key)) {
	                var fieldsPath = (path ? path + "." : "") + field + "." + key;
	                for (var _i = 0, _a = this.keyValidators; _i < _a.length; _i++) {
	                    var keyValidator = _a[_i];
	                    errors = keyValidator.validate(key, fieldsPath, field);
	                    if (errors) {
	                        return errors;
	                    }
	                }
	                for (var _b = 0, _c = this.valueValidators; _b < _c.length; _b++) {
	                    var valueValidator = _c[_b];
	                    errors = valueValidator.validate(input[key], fieldsPath, field);
	                    if (errors) {
	                        return errors;
	                    }
	                }
	            }
	        }
	        return null;
	    };
	    return MapValidator;
	}(typeValidator_1.ObjectValidator));
	exports.MapValidator = MapValidator;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var validator_1 = __webpack_require__(1);
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var CustomLayoutValidator = /** @class */ (function (_super) {
	    __extends(CustomLayoutValidator, _super);
	    function CustomLayoutValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CustomLayoutValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "pageSize",
	                validators: [validator_1.Validators.pageSizeValidator]
	            },
	            {
	                field: "displayOption",
	                validators: [validator_1.Validators.customLayoutDisplayOptionValidator]
	            },
	            {
	                field: "pagesLayout",
	                validators: [validator_1.Validators.pagesLayoutValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return CustomLayoutValidator;
	}(typeValidator_1.ObjectValidator));
	exports.CustomLayoutValidator = CustomLayoutValidator;
	var VisualLayoutValidator = /** @class */ (function (_super) {
	    __extends(VisualLayoutValidator, _super);
	    function VisualLayoutValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    VisualLayoutValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "x",
	                validators: [validator_1.Validators.numberValidator]
	            },
	            {
	                field: "y",
	                validators: [validator_1.Validators.numberValidator]
	            },
	            {
	                field: "z",
	                validators: [validator_1.Validators.numberValidator]
	            },
	            {
	                field: "width",
	                validators: [validator_1.Validators.numberValidator]
	            },
	            {
	                field: "height",
	                validators: [validator_1.Validators.numberValidator]
	            },
	            {
	                field: "displayState",
	                validators: [validator_1.Validators.displayStateValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return VisualLayoutValidator;
	}(typeValidator_1.ObjectValidator));
	exports.VisualLayoutValidator = VisualLayoutValidator;
	var DisplayStateValidator = /** @class */ (function (_super) {
	    __extends(DisplayStateValidator, _super);
	    function DisplayStateValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    DisplayStateValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "mode",
	                validators: [validator_1.Validators.displayStateModeValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return DisplayStateValidator;
	}(typeValidator_1.ObjectValidator));
	exports.DisplayStateValidator = DisplayStateValidator;
	var PageLayoutValidator = /** @class */ (function (_super) {
	    __extends(PageLayoutValidator, _super);
	    function PageLayoutValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PageLayoutValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "visualsLayout",
	                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.pageLayoutValidator]
	            },
	            {
	                field: "defaultLayout",
	                validators: [validator_1.Validators.visualLayoutValidator]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return PageLayoutValidator;
	}(typeValidator_1.ObjectValidator));
	exports.PageLayoutValidator = PageLayoutValidator;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var multipleFieldsValidator_1 = __webpack_require__(4);
	var typeValidator_1 = __webpack_require__(2);
	var ExportDataRequestValidator = /** @class */ (function (_super) {
	    __extends(ExportDataRequestValidator, _super);
	    function ExportDataRequestValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ExportDataRequestValidator.prototype.validate = function (input, path, field) {
	        if (input == null) {
	            return null;
	        }
	        var errors = _super.prototype.validate.call(this, input, path, field);
	        if (errors) {
	            return errors;
	        }
	        var fields = [
	            {
	                field: "rows",
	                validators: [new typeValidator_1.NumberValidator()]
	            },
	            {
	                field: "exportDataType",
	                validators: [new typeValidator_1.EnumValidator([0, 1])]
	            }
	        ];
	        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
	        return multipleFieldsValidator.validate(input, path, field);
	    };
	    return ExportDataRequestValidator;
	}(typeValidator_1.ObjectValidator));
	exports.ExportDataRequestValidator = ExportDataRequestValidator;


/***/ })
/******/ ])
});
;
//# sourceMappingURL=models.js.map