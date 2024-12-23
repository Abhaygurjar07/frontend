
let arr = [
    {
        profile: "https://plus.unsplash.com/premium_photo-1727894728393-3869871407a4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName: "John Doe",
        time: "2 hour ago",
        story:"https://images.unsplash.com/photo-1734375294751-e5afcb9dd9f8?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        profile: "https://images.unsplash.com/photo-1732734042420-1fa41185ad56?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName: "Jane Smith",
        time: "1 hour ago",
         story:"https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        profile: "https://randomuser.me/api/portraits/men/3.jpg",
        fullName: "Michael Johnson",
        time: "30 min ago",
         story:"https://images.unsplash.com/photo-1733860474140-1734a8361e82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        profile: "https://randomuser.me/api/portraits/women/4.jpg",
        fullName: "Emily Davis",
        time: "2 hour ago",
         story:"https://images.unsplash.com/photo-1535579710123-3c0f261c474e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        profile: "https://randomuser.me/api/portraits/men/1.jpg",
        fullName: "John Doe",
        time: "5 hour ago",
         story:"https://images.unsplash.com/photo-1732492211739-16eea9575e84?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        profile: "https://randomuser.me/api/portraits/women/2.jpg",
        fullName: "Jane Smith", 
        time: "2hour ago",
        story:"https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        profile: "https://randomuser.me/api/portraits/men/3.jpg",
        fullName: "Michael Johnson",
        time: "2hour ago",
        story: "https://images.unsplash.com/photo-1732923323323-8d2e805661df?q=80&w=1729&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        profile: "https://randomuser.me/api/portraits/women/4.jpg",
        fullName: "Emily Davis",
        time: "2hour ago",
        story: "https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        profile: "https://randomuser.me/api/portraits/men/5.jpg",
        fullName: "William Taylor",
        time: "2hour ago",
        story:"https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    }];


    
    var sum = ''
arr.forEach(function(elem,idx){
    // console.log(idx);
    sum = sum + `<div id="story">
            <img id=${idx}  src="${elem.profile}" alt="">
        </div>`
})
var storiyan = document.querySelector('.storiyan')
var full = document.querySelector('.full')
document.querySelector('.full img')
storiyan.innerHTML = sum

storiyan.addEventListener('click',function(dets){
    var gold = arr[dets.target.id].story

    full.style.display = 'block'
    full.style.backgroundImage =  `url(${gold})`


    setTimeout(function(){
        full.style.display = 'none'
        clearInterval(inter)
    },2000)
})

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#story img').forEach((img, idx) => {
        img.addEventListener('click', function() {
            document.querySelector('.full').style.backgroundImage = `url(${arr[idx].story})`;
            document.querySelector('.full').style.display = 'block';
            document.querySelector('.hidden img').src = arr[idx].profile;
            document.querySelector('.hidden h2').textContent = arr[idx].fullName;
            document.querySelector('.hidden h5').style.display = 'block'; // updated to always show h5
            document.querySelector('.hidden h5').textContent = arr[idx].time ? arr[idx].time : 'No time available'; // updated to show 'No time available' if time is empty
            document.querySelector('.hidden').style.display = 'flex'; // updated to display: flex
        });
    });
});

