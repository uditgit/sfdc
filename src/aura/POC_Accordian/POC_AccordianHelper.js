({
    onClick : function(component,event, helper){ 
       // alert("in onclick!");
     // "sApplicationId" : component.getReference("v.sApplicationId"),
       //         "idApplication" : component.getReference("v.sApplicationId")
       // alert("sec is"+ sec);
       
       // alert("key value is"+appIdName);
        
        $A.createComponent(
            component.get("v.compName"),
            {
                "sApplicationId": component.getReference("v.sApplicationId"),
                "bIsRegSummary" : component.getReference("v.bIsRegSummary"),
                "bIsDisabled" : component.getReference("v.bIsDisabled")
                
            },
            function(compNew, status, errorMessage){
                if (component.isValid()){
                    if (status === "SUCCESS") {
                        // alert("in success!");
                        // var body = component.get("v.body");
                        // body.push(compNew);
                        component.set("v.body", compNew);
                    }
                    
                    else if (status === "INCOMPLETE") {
                        console.log("No response from server or client is offline.")
                        alert("in incomplete");
                        // Show offline error
                    }
                        else if (status === "ERROR") {
                            console.log("Error: " + errorMessage);
                            alert("in error!");
                            // Show error message
                        }
                }}
        );
        //this.toggleSection;
    }

 })