class WMath {

  /**
   * @description Instancia a pilha de chamada de funções.
   */
  private static callStack: number = 0;

  /**
   * @description Cria o modelo de análise de verificação de números.
   */
  private static n: number = 1;

  /**
   * @description Gera a instancia de pilha de chamada de funções.
   */
  private get callStack(): number { return this.callStack; }

  /** 
   * @description Gera a criação do modelo de análise de verificação de números.
   */
  private get n(): number { return this.n; }
  
  /** 
   * @description Constante de Arquimedes ou número de Ludoph. 
   */
  public PI: number = 3.141592653589793;

  /** 
   * @description Constante de Euler. 
   */
  public E: number = 2.7182818284590452353602874713527;

  /**
   * @description Constante de Planck.
   */
  public PLANCK: number = 6.62606896e-34;

  /**
   * @description Constante de Avogadro.
   */
  public NA: number = 6.022140857e23;

  /**
   * @description Constante de Newton.
   */
  public NEWTON: number = 0.6931471805599453;

  /**
   * @description Constante de Tesla.
   */
  public TESLA: number = 1.6021766208e-19;

  /** 
   * @description Constante da Raiz de um. 
   */
  public SQRT1: number = 1.0;

  /** 
   * @description Constante da Raiz de dois. 
   */
  public SQRT2: number = 1.414213562373095;

  /** 
   * @description Constante da Raiz de tres. 
   */
  public SQRT3: number = 1.732050807568877;

  /** 
   * @description Constante da Raiz de quatro. 
   */
  public SQRT4: number = 2.0;

  /** 
   * @description Constante da Raiz de cinco. 
   */
  public SQRT5: number = 2.23606797749979;

  /** 
   * @description Constante da Raiz de seis. 
   */
  public SQRT6: number = 2.449489742783178;

  /** 
   * @description Constante da Raiz de sete. 
   */
  public SQRT7: number = 2.64575131106459;

  /** 
   * @description Constante da Raiz de oito. 
   */
  public SQRT8: number = 2.82842712474619;

  /** 
   * @description Constante da Raiz de nove. 
   */
  public SQRT9: number = 3.0;

  /** 
   * @description Constante da Raiz de dez. 
   */
  public SQRT10: number = 3.16227766016838;

  /** 
   * @description Constante da Raiz Cúbica de um. 
   */
  public CBRT1: number = 1.0;

  /** 
   * @description Constante da Raiz Cúbica de dois. 
   */
  public CBRT2: number = 1.25992104989487;

  /** 
   * @description Constante da Raiz Cúbica de tres. 
   */
  public CBRT3: number = 1.5874010519682;

  /** 
   * @description Constante da Raiz Cúbica de quatro. 
   */
  public CBRT4: number = 1.99999999999999;

  /** 
   * @description Constante da Raiz Cúbica de cinco. 
   */
  public CBRT5: number = 2.23606797749979;

  /** 
   * @description Constante da Raiz Cúbica de seis. 
   */
  public CBRT6: number = 2.58198889747161;

  /** 
   * @description Constante da Raiz Cúbica de sete. 
   */
  public CBRT7: number = 2.91293118277239;

  /** 
   * @description Constante da Raiz Cúbica de oito. 
   */
  public CBRT8: number = 3.26249509498958;

  /** 
   * @description Constante da Raiz Cúbica de nove. 
   */
  public CBRT9: number = 3.62449963442055;

  /** 
   * @description Constante da Raiz Cúbica de dez. 
   */
  public CBRT10: number = 3.99999999999999;

  /** 
   * @description Constante de Logaritmo Natural de dois. 
   */
  public LN2: number = 0.6931471805599453;

  /** 
   * @description Constante de Logaritmo Natural de dez. 
   */
  public LN10: number = 2.302585092994046;

  /** 
   * @description Constante de Logaritmo de 2. 
   */
  public LOG2E: number = 1.4426950408889634;

  /** 
   * @description Constante de Logaritmo de 10. 
   */
  public LOG10E: number = 0.4342944819032518;

  /** 
   * @description Maior valor numérico preciso possível.
   */
  public MAX_VALUE: number = 999999999999999;

  /**
   * @description Maior valor numérico em notação científica possível [base 2].
   */
  public MAX_VALUE_SB2: number = 2**1000000000000000;

  /**
   * @description Maior valor numérico em notação científica possível [base 3].
   */
  public MAX_VALUE_SB3: number = 3**1000000000000000;

  /**
   * @description Maior valor numérico em notação científica possível [base 4].
   */
  public MAX_VALUE_SB4: number = 4**1000000000000000;

  /**
   * @description Maior valor numérico em notação científica possível [base 5].
   */
  public MAX_VALUE_SB5: number = 5**1000000000000000;

  /**
   * @description Maior valor númerico em notação científica possível [base 6].
   */
  public MAX_VALUE_SB6: number = 6**1000000000000000;

  /**
   * @description Maior valor númerico em notação científica possível [base 7].
   */
  public MAX_VALUE_SB7: number = 7**1000000000000000;

  /**
   * @description Maior valor númerico em notação científica possível [base 8].
   */
  public MAX_VALUE_SB8: number = 8**1000000000000000;

  /**
   * @description Maior valor númerico em notação científica possível [base 9].
   */
  public MAX_VALUE_SB9: number = 9**1000000000000000;

  /**
   * @description Menor valor númerico preciso possível.
   */
  public MIN_VALUE: number = -999999999999999;

  /**
   * @description Menor valor númerico em notação científica possível [base 2].
   */
  public MIN_VALUE_SB2: number = 2**-1000000000000000;
  
  /**
   * @description Menor valor númerico em notação científica possível [base 3].
   */
  public MIN_VALUE_SB3: number = 3**-1000000000000000;

  /**
   * @description Menor valor númerico em notação científica possível [base 4].
   */
  public MIN_VALUE_SB4: number = 4**-1000000000000000;

  /**
   * @description Menor valor númerico em notação científica possível [base 5].
   */
  public MIN_VALUE_SB5: number = 5**-1000000000000000;

  /**
   * @description Menor valor númerico em notação científica possível [base 6].
   */
  public MIN_VALUE_SB6: number = 6**-1000000000000000;

  /**
   * @description Menor valor númerico em notação científica possível [base 7].
   */
  public MIN_VALUE_SB7: number = 7**-1000000000000000;

  /**
   * @description Menor valor númerico em notação científica possível [base 8].
   */
  public MIN_VALUE_SB8: number = 8**-1000000000000000;

  /**
   * @description Menor valor númerico em notação científica possível [base 9].
   */
  public MIN_VALUE_SB9: number = 9**-1000000000000000;

  /**
   *  @augments x entrada do cálculo. **[ Type: ``number`` ]**
   *  @description Retorna o valor absoluto de um número. 
   */
  public abs(x: number): number { 
    return x < 0 ? -1 * x : x; 
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor absoluto de um número, porém negado. 
   */
  public absNeg(x: number): number {
    return -1 * x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz quadrada de um número. 
   */
  public sqrt(x: number): number {
    return x ** (1/2);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz quadrada de um número, porém negado. 
   */
  public sqrtNeg(x: number): number {
    return -1 * (x ** (1/2));
  }
 
  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz cúbica de um número.
   */
  public cbrt(x: number): number {
    return x ** (1/3);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz cúbica de um número, porém negado. 
   */
  public cbrtNeg(x: number): number {
    return -1 * (x ** (1/3));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à quarta potência de um número. 
   */
  public quart(x: number): number {
    return x ** (1/4);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à quarta potência de um número, porém negado. 
   */
  public quartNeg(x: number): number {
    return -1 * (x ** (1/4));
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]** 
   * @description Retorna o valor da raiz à quinta potência de um número. 
   */
  public quint(x: number): number {
    return x ** (1/5);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à quinta potência de um número, porém negado. 
   */
  public quintNeg(x: number): number {
    return -1 * (x ** (1/5));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à sexta potência de um número. 
   */
  public sext(x: number): number {
    return x ** (1/6);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à sexta potência de um número, porém negado. 
   */
  public sextNeg(x: number): number {
    return -1 * (x ** (1/6));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à sétima potência de um número. 
   */
  public sept(x: number): number {
    return x ** (1/7);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à sétima potência de um número, porém negado. 
   */
  public septNeg(x: number): number {
    return -1 * (x ** (1/7));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à oitava potência de um número. 
   */
  public oct(x: number): number {
    return x ** (1/8);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à oitava potência de um número, porém negado. 
   */
  public octNeg(x: number): number {
    return -1 * (x ** (1/8));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à nona potência de um número. 
   */
  public non(x: number): number {
    return x ** (1/9);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à nona potência de um número, porém negado. 
   */
  public nonNeg(x: number): number {
    return -1 * (x ** (1/9));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à décima potência de um número. 
   */
  public dec(x: number): number {
    return x ** (1/10);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da raiz à décima potência de um número, porém negado. 
   */
  public decNeg(x: number): number {
    return -1 * (x ** (1/10));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de um número. 
   */
  public pow(x: number, y: number): number {
    return x ** y;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de um número, porém negada. 
   */
  public powNeg(x: number, y: number): number {
    return -1 * (x ** y);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de dois. 
   */
  public pow2(x: number): number {
    return 2 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de dois, porém negada. 
   */
  public pow2Neg(x: number): number {
    return -1 * (2 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de três. 
   */
  public pow3(x: number): number {
    return 3 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de três, porém negada. 
   */
  public pow3Neg(x: number): number {
    return -1 * (3 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de quatro. 
   */
  public pow4(x: number): number {
    return 4 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de quatro, porém negada. 
   */
  public pow4Neg(x: number): number {
    return -1 * (4 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de cinco. 
   */
  public pow5(x: number): number {
    return 5 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de cinco, porém negada. 
   */
  public pow5Neg(x: number): number {
    return -1 * (5 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de seis. 
   */
  public pow6(x: number): number {
    return 6 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de seis, porém negada. 
   */
  public pow6Neg(x: number): number {
    return -1 * (6 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de sete. 
   */
  public pow7(x: number): number {
    return 7 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de sete, porém negada. 
   */
  public pow7Neg(x: number): number {
    return -1 * (7 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de oito. 
   */
  public pow8(x: number): number {
    return 8 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de oito, porém negada. 
   */
  public pow8Neg(x: number): number {
    return -1 * (8 ** x);
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de nove. 
   */
  public pow9(x: number): number {
    return 9 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de nove, porém negada. 
   */
  public pow9Neg(x: number): number {
    return -1 * (9 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de dez. 
   */
  public pow10(x: number): number {
    return 10 ** x;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de dez, porém negada. 
   */
  public pow10Neg(x: number): number {
    return -1 * (10 ** x);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de potência um número. 
   */
  public powOfPow(x: number, y: number, z?:number[]): number {
    let l = 0; for(let i = 0; i < z.length; i++) { l += z[i]; }
    return x ** (y ** l);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor da potência de potência um número, porém negada. 
   */
  public powOfPowNeg(x: number, y: number, z?:number[]): number {
    let l = 0; for(let i = 0; i < z.length; i++) { l += z[i]; }
    return -1 * (x ** (y ** l));
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o maior número de uma sequência. 
   */
  public max(x: number[]): number {
    let max = x[0];
    for(let i = 1; i < x.length; i++) {
      if(x[i] > max) { max = x[i]; }
    }
    return max;
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o menor número de uma sequência. 
   */
  public min(x: number[]): number {
    let min = x[0];
    for(let i = 1; i < x.length; i++) {
      if(x[i] < min) { min = x[i]; }
    }
    return min;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor arredondado pra baixo de um número. 
   */
  public round(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    const resultado = verificador.exec(x.toString());
    return parseInt(resultado[0]);
  }

  /** 
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor arredondado pra cima de um número. 
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
   * @description Retorna um símbolo dizendo o sinal do número.
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
   * @description Retorna o valor sem partes de pronto flutuante de um número.
   */
  public trunc(x: number): number {
    return parseInt(x.toString());
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o valor de uma multiplicação de inteiro de 32-bit.
   */
  public imul(x: number, y: number): number {
    return x * y;
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o menor inteiro que é menor ou igual a um número.
   */
  public ceil(x: number): number {
    if (x < x + 0.5) {
      return parseInt(x.toString());
    }
  }

  /**
   * @augments x entrada do cálculo. **[ Type: ``number`` ]**
   * @description Retorna o maior inteiro que é maior ou igual a um número.
   */
  public floor(x: number): number {
    if (x > x + 0.5) {
      return parseInt(x.toString());
    }
  }

// #005500 resolver aqui!!!

  /** 
   * @description Retorna um valor aleatório entre 0 e 1. 
   */
  protected random() {

    // Constantes que serão usadas aqui.
    this.callStack;
    
    this.n;

  }

// #2255ff arrumar aqui!!!

  /** @description Retorna o valor do logaritmo natural de um número. */
  protected ln(x: number) {}
    // const. euler**<exponente> => começando de 0.1

  /** @description Retorna o valor do logaritmo de base 2 de um número. */
  protected log2(x: number) {}
    //? log de 5 na base 2
    // 2**2=4
    // 2**2.1=4.2870938501451726569
    // 2**2.2=4.5947934199881400272
    // 2**2.3=4.924577653379665138
    // 2**2.31=4.9588307997559462464
    // 2**2.32=4.9933221956064476944
      // 2**2.321=4.9967845026135068021
      // 2**2.322=5.0002492103408362096 (valor encontrado) [precisão de 3 casas decimais]
    // 2**2.33=5.0280534980873134087 (valor encontrado) [precisão de 2 casas decimais]

  /** @description Retorna o valor do logaritmo de base 10 de um número. */
  protected log10(x: number) {}

  /** @description Retorna o valor do seno de um número. */
  protected sin(x: number) {}
    // ((2*pi*x) / 4) / 90 = 1º Grau;
    // variantes do valor de pi = diferentes porcentagens de imprecisão;

  /** @description Retorna o valor do cosseno de um número. */
  protected cos(x: number) {}

  /** @description Retorna o valor da tangente de um número. */
  protected tan(x: number) {}

  /** @description Retorna o valor da secante de um número. */
  protected sec(x: number) {}

  /** @description Retorna o valor da cosecante de um número. */
  protected cossec(x: number) {}

  /** @description Retorna o valor da cotangente de um número. */
  protected cotan(x: number) {}

  /** @description Retorna o valor da arcoseno de um número. */
  protected arcsin(x: number) {}

  /** @description Retorna o valor da arccosseno de um número. */
  protected arccos(x: number) {}

  /** @description Retorna o valor da arctangente de um número. */
  protected arctan(x: number) {}

  /** @description Retorna o valor da arcsecante de um número. */
  protected arcsec(x: number) {}

  /** @description Retorna o valor da arccosecante de um número. */
  protected arccossec(x: number) {}

  /** @description Retorna o valor da arccotangente de um número. */
  protected arccotan(x: number) {}

  /** @description Retorna o valor do seno hiperbólico de um número. */
  protected sinh(x: number) {}

  /** @description Retorna o valor do cosseno hiperbólico de um número. */
  protected cosh(x: number) {}

  /** @description Retorna o valor da tangente hiperbólica de um número. */
  protected tanh(x: number) {}

  /** @description Retorna o valor da secante hiperbólica de um número. */
  protected sech(x: number) {}

  /** @description Retorna o valor da cosecante hiperbólica de um número. */
  protected cossech(x: number) {}

  /** @description Retorna o valor da cotangente hiperbólica de um número. */
  protected cotanh(x: number) {}

  /** @description Retorna o valor da arcoseno hiperbólico de um número. */
  protected arcsinh(x: number) {}

  /** @description Retorna o valor da arccosseno hiperbólico de um número. */
  protected arccosh(x: number) {}

  /** @description Retorna o valor da arctangente hiperbólica de um número. */
  protected arctanh(x: number) {}

  /** @description Retorna o valor da arcsecante hiperbólica de um número. */
  protected arcsech(x: number) {}

  /** @description Retorna o valor da arccosecante hiperbólica de um número. */
  protected arccossech(x: number) {}

  /** @description Retorna o valor da arccotangente hiperbólica de um número. */
  protected arccotanh(x: number) {}

}

export var wMath = new WMath();