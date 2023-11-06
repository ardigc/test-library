import { CsvFilter } from "../CsvFilter";
interface FileWithOneInvoiceLineHavingParams {
    ivaTax?: string;
    igicTax?: string;
    netAmount?: string;
    nif?: string;
  }
describe('CSV filter',() => {
    const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
    const emptyField = '';
  
    it('allows for correct lines only', () => {
      const invoiceLine = fileWithOneInvoiceLineHaving();
      const csvFilter = CsvFilter.create([header, invoiceLine]);
  
      const result = csvFilter.filteredLines;
  
      expect(result).toEqual([header, invoiceLine]);
    });
  
    it('excludes lines with both tax fields populated as they are exclusive', () => {
      const invoiceLine = fileWithOneInvoiceLineHaving('21', '7');
      const csvFilter = CsvFilter.create([header, invoiceLine]);
  
      const result = csvFilter.filteredLines;
  
      expect(result).toEqual([header]);
    });
  
    it('excludes lines with both tax fields empty as one is required', () => {
      const invoiceLine = fileWithOneInvoiceLineHaving('', '');
      const csvFilter = CsvFilter.create([header, invoiceLine]);
  
      const result = csvFilter.filteredLines;
  
      expect(result).toEqual([header]);
    });
  
    it('excludes lines with non decimal tax fields', () => {
      const invoiceLine = fileWithOneInvoiceLineHaving('XYZ', '');
      const csvFilter = CsvFilter.create([header, invoiceLine]);
    
      const result = csvFilter.filteredLines;
    
      expect(result).toEqual([header]);
    });
  
    it('excludes lines with both tax fields populated even if non decimal', () => {
      const invoiceLine = fileWithOneInvoiceLineHaving('XYZ', '7');
      const csvFilter = CsvFilter.create([header, invoiceLine]);
    
      const result = csvFilter.filteredLines;
    
      expect(result).toEqual([header]);
    });
      it('excludes lines with miscalculated net amount for iva tax', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving('21', '', '900');
        const csvFilter = CsvFilter.create([header, invoiceLine]);
      
        const result = csvFilter.filteredLines;
      
        expect(result).toEqual([header]);
      });

      it('allows only the correct lines when the igic tax is applied', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving('', '7', '930');
        const csvFilter = CsvFilter.create([header, invoiceLine]);
      
        const result = csvFilter.filteredLines;
      
        expect(result).toEqual([header, invoiceLine]);
      });
      it('excludes lines with miscalculated net amount for igic tax', () => {
        const invoiceLine = fileWithOneInvoiceLineHaving('', '7', '900');
        const csvFilter = CsvFilter.create([header, invoiceLine]);
      
        const result = csvFilter.filteredLines;
      
        expect(result).toEqual([header]);
      });

      
      function fileWithOneInvoiceLineHaving({
        ivaTax = '21',
        igicTax = emptyField,
        netAmount = '790',
        nif = emptyField
      }: FileWithOneInvoiceLineHavingParams) {
        const invoiceId = '1';
        const invoiceDate = '02/05/2019';
        const grossAmount = '1000';
        const concept = 'ACER Laptop';
        const cif = 'B76430134';
        return [invoiceId, invoiceDate, grossAmount, netAmount, ivaTax, igicTax, concept, cif, nif].join(',');
      }
  });