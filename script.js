let f=0;
let a='O';
let b='X';
let ar1=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let ar2=[];
let gm=false;
let l=0;
function res(){
    let c=document.querySelectorAll(".box");
    for(let i=0;i<c.length;i++){
        c[i].innerHTML="";
    }
    f=0;
    ar2=[];
    gm=false;
    document.querySelector("#wl").innerHTML="";
    l=0;
}
 
function cal(d){
    for(let x=0;x<ar1.length;x++){
        for(let y=0;y<3;y++){
            if(ar2[ar1[x][y]]==d){
                if(y==2){
                    document.querySelector("#wl").innerHTML=d+"  wins";
                                    gm=true;
                }
                
            }
            else
            break;
        }
    }
    

}

function mark(btn,num){
    if(ar2[num]||gm)
        return;
    
    
        if(f==0){
            btn.innerHTML="O";
            f=1;
            ar2[num]="O";
            l++;
            
            
            cal(a);
            if(l==9)
                res();

        }
        else if(f==1){
            l++;
            btn.innerHTML="X";
            f=0;
            ar2[num]="X";
            cal(b);
            if(l==9)
                res();
            

        
    }

}
