import { CsvFilter } from "../CsvFilter";
describe('CSV filter', ()=>{
    it('allow for correct lines only',()=>{
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine = '1,02/05/2021,1000,790,21,7,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine])
    const result = csvFilter.filteredLines
    expect(result).toEqual([header,invoiceLine])
    })
    it('excludes lines with both tax fields populated as the are exclusive',()=>{
        const header = 'Num_factura, Fecha, Bruto, Neto, IVA, IGIC, Concepto, CIF_cliente, NIF_cliente';
        const invoiceLine = '1,02/05/2021,1000,790,21,,ACER Laptop,B76430134,';
    const csvFilter = CsvFilter.create([header, invoiceLine])
    const result = csvFilter.filteredLines
    expect(result).toEqual([header])
    })
})