export interface Country {
    name: {
      common: string;
      official: string;
    };
    capital: string[];
    region: string;
    population: number;
    flags: {
      svg: string;
      png: string;
    };
    currencies: Record<string, { name: string; symbol: string }>;
    languages: Record<string, string>;
    timezones: string[];
  }
  