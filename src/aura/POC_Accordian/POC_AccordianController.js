({
     
    toggleSection : function(component, event, helper) {
        //$A.util.toggleClass(component.find("accordion"), 'slds-is-open');
        //alert("in toggleSection");
        var bIsDefaultOpen = component.get("v.bIsDefaultOpen");
        bIsDefaultOpen = bIsDefaultOpen ? false : true;
        component.set("v.bIsDefaultOpen", bIsDefaultOpen);
        /*var bIsClosed = component.get("v.bIsClosed");
        bIsClosed = bIsDefaultOpen ? false : true;
        component.set("v.bIsClosed", bIsClosed);*/
        helper.onClick(component, event, helper);
    }
})