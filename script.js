var items = document.getElementsByClassName('row');
// console.log(items);
var cnt = 0,win=false;
var player1=[0,0,0,0,0,0,0,0,0];
var player2=[0,0,0,0,0,0,0,0,0];

function check(arr){
    if(arr[0]==1&&arr[1]==1&&arr[2]==1){
        return true
    }
    else if(arr[3]==1&&arr[4]==1&&arr[5]==1){
        return true
    }
    else if(arr[6]==1&&arr[7]==1&&arr[8]==1){
        return true
    }
    else if(arr[0]==1&&arr[3]==1&&arr[6]==1){
        return true
    }
    else if(arr[1]==1&&arr[4]==1&&arr[7]==1){
        return true
    }
    else if(arr[2]==1&&arr[5]==1&&arr[8]==1){
        return true
    }
    else if(arr[0]==1&&arr[4]==1&&arr[8]==1){
        return true
    }
    else if(arr[2]==1&&arr[4]==1&&arr[6]==1){
        return true
    }
    else{
        return false
    }
}

for (let i = 0; i < items.length; i++) {
    // let item=items[i].id;

    items[i].onclick = function () {

        if (cnt <= 9 ) {
            // console.log(cnt+" before");

            if (cnt % 2 == 0) {
                items[i].textContent = "0";
                player1[i]=1;
                // console.log(i + " i");

            } else {
                items[i].textContent = "X";
                player2[i]=1;
                // console.log(i + " i");

            }
            cnt++;
            // console.log(cnt+" after");

            if(check(player1)){
                win=true;
                alert('Player 1 win');
                window.location.replace(window.location.href);
                
            }else if(check(player2)){
                win=true;
                alert('Player 2 win');
                window.location.replace(window.location.href);
            }

            if(cnt==9 && !win) {
                alert('Draw!');
                window.location.replace(window.location.href);
            }

        }
    }
}
