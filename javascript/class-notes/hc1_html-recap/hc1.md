1. Let ve const anahtar kelimeleri 2015 yılında JavaScript'e eklendi.

2.  Adlar harfler, rakamlar, alt çizgiler ve dolar işaretleri içerebilir.
	-  İsimler $ ve _ ile de başlayabilir.
	-  Adlar büyük/küçük harfe duyarlıdır.
	-  Rezerve sözcükler (JavaScript anahtar sözcükleri gibi) ad olarak kullanılamaz.
	
3. JavaScript tanımlayıcıları büyük/küçük harf duyarlıdır.

4. JavaScript'te eşittir işareti (=), bir "eşittir" operatörü değil, bir "atama" operatörüdür.

5. "Eşittir" operatörü JavaScript'te == gibi yazılmıştır.

6. String ler çift veya tek tırnak içine yazılır. Number lar tırnak işaretleri olmadan yazılır. Bir sayıyı tırnak içine alırsanız, metin dizesi olarak kabul edilecektir.

7. Single line comments start with  // .

8. Multi-line comments start with /* and end with */.

9. 4 Ways to Declare a JavaScript Variable:
 - Using var
 - Using let
 - Using const
 - Using nothing
 
10. Value = undefined
	- Değersiz olarak bildirilen bir değişken tanımsız değerine sahip olacaktır. carName değişkeni, bu ifadenin yürütülmesinden sonra undefined değerine sahip olacaktır:
- let carName;

**Re-Declaring JavaScript Variables**
- var carName = "Volvo";
  var carName;

**let veya const ile bildirilen bir değişkeni yeniden bildiremezsiniz.**
- let carName = "Volvo";
  let carName;
  
**The result of adding "John" + " " + "Doe" is:**
    John Doe

**let x = "5" + 2 + 3;** 
523

**let x = 2 + 3 + "5";**
55

**let _x = 2;
let _100 = 5;**
let z =_x + _100;  cevap =7

1. let anahtar sözcüğü ES6'da (2015) tanıtıldı. let ile tanımlanan değişkenler Yeniden Bildirilemez. let ile tanımlanan değişkenler kullanılmadan önce bildirilmelidir. Let ile tanımlanan değişkenler Block Scope'a sahip olur.

2. let x = "John Doe";
   let x = 0;
// SyntaxError: 'x' has already been declared

3. **Block Scope**
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
ES6 introduced two important new JavaScript keywords: let and const.
These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block:
 - {
  let x = 2;
}
// x can NOT be used here

 - {
  var x = 2;
}
// x CAN be used here

 - var x = 2;   // Allowed
   let x = 3;   // Not allowed

 - {
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

 - {
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
4.  **Var Hoisting**(var kaldırma globale taşınır en yukarı ☝ )
Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared:
( Kaldırma var ile tanımlanan değişkenler yukarı kaldırılır ve herhangi bir zamanda başlatılabilir. Anlamı: Değişkeni bildirilmeden önce kullanabilirsiniz:)


** JavaScript const ne zaman kullanılır? Değerin değiştirilmemesi gerektiğini bildiğinizde her zaman const ile bir değişken bildirin.**
- A new Array
- A new Object
- A new Function
- A new RegExp

**Sabit Nesneler ve Diziler const anahtar sözcüğü biraz yanıltıcıdır. Sabit bir değer tanımlamaz. Bir değere sabit bir referans tanımlar. Bu nedenle şunları YAPAMAZSINIZ:**
- Sabit bir değeri yeniden atayın
- Sabit bir diziyi yeniden atama
- Sabit bir nesneyi yeniden atama 

Ama sen yapabilirsin: 
- Sabit dizinin öğelerini değiştirin 
- Sabit nesnenin özelliklerini değiştirin

```javascript
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed

```

| Operator  | Description  |
| ------------ | ------------ |
| +   | toplama  |
|  -  | çıkarma  |
|  * |  çarpma |
|  ** | üs alma  |
| /  |  bölme |
| %  |  bölmede kalan |
|  ++ | arttırma  |
|  -- | azaltma  |


## JavaScript Comparison Operators
(JavaScript Karşılaştırma Operatörleri)

|  Operator |  Description |
| ------------ | ------------ |
| ==  |  eşittir |
| ===  |  eşit değer ve  tip eşit |
|  != | eşit değil  |
| !==  |  tip de değerde işit değil  |
| >  | büyüktür  |
| <  | k,ç,ktür  |
| >=  |  büyük eşittir |
| <=  | küçük eşittir  |
|  ? | ternary operator  |

|  Operator |  Description |
| ------------ | ------------ |
|&&|Logical AND: true if both the operands/boolean values are true, else evaluates to false|
| || |Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false|
| !	 |Logical NOT: true if the operand is false and vice-versa.|

|  Operator |  Description |
| ------------ | ------------ |
|typeof	|  Returns the type of a variable |
|instanceof|	Returns true if an object is an instance of an object type|

<font color="orange"> What is Environment?</font> <br>
<font color="choclate">Geliştirme aşamasından son kulanıcıya kadar ki sürece environment(ortam) denir.</font><br>
development => testing => staging => production <br> 
<font color="orange"> Javascript derlenmez interpretier olarak hemen çalışır <br> high level <br> cross platform <br> object oriented programing language </font> <br>


### let x = 10; 
### x &&= 5; 
and(ve) operatöründe ilki false ise ilk false yi ilki true ise 2. true yu alır

### let x = 10; 
### x = 5; 
   or(yada) operatörü ilki true ise ilk true yu alır ilki false ise ikinci false yi alır

### ??= Operatörü Nullish birleştirme atama operatörü, iki değer arasında kullanılır. İlk değer tanımsız veya boş ise ikinci değer atanır.


<font color="orange">
let x = "Volvo" + 16 + 4;<br>
  - Result:
    Volvo164
</font> <br>

