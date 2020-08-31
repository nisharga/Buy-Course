var data =
    [
    	{"key":"one", "title" : "Mongo DB course", "by" : "Jhankar", "cost" : 25, "hour" : 130, "view" : 100000, "img" : "https://i.postimg.cc/qBjPWHCd/1.jpg"}, 
    	{"key":"two", "title" : "Netlify course", "by" : "Kabir", "cost" : 20, "hour" : 130, "view" : 340000, "img" : "https://i.postimg.cc/WbzBvYMq/2.jpg"}, 
    	{"key":"three", "title" : "React course", "by" : "Nisharga", "cost" : 15, "hour" : 120, "view" : 40000, "img" : "https://i.postimg.cc/TYsZYj97/3.jpg"}, 
    	{"key":"four", "title" : "Javascript course", "by" : "Sayor", "cost" : 35, "hour" : 130, "view" : 444000, "img" : "https://i.postimg.cc/g02SVnNX/4.jpg"}, 
    	{"key":"five", "title" : "Jquery course", "by" : "Anindita", "cost" : 25, "hour" : 120, "view" : 44000, "img" : "https://i.postimg.cc/nz63fTZB/5.jpg"}, 
    	{"key":"six", "title" : "Python course", "by" : "Anindita", "cost" : 18, "hour" : 90, "view" : 54000, "img" : "https://i.postimg.cc/cJzmfTv2/6.jpg"}, 
    	{"key":"seven", "title" : "Django course", "by" : "Aharnish", "cost" : 12, "hour" : 95, "view" : 254000, "img" : "https://i.postimg.cc/Y06zKHdB/7.jpg"}, 
    	{"key":"eight", "title" : "Linux course", "by" : "Aafif", "cost" : 19, "hour" : 90, "view" : 244000, "img" : "https://i.postimg.cc/sDzJPM2j/8.jpg"}, 
    	{"key":"nine", "title" : "Html course", "by" : "Tamim", "cost" : 12, "hour" : 94, "view" : 2000, "img" : "https://i.postimg.cc/d3YG9fwH/9.jpg"}, 
    	{"key":"ten", "title" : "Css course", "by" : "Sakib", "cost" : 32, "hour" : 123, "view" : 52000, "img" : "https://i.postimg.cc/Dfrrz7Pt/10.jpg"}, 
    	{"key":"eleven", "title" : "PSD to HTML course", "by" : "Mokles", "cost" : 10, "hour" : 50, "view" : 252000, "img" : "https://i.postimg.cc/4N8hKy7F/PSD-TO-HTML5.jpg"}, 
    	{"key":"twelve", "title" : "SSL Install course", "by" : "Mahbub", "cost" : 33, "hour" : 50, "view" : 22000, "img" : "https://i.postimg.cc/fTgJzPpG/Imagine-nation.png"}, 
    	{"key":"thirteen", "title" : "SSL Install course", "by" : "Mahbub", "cost" : 33, "hour" : 50, "view" : 22000, "img" : "https://i.postimg.cc/fTgJzPpG/Imagine-nation.png"}, 
    	{"key":"fourteen", "title" : "SSL Install course", "by" : "Hasan", "cost" : 23, "hour" : 50, "view" : 300, "img" : "https://i.postimg.cc/L4xsD79J/Hypertext-Transfer-Protocol-Secure.png"}, 
    ];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(data);


export default data;