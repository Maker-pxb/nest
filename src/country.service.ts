import { Injectable } from '@nestjs/common';
import supabase from './db/coumtry';

@Injectable()
export class CountryService {
  async getCountry() {
    const { data } = await supabase.from('countries').select();
    return {
      code: 200,
      data,
    };
  }
}
