"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const carro_1 = require("./carro");
const moto_1 = require("./moto");
const frota_1 = require("./frota");
const frota = new frota_1.Frota(); // Cria uma nova frota
// Cria instâncias de Carro e Moto
const carro1 = new carro_1.Carro('Fusca', 1972, 2);
const carro2 = new carro_1.Carro('Civic', 2020, 4);
const moto1 = new moto_1.Moto('Honda CG', 2020, 160);
const moto2 = new moto_1.Moto('Yamaha MT-03', 2021, 321);
// Adiciona os veículos à frota
frota.adicionarVeiculo(carro1);
frota.adicionarVeiculo(carro2);
frota.adicionarVeiculo(moto1);
frota.adicionarVeiculo(moto2);
// Mostra os detalhes da frota
frota.mostrarFrota();
