export class CsvFilter{
   private constructor(private readonly lines:string[]){}
    static create(lines:string[]){
        return new CsvFilter(lines)
    }
    get filteredLines(){
        return this.lines
    }
}