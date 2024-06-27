function Check(props){
    if(props.isGoal){ 
    return(
        <>
            
         <div style={{height:"200px",width:"100%",background:"red"}}>
         <h1>Is a goal</h1>
     </div>
     </>
    );
       }else{

        return (
            <div style={{height:"200px",width:"100%",background:"green"}}>
            <h1>Is not a goal</h1>
        </div>
        )
}
    
    
}

export default Check;