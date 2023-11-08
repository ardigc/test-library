
export class ColumnWidth {
    private constructor(private readonly width: number) {
    }
  
    static create(width: number) {
      if (width < 0) {
        throw new Error('Negative column width is not allowed');
      }
      return new ColumnWidth(width);
    }
  
    value() {
      return this.width;
    }
  }
  
  export class WrappableText {
    private constructor(private readonly text: string) { }
  
    static create(text: string) {
      if (text == null) {
        return new WrappableText('');
      }
      return new WrappableText(text);
    }
  
    wordWrap(columnWidth: ColumnWidth) {
      if (this.fitsIn(columnWidth)) {
        return WrappableText.create(this.text);
      }
      const wrappedText = this.wrappedText(columnWidth);
      const unwrappedText = this.unwrappedText(columnWidth);
      return wrappedText.concat(unwrappedText.wordWrap(columnWidth));
    }
  
    private fitsIn(columnWidth: ColumnWidth) {
      return this.text.length <= columnWidth.value();
    }
  
    private concat(text: WrappableText) {
      return WrappableText.create(this.text.concat(text.text));
    }
  
    private wrappedText(columnWidth: ColumnWidth) {
      return WrappableText.create(this.text.substring(0, this.wrapIndex(columnWidth)).concat('\n'));
    }
  
    private wrapIndex(columnWidth: ColumnWidth) {
      return this.shallWrapBySpace(columnWidth) ? this.indexOfSpace() : columnWidth.value();
    }
  
    private unwrappedText(columnWidth: ColumnWidth) {
      return WrappableText.create(this.text.substring(this.unwrapIndex(columnWidth)));
    }
  
    private unwrapIndex(columnWidth: ColumnWidth) {
      return this.shallWrapBySpace(columnWidth) ? this.indexOfSpace() + 1 : columnWidth.value();
    }
  
    private shallWrapBySpace(columnWidth: ColumnWidth) {
      return this.indexOfSpace() > -1 && this.indexOfSpace() < columnWidth.value();
    }
  
    private indexOfSpace() {
      return this.text.indexOf(' ');
    }
  }
 

  describe('The Word Wrap', () => {
    it('empty text does not need to be wrapped', () => {
      expect(WrappableText.create('').wordWrap(ColumnWidth.create(5))).toEqual({ text: '' });
      expect(WrappableText.create(null).wordWrap(ColumnWidth.create(5))).toEqual({ text: '' });
      expect(WrappableText.create(undefined).wordWrap(ColumnWidth.create(5))).toEqual({ text: '' });
    });
    it('small text does not need to be wrapped', () => {
      expect(WrappableText.create('hello').wordWrap(ColumnWidth.create(5))).toEqual({ text: 'hello' });
    });
    it('words are wrapped when do not fit the column width', () => {
      expect(WrappableText.create('longword').wordWrap(ColumnWidth.create(4))).toEqual({ text: 'long\nword' });
      expect(WrappableText.create('reallylongword').wordWrap(ColumnWidth.create(4))).toEqual({ text: 'real\nlylo\nngwo\nrd' });
    });
    it('spaces are preferred for wrapping', () => {
      expect(WrappableText.create('abc def').wordWrap(ColumnWidth.create(4))).toEqual({ text: 'abc\ndef' });
      expect(WrappableText.create('abc def ghi').wordWrap(ColumnWidth.create(4))).toEqual({ text: 'abc\ndef\nghi' });
      expect(WrappableText.create(' abcd').wordWrap(ColumnWidth.create(4))).toEqual({ text: '\nabcd' });
    });
    it('does not allow for negative column width', () => {
      expect(() => WrappableText.create('hello').wordWrap(ColumnWidth.create(-5))).toThrow('Negative column width is not allowed');
    });
  });