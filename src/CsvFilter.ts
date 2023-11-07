export class CsvFilter {
  private constructor(private readonly lines: string[]) { }

  static create(lines: string[]) {
    if(lines.length===1){
      throw new Error("Single line is not allowed");
      
    }
    return new CsvFilter(lines);
  }

  get filteredLines() {
    if (this.lines.length === 0) {
      return []
    }
    const header = this.lines[0];
    const invoices = this.lines.slice(1);
    const validatedInvoices = invoices.filter(this.validateInvoice)
    const duplicatedIds = this.takeRepeatedInvoiceIds(validatedInvoices)
    const nonRepeatedInvoices = validatedInvoices.filter((invoice) => !duplicatedIds.includes(invoice.split(',')[0]))
    return [header].concat(nonRepeatedInvoices);
  }

  private validateInvoice = (invoice) => {
    const fields = invoice.split(',');
    const ivaField = fields[4];
    const igicField = fields[5];
    const decimalRegex = '\\d+(\\.\\d+)?';
    const taxFieldAreMutuallyExclusive =
      (ivaField.match(decimalRegex) || igicField.match(decimalRegex)) && (!ivaField || !igicField);
    const grossAmountField = fields[2];
    const netAmountField = fields[3];
    const netAmountIsWellCalculated =
      this.checkIfNetAmountIsCorrect(netAmountField, grossAmountField, ivaField) ||
      this.checkIfNetAmountIsCorrect(netAmountField, grossAmountField, igicField);
    const identifierFieldsAreMutuallyExclusive = !fields[7] || !fields[8];
    return taxFieldAreMutuallyExclusive && netAmountIsWellCalculated && identifierFieldsAreMutuallyExclusive;
  }

  private checkIfNetAmountIsCorrect(netAmountField: string, grossAmountField: string, taxField: string) {
    const parsedNetAmount = parseFloat(netAmountField);
    const parsedGrossAmount = parseFloat(grossAmountField);
    const parsedTaxField = parseFloat(taxField);
    return parsedNetAmount === parsedGrossAmount - (parsedGrossAmount * parsedTaxField / 100);
  }
  private takeRepeatedInvoiceIds(invoices: string[]) {
    const invoiceIds = invoices.map((invoice) => invoice.split(',')[0])
    return invoiceIds.filter((id, index) => invoiceIds.indexOf(id) !== index)
  }
}