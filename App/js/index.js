// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("43.833333333333336em")
                .setHeight("2.5em")
                .setLabelSize("8em")
                .setLabelCaption("Name")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("2.5em")
                .setWidth("43.833333333333336em")
                .setHeight("2.5em")
                .setLabelSize("8em")
                .setLabelCaption("Age")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input4")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("5em")
                .setWidth("43.833333333333336em")
                .setHeight("2.5em")
                .setLabelSize("8em")
                .setLabelCaption("Father's/Husband's Name")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("7.5em")
                .setWidth("43.833333333333336em")
                .setHeight("2.5em")
                .setLabelSize("8em")
                .setLabelCaption("Designation")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("10em")
                .setWidth("43.833333333333336em")
                .setHeight("5em")
                .setLabelSize("8em")
                .setLabelCaption("Office Address")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("15em")
                .setWidth("43.833333333333336em")
                .setHeight("5.833333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("Residential Address")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("20.833333333333332em")
                .setWidth("43.833333333333336em")
                .setHeight("2.5em")
                .setLabelSize("8em")
                .setLabelCaption("Email")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput10")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("23.333333333333332em")
                .setWidth("43.833333333333336em")
                .setLabelSize("8em")
                .setLabelCaption("Phone Number")
                .setType("number")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput11")
                .setName("Mode of Communication")
                .setRequired(true)
                .setLeft("0em")
                .setTop("25em")
                .setWidth("43.833333333333336em")
                .setZIndex(5)
                .setLabelSize("8em")
                .setLabelCaption("Mode of Communication")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Email",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Phone Number",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"Whatsapp",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"Post",
                        "imageClass":"xui-icon-number4",
                        "iconFontSize":""
                    },
                    {
                        "id":"e",
                        "caption":"Registered Post",
                        "imageClass":"xui-icon-number5"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        functions:{ }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});