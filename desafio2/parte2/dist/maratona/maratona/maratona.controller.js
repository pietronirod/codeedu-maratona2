"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const maratona_entity_1 = require("../maratona.entity");
const maratona_service_1 = require("../maratona/maratona.service");
let MaratonaController = class MaratonaController {
    constructor(maratonaService) {
        this.maratonaService = maratonaService;
    }
    index() {
        return this.maratonaService.findAll();
    }
    async create(maratonaData) {
        return this.maratonaService.create(maratonaData);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaratonaController.prototype, "index", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [maratona_entity_1.Maratona]),
    __metadata("design:returntype", Promise)
], MaratonaController.prototype, "create", null);
MaratonaController = __decorate([
    common_1.Controller('maratona'),
    __metadata("design:paramtypes", [maratona_service_1.MaratonaService])
], MaratonaController);
exports.MaratonaController = MaratonaController;
//# sourceMappingURL=maratona.controller.js.map