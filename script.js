var output = [];
var count = 1;
function finbuzz(){
    if (count % 3 == 0 && count % 5 == 0){
        output.push("finbuzz");
    }else if (count % 3 == 0){
        output.push("fin");
    }else if(count % 5 == 0) {
        output.push("buzz");
    }else {
        output.push(count);
    }
    count++;
    document.write("["+output+"]");
}
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();
finbuzz();