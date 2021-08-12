let arr =["img/1.jpg","img/2.jpg","img/3.jpg","img/4.png","img/5.jpg"];
let i=0;
image.src=arr[0];
function changeimage()
{
  i++;
  if(i>=arr.length)
  {
    i=0;
  }
  if(i<0)
  {
    i=arr.length-1;
  }
  image.src=arr[i];
}
let active_in = setInterval(changeimage,1000*1.5);
function hovered()
{
  clearInterval(active_in);
}
function unhovered()
{
  active_in = setInterval(changeimage,1000*1.5);
}

function increment(bool)
{
  if(bool==true)
  {
    i++;
    if(i==arr.length)
    {
      i=0;
    }
    image.src=arr[i];
  }
  else{
      i--;
      if(i<0)
      {
        i=arr.length-1;
      }
      image.src=arr[i];
  }
}