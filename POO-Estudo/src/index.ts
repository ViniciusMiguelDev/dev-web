// index.ts
import { Carro } from './carro';
import { Moto } from './moto';
import { Frota } from './frota';

const frota = new Frota(); // Cria uma nova frota

// Cria instâncias de Carro e Moto
const carro1 = new Carro('Fusca', 1972, 2);
const carro2 = new Carro('Civic', 2020, 4);
const moto1 = new Moto('Honda CG', 2020, 160);
const moto2 = new Moto('Yamaha MT-03', 2021, 321);

// Adiciona os veículos à frota
frota.adicionarVeiculo(carro1);
frota.adicionarVeiculo(carro2);
frota.adicionarVeiculo(moto1);
frota.adicionarVeiculo(moto2);

// Mostra os detalhes da frota
frota.mostrarFrota();
