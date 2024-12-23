function calculateTotal(cart) {
    // Enter your code here
    let M=500;
    let J=3000;
    let T=1500;
    let P=10;
    
    // let n=['M','J','T','P'];
    
    let len=cart.length;
    var add=0;
    for(let i=0;i<len;i++){
        
        let a=cart[i].split(" ");
        // console.log(a);
        //for(let j=0;j<a.length;j++){
            if('M'==a[0]){
                M=Number(M)*(Number(a[1]));
                // console.log("yes");
               // console.log(M);
            }
            else if('J'==a[0]){
                J=Number(J)*(Number(a[1]));
                
            }
            else if('T'==a[0]){
                T=Number(T)*(Number(a[1]));
            }
            
            else if('P'==a[0]){
                P=Number(P)*(Number(a[1]));
            }
            
            
            
            if(a[0]=='M'){
                 add+=M;
            }
            else if(a[0]=='J'){
                add+=J;
            }
            else if(a[0]=='T'){
                add+=T;
            }
          else if(a[0]=='P'){
              add+=P;
          }
           
        }
         console.log(add);

    // let  add=M+J+T+P;
    
    
    
}

let  cart = ["M 3", "J 1", "T 2"];


calculateTotal(cart) 