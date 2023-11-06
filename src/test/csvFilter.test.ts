import { CsvFilter } from "../CsvFilter";
describe('CSV Filter', () => {
    const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    it('Allow for correct lines only', () => {
      const invoiceLine = '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
      const csvFilter = CsvFilter.create([header, invoiceLine]);
      
      const result = csvFilter.filteredLines;
      
      expect(result).toEqual([header, invoiceLine]);
    });
          
    it('excludes lines with both tax fields populated as they are exclusive', () => {
      const invoiceLine = '1,02/05/2021,1000,790,21,7,ACER Laptop,B76430134,';
      const csvFilter = CsvFilter.create([header, invoiceLine]);
        
      const result = csvFilter.filteredLines;
        
      expect(result).toEqual([header]);
    });
    it('excludes lines with both tax field empty as one is required', () => {
      const invoiceLine = '1,02/05/2021,1000,790,,,ACER Laptop,B76430134,';
      const csvFilter = CsvFilter.create([header, invoiceLine]);
      const result = csvFilter.filteredLines;
      expect(result).toEqual([header]);
    });

    it('excludes lines with non decimal tax fields', () => {
      const invoiceLine = '1,02/05/2021,1000,790,jle,,ACER Laptop,B76430134,';
      const csvFilter = CsvFilter.create([header, invoiceLine]);
      const result = csvFilter.filteredLines;
      expect(result).toEqual([header]);
    });
  });