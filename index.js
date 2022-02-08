window.onload = ()=>{
    
    const ctx = canvas.getContext("2d");
    
    let value1 = 0;
    
    let value2 = 0;
    
    let textColor = "black"
    
    let colorSelected = "#000";
    
    //checkbox
    check.addEventListener("input",(e)=>{
    
        ctx.clearRect(0,0,canvas.width,canvas.height);
        
    })
    //Size
    range1.addEventListener("input",(e)=>{
        
        
        value1 = e.target.value;
        
        draw()
        
        
    })
    //amplitude range
    range2.addEventListener("input",(e)=>{
        
        value2 = e.target.value / 100000;
        
        draw()
        
    })
    
    //color Picker
    colorP.addEventListener("input",(e)=>{
        
        colorSelected = e.target.value;
        
    })
    
    randomWave.addEventListener("click",()=>{
        
        value1 = Math.round(Math.random() * (200 - -200) + -200);
        value2 = (Math.random() * 300000 + 1000) / 100000;
        
        range1.value = value1;
        range2.value = value2 * 100000;
        
        draw()
        
    })
    
    function draw() {
        if(check.checked)
            ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.beginPath()
    
    
        for(let i =0; i < canvas.width;i++) {
        
            ctx.lineTo(i, canvas.height/2 + Math.sin(i * value2 + 1) * value1);
        
        }
        
        if(check.checked) {
            
            textColor = "#000"
            ctx.fillStyle = textColor;
            
            
        }else{
            
            textColor = "#0000"
            ctx.fillStyle = textColor;
            
            
        }
        
        //display values on screen
        ctx.fillText(value1,20,canvas.height-10);
        
        ctx.fillText(value2,100,canvas.height-10);
        
        
        
        ctx.strokeStyle = colorSelected;
        ctx.stroke()
        
        
    }
    
    draw()
    
    /*
    
    function animate() {
    
        draw()
        
        requestAnimationFrame(animate)
    
    
    }
    
    animate()*/
    
}