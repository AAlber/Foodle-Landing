"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../server/index");
var seed_1 = require("../utils/seed");
var clean_1 = require("../utils/clean");
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, clean_1.clean)()];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, seed_1.seed)()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var query = "\n    mutation CreateListing($size: Int!, $ownerId: String!, $street: String!, $streetNumber: Int!, $zip: Int!, $city: String!, $title: String!, $handle:String!, $description: String!, $pickup: Boolean!, $facilities: [String!]!, $rules: [String!]!, $serviceFee: Int!, $hourlyPrice: Int!, $deposit: Int!, $images: [String!]!, $partialSpace: Boolean!, $availabilities: PropertySlotInput!) {\n  createListing(size: $size, ownerId: $ownerId, street: $street, streetNumber: $streetNumber, zip: $zip, city: $city, description: $description,handle: $handle, title: $title, pickup: $pickup,  facilities: $facilities, rules: $rules, serviceFee: $serviceFee, hourlyPrice: $hourlyPrice, deposit: $deposit, images: $images, partialSpace: $partialSpace, availabilities: $availabilities) {\n    Property {\n      size\n      owner {\n        id\n        fullName\n        email\n      }\n      title\n      handle\n      kind\n      bookings {\n        id\n      }\n      street\n      streetNumber\n      zip\n      city\n      description\n      pickup\n      images\n      facilities\n      isVerified\n      hourlyPrice\n      serviceFee\n      deposit\n      rules\n      availabilities {\n        startDate\n        endDate\n        minMonths\n        frequency\n        availableDays {\n          weekday\n          startTime\n          endTime\n        }\n      }\n    }\n    ClientErrorUserNotExists {\n      message\n    }\n    ClientErrorInvalidHandle {\n      message\n    }\n    ClientErrorInvalidPropertyInput {\n      message\n    }\n    UnknownError {\n      message\n    }\n  }\n}\n    ";
var stdVars = { size: 0,
    ownerId: "1",
    street: "FoodleStreet",
    streetNumber: 0,
    zip: 0,
    city: "Germany2",
    title: "titlee",
    handle: "handlee",
    description: "",
    rules: [],
    hourlyPrice: 0,
    facilities: [],
    deposit: 0,
    images: [""],
    pickup: false,
    serviceFee: 0,
    partialSpace: false,
    availabilities: {
        startDate: new Date('1900-01-01T01:00:00').toISOString(),
        endDate: new Date('1900-02-01T01:00:00').toISOString(),
        availableDays: [{
                startTime: new Date('1900-01-01T01:00:00').toISOString(),
                endTime: new Date('1900-01-01T01:00:00').toISOString(),
                weekday: "Monday"
            }],
        minMonths: 0,
        frequency: "weekly", // Should be one of enum values or error
    }
};
describe(' Property', function () {
    it('can create a listing', function () { return __awaiter(void 0, void 0, void 0, function () {
        var vars, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    vars = __assign({}, stdVars);
                    vars.city = "Germany2";
                    return [4 /*yield*/, index_1.apollo.executeOperation({
                            query: query,
                            variables: __assign({}, vars),
                        })];
                case 1:
                    res = _a.sent();
                    expect(res).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    // e.preventDefault();
    //           e.stopPropagation();'
    it('it fails when a listing city string arg out of max range', function () { return __awaiter(void 0, void 0, void 0, function () {
        var vars, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    vars = __assign({}, stdVars);
                    vars.city = ";ew;uivhwuhwruiothpiughoreuihtbgoiuherotoibueruihotuihobuiey;ew;uivhwuhwruiothpiughoreuihtbgoiuherotoibueruihotuihobuiey;ew;uivhwuhwruiothpiughoreuihtbgoiuherotoibueruihotuihobuiey;ew;uivhwuhwruiothpiughoreuihtbgoiuherotoibueruihotuihobuiey";
                    return [4 /*yield*/, index_1.apollo.executeOperation({
                            query: query,
                            variables: __assign({}, vars),
                        })];
                case 1:
                    res = _a.sent();
                    expect(res).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    it('can query a single property by the handle', function () { return __awaiter(void 0, void 0, void 0, function () {
        var query, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "\n    query Query($handle: String) {\n      findProperty(handle: $handle) {\n        ClientErrorInvalidHandle {\n          message\n        }\n        Property {\n          city\n        }\n      }\n    }\n    ";
                    return [4 /*yield*/, index_1.apollo.executeOperation({
                            query: query,
                            variables: { handle: '1' }, //TODO get this from globals
                        })];
                case 1:
                    res = _a.sent();
                    expect(res).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    it('can query a list of multiple properties', function () { return __awaiter(void 0, void 0, void 0, function () {
        var query, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "\n    query Query {\n      findAllProperties {\n        Properties {\n          city\n        }\n        UnknownError {\n          message\n        }\n      }\n    }\n    ";
                    return [4 /*yield*/, index_1.apollo.executeOperation({
                            query: query,
                        })];
                case 1:
                    res = _a.sent();
                    expect(res).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
});
