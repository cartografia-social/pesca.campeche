var size = 0;
var placement = 'point';

var style_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'ISOCPEUR\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("descricao") !== null) {
        labelText = String(feature.get("descricao"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(141,23,243,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(5)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
