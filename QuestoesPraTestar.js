-- Arquivos pra teste

--- QUICKSORTT tah pegandooo

function quicksort (array){
    var less = [];
    var equal = [];
    var greater = [];
    var len = array.len;
    var pivot = array.head;
 
    if (len == 0){
        return [];
    }else{
 
        var i = 0;
        while(i<len) {
            var temp = array[i];
            if (temp < pivot){
                less = less.concat(temp);
            }
            if (temp == pivot){
                equal = equal.concat(temp);
            }
            if (temp>pivot){
                greater = greater.concat(temp);
            }
            i=i+1;
        }
    }
    less = quicksort(less);
    greater = quicksort(greater);
    var aux = less.concat(equal);
    array = aux.concat(greater);
    return array;
}
var x = quicksort([3,4,1,5,9]);
x;

-----------------------------------

-- Teste funcao recursiva

function fatorial(num) {
    if(num < 2) {
        return 1;
    }
    return fatorial(num-1)*num;
}
fatorial(4);

----------------------------------
-- Teste for e break

var num = 2;
for (var i = 0; i < 10; ) { 
	if (i ==3) { 
		break;
	}
	num = num+2;
	i=i+1; 
} 
num;

--------------------------------
-- if / if-else 
var workingHard = true;
if (workingHard){
	pass = true;
}

//testando if-else com break ou sem break
var a = 3;
var b = 0;
if(a<1){
 	b=1;
}else{
	//break;
	var c=5;
}

------------------------------------

function repeteNumero(num){
	var list = [];
	var i = 0;
	while(i<num){
		list = list.concat(num);
		i = i+1;
	}
	return list;
} 
repeteNumero(5);

-----------------------------------