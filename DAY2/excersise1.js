//asn 1:-
let challenge ='30 Days Of JavaScript';
//2
console.log(challenge)
//3
console.log(challenge.length)
//4
console.log(challenge.toUpperCase())
//5
console.log(challenge.toLowerCase())
//6
console.log(challenge.substr(3,4),challenge.substring(3,8))
//7
console.log(challenge.substr(3,challenge.length-3))
//8
console.log(challenge.includes('Of'))
//9
console.log(challenge.split(' '));
//10
//9

//11
let temp = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(temp.split(', '))
//12
console.log(challenge.replace('JavaScript','Python'))

//13
console.log(challenge.charAt(15))
//14
console.log(challenge.charCodeAt(11))
//15
console.log(challenge.indexOf('a'))
//16

console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
//17
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))


//Challange 2
//1

let quote = "The quote 'There is no exercise better \
for the heart than reaching down and lifting people up.'\
 by John Holmes teaches us to help one another."
console.log(quote);


//2
let tp = '10';
console.log(typeof tp) // != typeof 10
//so
tp = +tp
console.log(typeof tp == typeof 10)

//3
console.log(parseFloat('9.8')==10)//=>false
console.log(Math.ceil(parseFloat('9.8'))==10)

//4
console.log('python'.search('on'),'jargon'.search('on'))
//5
console.log(Math.random()*101)
//6
console.log(Math.random()*51+50)
//7
console.log('JavaScript'[Math.ceil(Math.random()*'JavaScript'.length)])
//8
let y = '1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125';
console.log(y)


//LEVEL 3

//9
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length)
//10

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
new_sentence = sentence.match(/([a-zA-Z0-9\s]+)+/gi).join('')

console.log(new_sentence)
let dic={}
new_sentence.split(' ').map((a)=>{dic[a]=0})
new_sentence.match(/\w+/g).map((a)=>{dic[a]+=1})
console.log(dic.key())

//11
let stmp ="by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
console.log(Number(stmp.match(/\d+/g)[0])+Number(stmp.match(/\d+/g)[1])+Number(stmp.match(/\d+/g)[2]))
ans=0
console.log(stmp.match(/\d+/g).map(Number).map((a)=>{ans+=a;return ans})[2])


//END 12/17/22 :- 4:44 with 30 min tiffin break in middle