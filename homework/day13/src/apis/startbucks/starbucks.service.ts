import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  findAll() {
    // DB에 접속해서 데이터 조회하는 로직
    return [
      {
        number: 1,
        name: '나이트로 바닐라 크림',
        price: 6000,
        calorie: 80,
        fat: 2,
        protein: 1,
        sodium: 40,
        sugar: 10,
        caffein: 232,
      },
      {
        number: 2,
        name: '나이트로 콜드 브루',
        price: 6000,
        calorie: 5,
        fat: 0,
        protein: 0,
        sodium: 5,
        sugar: 0,
        caffein: 245,
      },
      {
        number: 3,
        name: '돌체 콜드 브루',
        price: 6000,
        calorie: 265,
        fat: 9,
        protein: 8,
        sodium: 130,
        sugar: 29,
        caffein: 150,
      },
      {
        number: 4,
        name: '미드나잇 베르가못 콜드 브루',
        price: 6000,
        calorie: 170,
        fat: 1.3,
        protein: 3,
        sodium: 40,
        sugar: 29,
        caffein: 135,
      },
      {
        number: 5,
        name: '바닐라 크림 콜드 브루',
        price: 6000,
        calorie: 125,
        fat: 6,
        protein: 3,
        sodium: 58,
        sugar: 11,
        caffein: 150,
      },
    ];
  }

  create(): string {
    // DB에 접속해서 데이터 등록하는 로직

    return '메뉴 등록에 성공하였습니다.';
  }
}
