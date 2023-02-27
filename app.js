let hour=document.querySelector(".hour");
let minute=document.querySelector(".minute");
let second=document.querySelector(".second");
setInterval(()=>{
    const obj=new Date();
    const htime=obj.getHours();
    const mtime=obj.getMinutes();
    const stime=obj.getSeconds();
    const hrotation=30*htime+mtime/2;
    const mrotation=6*mtime;
    const srotation=6*stime;
    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`
},1000)