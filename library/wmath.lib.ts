class wMath {

  /**
   * @description Registra as propriedades desta biblioteca.
   */
  protected prop = [ { regexps: { trigonometricos: /(\.)/gi, arcTrigonometricos: /(\.)?/gi } } ];

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @augments expo expoente do calculo. **[ Type: ``number`` ]**
   * @description Retorna o valor do logaritmo desejado.
   */
  protected _log(expo: number, x: number): number {
    let exp = expo , scan = x % exp;

    while(scan != 0) {
      scan = scan % exp;

      if(expo ** exp != x) {   
        if(expo ** exp != x) {
          if (expo ** exp != x) {
            exp += 0.0001;
          }
          exp += 0.001;
        }
        exp += 0.01; 
      } 
      exp += 0.1;
    }
    return exp;
  };
  
  /** 
   * @description **Constante de Arquimedes ou número de Ludoph.** |  _Archimedes or Ludoph number constant._ 
   */
  public PI = 3.141592653589793;

  /** 
   * @description **Constante de Euler.** | _Euler constant._
   */
  public E = 2.7182818284590452353602874713527;

  /** 
   * @description **Constante de Planck.** | _Planck constant._
   */
  public PLANCK = 6.62606896e-34;

  /** 
   * @description **Constante de Avogadro.** | _Avogadro constant._
   */
  public NA = 6.022140857e23;

  /** 
   * @description **Constante de Newton.** |  _Newton constant._
   */
  public NEWTON = 0.6931471805599453;

  /** 
   * @description **Constante de Tesla.** | _Tesla constant._
   */
  public TESLA = 1.6021766208e-19;

  /** 
   * @description **Constante da Raiz Quadrada de um.** | _Square root of one constant._ 
   */
  public SQRT1 = 1.0;

  /** 
   * @description **Constante da Raiz Quadrada de dois.** | _Square root of two constant._
   */
  public SQRT2 = 1.414213562373095;

  /** 
   * @description **Constante da Raiz Quadrada de tres.** | _Square root of three constant._ 
   */
  public SQRT3 = 1.732050807568877;

  /** 
   * @description **Constante da Raiz Quadrada de quatro.** | _Square root of four constant._ 
   */
  public SQRT4 = 2.0;

  /** 
   * @description **Constante da Raiz Quadrada de cinco.** | _Square root of five constant._ 
   */
  public SQRT5 = 2.23606797749979;

  /** 
   * @description **Constante da Raiz Quadrada de seis.** | _Square root of six constant._ 
   */
  public SQRT6 = 2.449489742783178;

  /** 
   * @description **Constante da Raiz Quadrada de sete.** | _Square root of seven constant._ 
   */
  public SQRT7 = 2.64575131106459;

  /** 
   * @description **Constante da Raiz Quadrada de oito.** | _Square root of eight constant._ 
   */
  public SQRT8 = 2.82842712474619;

  /** 
   * @description **Constante da Raiz Quadrada de nove.** | _Square root of nine constant._ 
   */
  public SQRT9 = 3.0;

  /** 
   * @description **Constante da Raiz Quadrada de dez.** | _Square root of ten constant._ 
   */
  public SQRT10 = 3.16227766016838;

  /** 
   * @description **Constante da Raiz Cúbica de um.** | _Cube root of one constant._ 
   */
  public CBRT1 = 1.0;

  /** 
   * @description **Constante da Raiz Cúbica de dois.** | _Cube root of two constant._ 
   */
  public CBRT2 = 1.25992104989487;

  /** 
   * @description **Constante da Raiz Cúbica de tres.** | _Cube root of three constant._ 
   */
  public CBRT3 = 1.5874010519682;

  /** 
   * @description **Constante da Raiz Cúbica de quatro.** | _Cube root of four constant._
   */
  public CBRT4 = 1.99999999999999;

  /** 
   * @description **Constante da Raiz Cúbica de cinco.** | _Cube root of five constant._ 
   */
  public CBRT5 = 2.23606797749979;

  /** 
   * @description **Constante da Raiz Cúbica de seis.** | _Cube root of six constant._ 
   */
  public CBRT6 = 2.58198889747161;

  /** 
   * @description **Constante da Raiz Cúbica de sete.** | _Cube root of seven constant._ 
   */
  public CBRT7 = 2.91293118277239;

  /** 
   * @description **Constante da Raiz Cúbica de oito.** | _Cube root of eight constant._
   */
  public CBRT8 = 3.26249509498958;

  /** 
   * @description **Constante da Raiz Cúbica de nove.** | _Cube root of nine constant._
   */
  public CBRT9 = 3.62449963442055;

  /** 
   * @description **Constante da Raiz Cúbica de dez.** | _Cube root of ten constant._ 
   */
  public CBRT10 = 3.99999999999999;

  /** 
   * @description **Constante de Logaritmo Natural de dois.** | _Natural logarithm of two constant._ 
   */
  public LN2 = 0.6931471805599453;

  /** 
   * @description **Constante de Logaritmo Natural de dez.** | _Natural logarithm of ten constant._ 
   */
  public LN10 = 2.302585092994046;

  /** 
   * @description **Constante de Logaritmo de 2.** | _Logarithm of 2 constant._
   */
  public LOG2E = 1.4426950408889634;

  /** 
   * @description **Constante de Logaritmo de 10.** | _Logarithm of 10 constant._ 
   */
  public LOG10E = 0.4342944819032518;

  /** 
   * @description **Maior valor numérico preciso possível.** | _Maximum accurate numeric value possible._
   */
  public MAX_VALUE = 999999999999999;

  /** 
   * @description **Menor valor númerico preciso possível.** | _Minimum accurate numeric value possible._
   */
  public MIN_VALUE = -999999999999999;

  /**
   *  @augments x entrada do cálculo. **[ Type: ``number`` ]**
   *  @description **Retorna o valor absoluto de um número.** | _Returns the absolute value of a number._ 
   */
  public abs(x: number): number {
    return x < 0 ? -1 * x : x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor absoluto de um número, porém negado.** | _Returns the absolute value of a number, but negated._ 
   */
  public absNeg(x: number): number {
    return -1 * (x < 0 ? -1 * x : x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz quadrada de um número.** | _Returns the square root of a number._
   */
  public sqrt(x: number): number {
    return x ** (1 / 2);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz quadrada de um número, porém negado.** | _Returns the square root of a number, but negated._ 
   */
  public sqrtNeg(x: number): number {
    return -1 * (x ** (1 / 2));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz cúbica de um número.** | _Returns the cube root of a number._
   */
  public cbrt(x: number): number {
    return x ** (1 / 3);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz cúbica de um número, porém negado.** | _Returns the cube root of a number, but negated._ 
   */
  public cbrtNeg(x: number): number {
    return -1 * (x ** (1 / 3));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à quarta potência de um número.** | _Returns the fourth root of a number._ 
   */
  public quart(x: number): number {
    return x ** (1 / 4);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à quarta potência de um número, porém negado.** | _Returns the fourth root of a number, but negated._ 
   */
  public quartNeg(x: number): number {
    return -1 * (x ** (1 / 4));
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description **Retorna o valor da raiz à quinta potência de um número.** | _Returns the fifth root of a number._ 
   */
  public quint(x: number): number {
    return x ** (1 / 5);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à quinta potência de um número, porém negado.** | _Returns the fifth root of a number, but negated._ 
   */
  public quintNeg(x: number): number {
    return -1 * (x ** (1 / 5));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à sexta potência de um número.** | _Returns the sixth root of a number._ 
   */
  public sext(x: number): number {
    return x ** (1 / 6);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à sexta potência de um número, porém negado.** | _Returns the sixth root of a number, but negated._ 
   */
  public sextNeg(x: number): number {
    return -1 * (x ** (1 / 6));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à sétima potência de um número.** | _Returns the seventh root of a number._ 
   */
  public sept(x: number): number {
    return x ** (1 / 7);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à sétima potência de um número, porém negado.** | _Returns the seventh root of a number, but negated._ 
   */
  public septNeg(x: number): number {
    return -1 * (x ** (1 / 7));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à oitava potência de um número.** | _Returns the eighth root of a number._ 
   */
  public oct(x: number): number {
    return x ** (1 / 8);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à oitava potência de um número, porém negado.** | _Returns the eighth root of a number, but negated._ 
   */
  public octNeg(x: number): number {
    return -1 * (x ** (1 / 8));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à nona potência de um número.** | _Returns the ninth root of a number._ 
   */
  public non(x: number): number {
    return x ** (1 / 9);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à nona potência de um número, porém negado.** | _Returns the ninth root of a number, but negated._ 
   */
  public nonNeg(x: number): number {
    return -1 * (x ** (1 / 9));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à décima potência de um número.** | _Returns the tenth root of a number._ 
   */
  public dec(x: number): number {
    return x ** (1 / 10);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da raiz à décima potência de um número, porém negado.** | _Returns the tenth root of a number, but negated._ 
   */
  public decNeg(x: number): number {
    return -1 * (x ** (1 / 10));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de um número.** | _Returns the power of a number._ 
   */
  public pow(x: number, y: number): number {
    return x ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de um número, porém negada.** | _Returns the power of a number, but negated._ 
   */
  public powNeg(x: number, y: number): number {
    return -1 * (x ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de dois.** | _Returns the power of two._ 
   */
  public pow2(y: number): number {
    return 2 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de dois, porém negada.** | _Returns the power of two, but negated._ 
   */
  public pow2Neg(y: number): number {
    return -1 * (2 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de três.** | _Returns the power of three._ 
   */
  public pow3(y: number): number {
    return 3 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de três, porém negada.** | _Returns the power of three, but negated._ 
   */
  public pow3Neg(y: number): number {
    return -1 * (3 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de quatro.** | _Returns the power of four._ 
   */
  public pow4(y: number): number {
    return 4 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de quatro, porém negada.** | _Returns the power of four, but negated._ 
   */
  public pow4Neg(y: number): number {
    return -1 * (4 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de cinco.** | _Returns the power of five._ 
   */
  public pow5(y: number): number {
    return 5 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de cinco, porém negada.** | _Returns the power of five, but negated._ 
   */
  public pow5Neg(y: number): number {
    return -1 * (5 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de six.** | _Returns the power of six._ 
   */
  public pow6(y: number): number {
    return 6 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de six, porém negada.** | _Returns the power of six, but negated._ 
   */
  public pow6Neg(y: number): number {
    return -1 * (6 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de sete.** | _Returns the power of seven._ 
   */
  public pow7(y: number): number {
    return 7 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de sete, porém negada.** | _Returns the power of seven, but negated._ 
   */
  public pow7Neg(y: number): number {
    return -1 * (7 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de oito.** | _Returns the power of eight._ 
   */
  public pow8(y: number): number {
    return 8 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de oito, porém negada.** | _Returns the power of eight, but negated._ 
   */
  public pow8Neg(y: number): number {
    return -1 * (8 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de nove.** | _Returns the power of nine._ 
   */
  public pow9(y: number): number {
    return 9 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de nove, porém negada.** | _Returns the power of nine, but negated._ 
   */
  public pow9Neg(y: number): number {
    return -1 * (9 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de dez.** | _Returns the power of ten._ 
   */
  public pow10(y: number): number {
    return 10 ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de dez, porém negada.** | _Returns the power of ten, but negated._ 
   */
  public pow10Neg(y: number): number {
    return -1 * (10 ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de potência um número.** | _Returns the power of a number._ 
   */
  public powOfPow(x: number, y: number, z?: number[]): number {
    let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
    return x ** (y ** l);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da potência de potência um número, porém negada.** | _Returns the power of a number, but negated._ 
   */
  public powOfPowNeg(x: number, y: number, z?: number[]): number {
    let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
    return -1 * (x ** (y ** l));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o maior número de uma sequência.** | _Returns the largest number of a sequence._ 
   */
  public max(x: number[]): number {
    let max = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] > max) { max = x[i]; }
    }
    return max;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o menor número de uma sequência.** | _Returns the smallest number of a sequence._ 
   */
  public min(x: number[]): number {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] < min) { min = x[i]; }
    }
    return min;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor arredondado pra baixo de um número.** | _Returns the value rounded down of a number._ 
   */
  public round(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    const resultado = verificador.exec(x.toString());
    return parseInt(resultado[0]);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor arredondado pra cima de um número.** | _Returns the value rounded up of a number._ 
   */
  public fround(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    const resultado = verificador.exec(x.toString());
    if (parseFloat(resultado[1]) >= 0.5) {
      return parseInt(resultado[0] + 1);
    }
    return parseInt(resultado[0]);
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna um símbolo dizendo o sinal do número.** | _Returns a symbol saying the sign of a number._
   */
  public sign(x: number): number {
    if (x > 0) {
      return 1;
    }
    if (x < 0) {
      return -1;
    }
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor sem partes de pronto flutuante de um número.** | _Returns the value without floating parts of a number._
   */
  public trunc(x: number): number {
    return parseInt(x.toString());
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor de uma multiplicação de inteiro de 32-bit.** | _Returns the value of a 32-bit integer multiplication._
   */
  public imul(x: number, y: number): number {
    return x * y;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o menor inteiro que é menor ou igual a um número.** | _Returns the smallest integer that is less than or equal to a number._
   */
  public ceil(x: number): number {
    if (x < x + 0.5) {
      return parseInt(x.toString());
    }
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o maior inteiro que é maior ou igual a um número.** | _Returns the largest integer that is greater than or equal to a number._
   */
  public floor(x: number): number {
    if (x > x + 0.5) {
      return parseInt(x.toString());
    }
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do seno de um número.** | _Returns the value of the sine of a number._ 
   */
  public sin(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if(scan == true) { return NaN; } 
    
    const resultado: number = (((2 * this.PI * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do cosseno de um número.** | _Returns the value of the cosine of a number._
   */
  protected cos(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = (-1 * (((2 * this.PI * 1) / 4) / 90)) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da tangente de um número.** | _Returns the value of the tangent of a number._
   */
  protected tan(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }
    
    const resultado: number = WMath.sin(x) / WMath.cos(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da secante de um número.** | _Returns the value of the secant of a number._
   */
  protected sec(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / WMath.cos(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da cosecante de um número.** | _Returns the value of the cosecant of a number._
   */
  protected cosec(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / WMath.sin(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da cotangente de um número.** | _Returns the value of the cotangent of a number._
   */
  protected cotan(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (WMath.cos(x) / WMath.sin(x));
    return resultado;
  }
  
  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do seno hiperbólico de um número.** | _Returns the value of the hyperbolic sine of a number._
   */
  protected sinh(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (((2 * this.PI * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do cosseno hiperbólico de um número.** | _Returns the value of the hyperbolic cosine of a number._
   */
  protected cosh(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (-1 * ((2 * this.PI * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da tangente hiperbólica de um número.** | _Returns the value of the hyperbolic tangent of a number._
   */
  protected tanh(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (WMath.sin(x) / WMath.cos(x));
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da secante hiperbólica de um número.** | _Returns the value of the hyperbolic secant of a number._
   */
  protected sech(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / WMath.cosh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da cosecante hiperbólica de um número.** | _Returns the value of the hyperbolic cosecant of a number._
   */
  protected cosech(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / WMath.sinh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor da cotangente hiperbólica de um número.** | _Returns the value of the hyperbolic cotangent of a number._
   */
  protected cotanh(x: number) {
    const scan = RegExp(this.prop[0].regexps.trigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (WMath.cosh(x) / WMath.sinh(x));
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco seno de um número.** | _Returns the value of the arc sine of a number._
   */
  protected arcsin(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = (((2 * this.PI * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco cosseno de um número.** | _Returns the value of the arc cosine of a number._
   */
  protected arccos(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = -1 * (((2 * this.PI * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco tangente de um número.** | _Returns the value of the arc tangent of a number._
   */
  protected arctan(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = (this.arcsin(x) / this.arccos(x));
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco secante de um número.** | _Returns the value of the arc secant of a number._
   */
  protected arcsec(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arccos(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco cosecante de um número.** | _Returns the value of the arc cosecant of a number._
   */
  protected arccosec(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arcsin(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco cotangente de um número.** | _Returns the value of the arc cotangent of a number._
   */
  protected arccotan(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arctan(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco seno hiperbólico de um número.** | _Returns the value of the hyperbolic arc sine of a number._
   */
  protected arcsinh(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (((2 * this.PI * 1) / 4) / 90) * x;
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco cosseno hiperbólico de um número.** | _Returns the value of the hyperbolic arc cosine of a number._
   */
  protected arccosh(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (-1 * (((2 * this.PI * 1) / 4) / 90) * x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco tangente hiperbólica de um número.** | _Returns the value of the hyperbolic arc tangent of a number._
   */
  protected arctanh(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / (this.arcsinh(x) / this.arccosh(x));
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco secante hiperbólica de um número.** | _Returns the value of the hyperbolic arc secant of a number._
   */
  protected arcsech(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arccosh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco cosecante hiperbólica de um número.** | _Returns the value of the hyperbolic arc cosecant of a number._
   */
  protected arccosech(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arcsinh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do arco cotangente hiperbólica de um número.** | _Returns the value of the hyperbolic arc cotangent of a number._
   */
  protected arccotanh(x: number) {
    const scan = RegExp(this.prop[0].regexps.arcTrigonometricos).test(x.toString());
    if (scan == true) { return NaN; }

    const resultado: number = 1 / this.arctanh(x);
    return resultado;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description **Retorna o valor do logaritmo de base 2 de um número.** | _Returns the value of the base 2 logarithm of a number._ 
   */
  public log2(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(2, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description **Retorna o valor do logaritmo de base 2 de um número menos 1.** | _Returns the value of the base 2 logarithm of a number minus 1._ 
   */
  public log2m1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(2, x);
    return res - 1;
  }


  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description **Retorna o valor do logaritmo de base 2 de um número mais 1.** | _Returns the value of the base 2 logarithm of a number plus 1._ 
   */
  public log2p1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(2, x);
    return res + 1;
  } 

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 3 de um número.** | _Returns the value of the base 3 logarithm of a number._
   */
  public log3(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(3, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 3 de um número menos 1.** | _Returns the value of the base 3 logarithm of a number minus 1._
   */
  public log3m1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(3, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 3 de um número mais 1.** | _Returns the value of the base 3 logarithm of a number plus 1._
   */
  public log3p1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(3, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 4 de um número.** | _Returns the value of the base 4 logarithm of a number._
   */
  public log4(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(4, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 4 de um número menos 1.** | _Returns the value of the base 4 logarithm of a number minus 1._
   */
  public log4m1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(4, x);
    return res - 1;
  }

  
  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 4 de um número mais 1.** | _Returns the value of the base 4 logarithm of a number plus 1._
   */
  public log4p1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(4, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 5 de um número.** | _Returns the value of the base 5 logarithm of a number._
   */
  public log5(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(5, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 5 de um número menos 1.** | _Returns the value of the base 5 logarithm of a number minus 1._
   */
  public log5m1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(5, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 5 de um número mais 1.** | _Returns the value of the base 5 logarithm of a number plus 1._
   */
  public log5p1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(5, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 6 de um número.** | _Returns the value of the base 6 logarithm of a number._
   */
  public log6(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(6, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 6 de um número menos 1.** | _Returns the value of the base 6 logarithm of a number minus 1._
   */
  public log6m1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(6, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 6 de um número mais 1.** | _Returns the value of the base 6 logarithm of a number plus 1._
   */
  public log6p1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(6, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 7 de um número.** | _Returns the value of the base 7 logarithm of a number._
   */
  public log7(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(7, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 7 de um número menos 1.** | _Returns the value of the base 7 logarithm of a number minus 1._
   */
  public log7m1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(3, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 7 de um número.** | _Returns the value of the base 7 logarithm of a number._
   */
  public log7p1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(7, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 8 de um número.** | _Returns the value of the base 8 logarithm of a number._
   */
  public log8(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(8, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 8 de um número menos 1.** | _Returns the value of the base 8 logarithm of a number minus 1._
   */
  public log8m1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(8, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 8 de um número mais 1.** | _Returns the value of the base 8 logarithm of a number plus 1._
   */
  public log8p1(x: number) {
    
    let res = this._log(8, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 9 de um número.** | _Returns the value of the base 9 logarithm of a number._
   */
  public log9(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(9, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 9 de um número menos 1.** | _Returns the value of the base 9 logarithm of a number minus 1._
   */
  public log9m1(x: number) {
    
    let res = this._log(9, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 9 de um número mais 1.** | _Returns the value of the base 9 logarithm of a number plus 1._
   */
  public log9p1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(9, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 10 de um número.** | _Returns the value of the base 10 logarithm of a number._
   */
  public log(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(10, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 10 de um número menos 1.** | _Returns the value of the base 10 logarithm of a number minus 1._
   */
  public logm1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(10, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base 10 de um número mais 1.** | _Returns the value of the base 10 logarithm of a number plus 1._
   */
  public logp1(x: number) {
    
    let res = this._log(10, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base qualquer de um número.** | _Returns the value of the base-any logarithm of a number._
   */
  public logx(x: number, base: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(base, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base qualquer de um número menos 1.** | _Returns the value of the base-any logarithm of a number minus 1._
   */
  public logxm1(x: number, base: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(base, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo de base qualquer de um número mais 1.** | _Returns the value of the base-any logarithm of a number plus 1._
   */
  public logxp1(x: number, base: number) {
    
    let res = this._log(base, x);
    return res + 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo natural de um número.** | _Returns the value of the natural logarithm of a number._
   */
  public ln(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(this.E, x);
    return res;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo natural de um número menos 1.** | _Returns the value of the natural logarithm of a number minus 1._
   */
  public lnm1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(this.E, x);
    return res - 1;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description **Retorna o valor do logaritmo natural de um número mais 1.** | _Returns the value of the natural logarithm of a number plus 1._
   */
  public lnp1(x: number) {
    if(x == 0) { return NaN; }
    
    let res = this._log(this.E, x);
    return res + 1;
  }

  /**
   * @augments x entrada de um multiplicador. **[ Type: ``number`` ]**
   * @description **Retorna um valor aleatório.** | _Returns a random value._
   */
  public random(x: number): number {
    const rand: number = (Int8Array.of(400).length / Int8Array.of(200).length) * x;
    return rand; 
  }

} export var WMath = new wMath();
