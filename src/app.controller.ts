import { Body, Controller, Get, Render, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { EditOrdersDTO } from './editOrdersdto.dto.js';
import { error } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }

  @Post('/')
  @Render('index')
  editOrders(@Body() body: EditOrdersDTO){
    const nameRegex = /^[a-záéíóöőúüűA-ZÁÉÍÓÖŐÚÜŰ ]{2,}$/;
    const cityRegex = /^[a-záéíóöőúüűA-ZÁÉÍÓÖŐÚÜŰ ]{2,}$/;
    const zipRegex = /^[0-9]{4}$/;
    const streetRegex = /^[a-záéíóöőúüűA-ZÁÉÍÓÖŐÚÜŰ0-9 .\/-]{2,}$/;
    const phoneRegex = /^\+36[0-9]+$/;
    const couponRegex = /^[A-Z]{2}-[0-9]{4}$/;
    const cardRegex = /^[0-9]{4}(-[0-9]{4}){3}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    const cvcRegex = /^[0-9]{3}$/;

    if(!nameRegex.test(body.nev)){
      return{
        error: "Helytelen név"
      }
    }

    if(!phoneRegex.test(body.telefon)){
      error: "Helytelen telefonszám"
    }

    if(!cityRegex.test(body.szaml_varos)){
      return{
        error: "Helytelen város"
      }
    }

    if(!zipRegex.test(body.szaml_iranyito)){
      error: "Helytelen irányítószám"
    }

    if(!streetRegex.test(body.szaml_utca)){
      error: "Helytelen utca vagy házzszám"
    }

        if(!cityRegex.test(body.szall_varos)){
      return{
        error: "Helytelen város"
      }
    }

    if(!zipRegex.test(body.szall_iranyito)){
      error: "Helytelen irányítószám"
    }

    if(!streetRegex.test(body.szall_utca)){
      error: "Helytelen utca vagy házzszám"
    }

    if(!couponRegex.test(body.kupon)){
      return{
        error: "Helyetelen kuponkód"
      }
    }

    if(!cardRegex.test(body.bankkartya)){
      return{
        error: "Helyteln bankártyaszám"
      }
    }

    if(!expiryRegex.test(body.lejar)){
      return{
        error: "Helytelen lejárati dátum"
      }
    }

    const [month, year] = body.lejar.split('/').map(Number);

    const jelenlegiDatum = new Date()
    const ev = jelenlegiDatum.getFullYear() %100
    const honap = jelenlegiDatum.getMonth() +1 

    if(year < ev || (year === ev && month === honap)){
      return{
        error: "A kártya lejárt"
      }
    }

    if(!cvcRegex.test(body.cvc)){
      return{
        error: "Helytelen CVC kód"
      }
    }

    return{
      succes: "Minden adat helyes"
    }
  }
}
