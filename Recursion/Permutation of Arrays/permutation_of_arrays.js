/* using extra space */
function recursivePermute(ans, ds, arr, freq) {
  if (ds.length === arr.length) {
    ans.push([...ds]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!freq[i]) {
      ds.push(arr[i]);
      freq[i] = 1;
      recursivePermute(ans, ds, arr, freq);
      ds.pop();
      freq[i] = 0;
    }
  }
}

(function main() {
  const arr = [3, 1, 2];
  let ans = [];
  let ds = [];
  let freq = Array(arr.length).fill(0);
  recursivePermute(ans, ds, arr, freq);
  console.log(ans);
})();


/* without using extra space - using backtracking */
function recursivePermute(index,ans,arr) {
    if(index === arr.length){
        ans.push([...arr]);
        return
    }

    for(let i=index; i<arr.length; i++){
        swap(arr,index,i)
        recursivePermute(index+1,ans,arr)
        swap(arr,index,i)
    }
}


function swap(arr,start,end){
    [arr[start],arr[end]] = [arr[end],arr[start]]
}

(function main(){
    const arr = [3,1,2]
    let ans = []
    recursivePermute(0,ans,arr)
    console.log(ans)
})()