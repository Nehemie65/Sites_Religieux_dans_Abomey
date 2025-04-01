var wms_layers = [];


        var lyr_satelitegooglemaps_0 = new ol.layer.Tile({
            'title': 'satelite googlemaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CommunedAbomey_2 = new ol.format.GeoJSON();
var features_CommunedAbomey_2 = format_CommunedAbomey_2.readFeatures(json_CommunedAbomey_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunedAbomey_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunedAbomey_2.addFeatures(features_CommunedAbomey_2);
var lyr_CommunedAbomey_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunedAbomey_2, 
                style: style_CommunedAbomey_2,
                popuplayertitle: 'Commune d\'Abomey',
                interactive: true,
                title: '<img src="styles/legend/CommunedAbomey_2.png" /> Commune d\'Abomey'
            });
var format_ArrondissementdAbomey_3 = new ol.format.GeoJSON();
var features_ArrondissementdAbomey_3 = format_ArrondissementdAbomey_3.readFeatures(json_ArrondissementdAbomey_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArrondissementdAbomey_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArrondissementdAbomey_3.addFeatures(features_ArrondissementdAbomey_3);
var lyr_ArrondissementdAbomey_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArrondissementdAbomey_3, 
                style: style_ArrondissementdAbomey_3,
                popuplayertitle: 'Arrondissement d\'Abomey',
                interactive: true,
                title: '<img src="styles/legend/ArrondissementdAbomey_3.png" /> Arrondissement d\'Abomey'
            });
var format_Lessitesreligieux_4 = new ol.format.GeoJSON();
var features_Lessitesreligieux_4 = format_Lessitesreligieux_4.readFeatures(json_Lessitesreligieux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lessitesreligieux_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lessitesreligieux_4.addFeatures(features_Lessitesreligieux_4);
var lyr_Lessitesreligieux_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lessitesreligieux_4, 
                style: style_Lessitesreligieux_4,
                popuplayertitle: 'Les sites religieux',
                interactive: true,
    title: 'Les sites religieux<br />\
    <img src="styles/legend/Lessitesreligieux_4_0.png" /> Catholiques<br />\
    <img src="styles/legend/Lessitesreligieux_4_1.png" /> Evangéliques<br />\
    <img src="styles/legend/Lessitesreligieux_4_2.png" /> Protestant<br />\
    <img src="styles/legend/Lessitesreligieux_4_3.png" /> Céleste<br />\
    <img src="styles/legend/Lessitesreligieux_4_4.png" /> Mosqué<br />\
    <img src="styles/legend/Lessitesreligieux_4_5.png" /> Vodun<br />' });

lyr_satelitegooglemaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_CommunedAbomey_2.setVisible(true);lyr_ArrondissementdAbomey_3.setVisible(true);lyr_Lessitesreligieux_4.setVisible(true);
var layersList = [lyr_satelitegooglemaps_0,lyr_OpenStreetMap_1,lyr_CommunedAbomey_2,lyr_ArrondissementdAbomey_3,lyr_Lessitesreligieux_4];
lyr_CommunedAbomey_2.set('fieldAliases', {'fid': 'fid', 'COMM_L': 'COMM_L', 'ZS': 'ZS', 'Dept': 'Dept', 'PDA': 'PDA', });
lyr_ArrondissementdAbomey_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'ARROND_L': 'ARROND_L', 'ARROND_C': 'ARROND_C', 'ARROND_L_A': 'ARROND_L_A', 'DENSITE': 'DENSITE', 'Z_PROJET_C': 'Z_PROJET_C', 'pop': 'pop', 'km': 'km', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Lessitesreligieux_4.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Types': 'Types', 'Dirigeant': 'Dirigeant', 'Adresses': 'Adresses', 'Constructi': 'Constructi', 'Photos': 'Photos', 'Arrond': 'Arrond', 'Commune': 'Commune', 'Depart': 'Depart', 'Operateur': 'Operateur', 'Num OPera': 'Num OPera', 'Date': 'Date', 'Coed X': 'Coed X', 'Cord Y': 'Cord Y', });
lyr_CommunedAbomey_2.set('fieldImages', {'fid': 'TextEdit', 'COMM_L': 'TextEdit', 'ZS': 'TextEdit', 'Dept': 'TextEdit', 'PDA': 'TextEdit', });
lyr_ArrondissementdAbomey_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'ARROND_L': 'TextEdit', 'ARROND_C': 'TextEdit', 'ARROND_L_A': 'TextEdit', 'DENSITE': 'TextEdit', 'Z_PROJET_C': 'TextEdit', 'pop': 'TextEdit', 'km': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Lessitesreligieux_4.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Types': 'ValueMap', 'Dirigeant': 'TextEdit', 'Adresses': 'TextEdit', 'Constructi': 'ValueMap', 'Photos': 'ExternalResource', 'Arrond': 'ValueMap', 'Commune': 'ValueMap', 'Depart': 'ValueMap', 'Operateur': 'ValueMap', 'Num OPera': 'ValueMap', 'Date': 'DateTime', 'Coed X': 'TextEdit', 'Cord Y': 'TextEdit', });
lyr_CommunedAbomey_2.set('fieldLabels', {'fid': 'hidden field', 'COMM_L': 'inline label - visible with data', 'ZS': 'hidden field', 'Dept': 'hidden field', 'PDA': 'no label', });
lyr_ArrondissementdAbomey_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'ARROND_L': 'hidden field', 'ARROND_C': 'hidden field', 'ARROND_L_A': 'inline label - visible with data', 'DENSITE': 'inline label - visible with data', 'Z_PROJET_C': 'hidden field', 'pop': 'hidden field', 'km': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Lessitesreligieux_4.set('fieldLabels', {'fid': 'hidden field', 'Nom': 'inline label - visible with data', 'Types': 'inline label - visible with data', 'Dirigeant': 'inline label - visible with data', 'Adresses': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Photos': 'inline label - visible with data', 'Arrond': 'inline label - visible with data', 'Commune': 'inline label - visible with data', 'Depart': 'inline label - visible with data', 'Operateur': 'inline label - visible with data', 'Num OPera': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Coed X': 'inline label - visible with data', 'Cord Y': 'inline label - visible with data', });
lyr_Lessitesreligieux_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});