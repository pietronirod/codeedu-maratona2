"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const maratona_service_1 = require("./maratona/maratona.service");
const maratona_controller_1 = require("./maratona/maratona.controller");
const maratona_entity_1 = require("./maratona.entity");
const typeorm_1 = require("@nestjs/typeorm");
let MaratonaModule = class MaratonaModule {
};
MaratonaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([maratona_entity_1.Maratona]),
        ],
        providers: [maratona_service_1.MaratonaService],
        controllers: [maratona_controller_1.MaratonaController]
    })
], MaratonaModule);
exports.MaratonaModule = MaratonaModule;
//# sourceMappingURL=maratona.module.js.map