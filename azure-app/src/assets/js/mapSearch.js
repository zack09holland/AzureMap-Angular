var addControls = (function() {
     //Remove all controls on the map.
     map.controls.remove(controls);
     controls = [];
 
     //Get input options.
     var positionOption = getSelectValue('controlPosition');
     var controlStyle = getSelectValue('controlStyle');
     var pickerLayout = getSelectValue('pickerLayout');
 
     var mapStyles = [];
     var pickerStyles = document.getElementById('pickerStyles');
 
     for (var i = 0; i < pickerStyles.length; i++) {
         if (pickerStyles.options[i].selected) {
             mapStyles.push(pickerStyles.options[i].value);
         }
     }
 
     //Create a zoom control.
     controls.push(new atlas.control.ZoomControl({
         zoomDelta: parseFloat(getSelectValue('zoomControlDelta')),
         style: controlStyle
     }));
 
     //Create a pitch control and add it to the map.
     controls.push(new atlas.control.PitchControl({
         pitchDegreesDelta: parseFloat(getSelectValue('pitchControlDelta')),
         style: controlStyle
     }));
 
     //Create a compass control and add it to the map.
     controls.push(new atlas.control.CompassControl({
         rotationDegreesDelta: parseFloat(getSelectValue('compassControlRotationDelta')),
         style: controlStyle
     }));
 
     //Create a style control and add it to the map.
     controls.push(new atlas.control.StyleControl({
         style: controlStyle,
         mapStyles: mapStyles,
         layout: pickerLayout
     }));
 
     //Add controls to the map.
     map.controls.add(controls, {
         position: positionOption
     });

})(addControls||{})

// function addControls() {
//     //Remove all controls on the map.
//     map.controls.remove(controls);
//     controls = [];

//     //Get input options.
//     var positionOption = getSelectValue('controlPosition');
//     var controlStyle = getSelectValue('controlStyle');
//     var pickerLayout = getSelectValue('pickerLayout');

//     var mapStyles = [];
//     var pickerStyles = document.getElementById('pickerStyles');

//     for (var i = 0; i < pickerStyles.length; i++) {
//         if (pickerStyles.options[i].selected) {
//             mapStyles.push(pickerStyles.options[i].value);
//         }
//     }

//     //Create a zoom control.
//     controls.push(new atlas.control.ZoomControl({
//         zoomDelta: parseFloat(getSelectValue('zoomControlDelta')),
//         style: controlStyle
//     }));

//     //Create a pitch control and add it to the map.
//     controls.push(new atlas.control.PitchControl({
//         pitchDegreesDelta: parseFloat(getSelectValue('pitchControlDelta')),
//         style: controlStyle
//     }));

//     //Create a compass control and add it to the map.
//     controls.push(new atlas.control.CompassControl({
//         rotationDegreesDelta: parseFloat(getSelectValue('compassControlRotationDelta')),
//         style: controlStyle
//     }));

//     //Create a style control and add it to the map.
//     controls.push(new atlas.control.StyleControl({
//         style: controlStyle,
//         mapStyles: mapStyles,
//         layout: pickerLayout
//     }));

//     //Add controls to the map.
//     map.controls.add(controls, {
//         position: positionOption
//     });
// }

function getSelectValue(id) {
    var elm = document.getElementById(id);
    return elm.options[elm.selectedIndex].value;
}