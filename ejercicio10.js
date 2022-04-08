function amountOfPages(summary){
    let pages= '';
  for(let i=1; i<=summary;i++){
      pages+= i;
  }
  let n = pages.substring(0,summary)
return n.substring(n.length-2, n.length);
}
