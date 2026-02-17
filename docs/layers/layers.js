var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_A2BoughtonBypass7yrPICExcelReport_2 = new ol.format.GeoJSON();
var features_A2BoughtonBypass7yrPICExcelReport_2 = format_A2BoughtonBypass7yrPICExcelReport_2.readFeatures(json_A2BoughtonBypass7yrPICExcelReport_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A2BoughtonBypass7yrPICExcelReport_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A2BoughtonBypass7yrPICExcelReport_2.addFeatures(features_A2BoughtonBypass7yrPICExcelReport_2);
var lyr_A2BoughtonBypass7yrPICExcelReport_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A2BoughtonBypass7yrPICExcelReport_2, 
                style: style_A2BoughtonBypass7yrPICExcelReport_2,
                popuplayertitle: 'A2 Boughton Bypass 7yr PIC Excel Report',
                interactive: true,
    title: 'A2 Boughton Bypass 7yr PIC Excel Report<br />\
    <img src="styles/legend/A2BoughtonBypass7yrPICExcelReport_2_0.png" /> 1<br />\
    <img src="styles/legend/A2BoughtonBypass7yrPICExcelReport_2_1.png" /> 2<br />\
    <img src="styles/legend/A2BoughtonBypass7yrPICExcelReport_2_2.png" /> 3<br />' });
var format_A20CapelLeFerne7yrPICExcelReport_3 = new ol.format.GeoJSON();
var features_A20CapelLeFerne7yrPICExcelReport_3 = format_A20CapelLeFerne7yrPICExcelReport_3.readFeatures(json_A20CapelLeFerne7yrPICExcelReport_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A20CapelLeFerne7yrPICExcelReport_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A20CapelLeFerne7yrPICExcelReport_3.addFeatures(features_A20CapelLeFerne7yrPICExcelReport_3);
var lyr_A20CapelLeFerne7yrPICExcelReport_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_A20CapelLeFerne7yrPICExcelReport_3, 
                style: style_A20CapelLeFerne7yrPICExcelReport_3,
                popuplayertitle: 'A20, Capel Le Ferne 7yr PIC Excel Report',
                interactive: true,
    title: 'A20, Capel Le Ferne 7yr PIC Excel Report<br />\
    <img src="styles/legend/A20CapelLeFerne7yrPICExcelReport_3_0.png" /> 1<br />\
    <img src="styles/legend/A20CapelLeFerne7yrPICExcelReport_3_1.png" /> 2<br />\
    <img src="styles/legend/A20CapelLeFerne7yrPICExcelReport_3_2.png" /> 3<br />' });

lyr_CartoLight_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_A2BoughtonBypass7yrPICExcelReport_2.setVisible(true);lyr_A20CapelLeFerne7yrPICExcelReport_3.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_GoogleSatelliteHybrid_1,lyr_A2BoughtonBypass7yrPICExcelReport_2,lyr_A20CapelLeFerne7yrPICExcelReport_3];
lyr_A2BoughtonBypass7yrPICExcelReport_2.set('fieldAliases', {'Map Ref': 'Map Ref', '1st Road Class & No': '1st Road Class & No', 'Accident Severity': 'Accident Severity', 'Accident Date': 'Accident Date', 'Time (24hr)': 'Time (24hr)', 'Lighting Conditions': 'Lighting Conditions', 'Road Surface': 'Road Surface', 'Weather Conditions': 'Weather Conditions', 'Number of Vehicles': 'Number of Vehicles', 'Number of Casualties': 'Number of Casualties', 'Local Authority': 'Local Authority', 'Grid Ref: Easting': 'Grid Ref: Easting', 'Grid Ref: Northing': 'Grid Ref: Northing', 'Location': 'Location', 'Description': 'Description', });
lyr_A20CapelLeFerne7yrPICExcelReport_3.set('fieldAliases', {'Project Name': 'Project Name', 'Project No.': 'Project No.', 'Project Manager': 'Project Manager', 'Client': 'Client', 'Data Received': 'Data Received', 'Link to Data': 'Link to Data', 'Map Ref': 'Map Ref', '1st Road Class & No': '1st Road Class & No', 'Accident Severity': 'Accident Severity', 'Accident Date': 'Accident Date', 'Time (24hr)': 'Time (24hr)', 'Lighting Conditions': 'Lighting Conditions', 'Road Surface': 'Road Surface', 'Weather Conditions': 'Weather Conditions', 'Number of Vehicles': 'Number of Vehicles', 'Number of Casualties': 'Number of Casualties', 'Local Authority': 'Local Authority', 'Grid Ref: Easting': 'Grid Ref: Easting', 'Grid Ref: Northing': 'Grid Ref: Northing', 'Location': 'Location', 'Description': 'Description', });
lyr_A2BoughtonBypass7yrPICExcelReport_2.set('fieldImages', {'Map Ref': 'Range', '1st Road Class & No': 'TextEdit', 'Accident Severity': 'Range', 'Accident Date': 'TextEdit', 'Time (24hr)': 'Range', 'Lighting Conditions': 'Range', 'Road Surface': 'Range', 'Weather Conditions': 'Range', 'Number of Vehicles': 'Range', 'Number of Casualties': 'Range', 'Local Authority': 'TextEdit', 'Grid Ref: Easting': 'Range', 'Grid Ref: Northing': 'Range', 'Location': 'TextEdit', 'Description': 'TextEdit', });
lyr_A20CapelLeFerne7yrPICExcelReport_3.set('fieldImages', {'Project Name': '', 'Project No.': '', 'Project Manager': '', 'Client': '', 'Data Received': '', 'Link to Data': '', 'Map Ref': 'Range', '1st Road Class & No': 'TextEdit', 'Accident Severity': 'Range', 'Accident Date': 'TextEdit', 'Time (24hr)': 'Range', 'Lighting Conditions': 'Range', 'Road Surface': 'Range', 'Weather Conditions': 'Range', 'Number of Vehicles': 'Range', 'Number of Casualties': 'Range', 'Local Authority': 'TextEdit', 'Grid Ref: Easting': 'Range', 'Grid Ref: Northing': 'Range', 'Location': 'TextEdit', 'Description': 'TextEdit', });
lyr_A2BoughtonBypass7yrPICExcelReport_2.set('fieldLabels', {'Map Ref': 'no label', '1st Road Class & No': 'no label', 'Accident Severity': 'no label', 'Accident Date': 'no label', 'Time (24hr)': 'no label', 'Lighting Conditions': 'no label', 'Road Surface': 'no label', 'Weather Conditions': 'no label', 'Number of Vehicles': 'no label', 'Number of Casualties': 'no label', 'Local Authority': 'no label', 'Grid Ref: Easting': 'no label', 'Grid Ref: Northing': 'no label', 'Location': 'no label', 'Description': 'no label', });
lyr_A20CapelLeFerne7yrPICExcelReport_3.set('fieldLabels', {'Project Name': 'no label', 'Project No.': 'no label', 'Project Manager': 'no label', 'Client': 'no label', 'Data Received': 'no label', 'Link to Data': 'no label', 'Map Ref': 'no label', '1st Road Class & No': 'no label', 'Accident Severity': 'no label', 'Accident Date': 'no label', 'Time (24hr)': 'no label', 'Lighting Conditions': 'no label', 'Road Surface': 'no label', 'Weather Conditions': 'no label', 'Number of Vehicles': 'no label', 'Number of Casualties': 'no label', 'Local Authority': 'no label', 'Grid Ref: Easting': 'no label', 'Grid Ref: Northing': 'no label', 'Location': 'no label', 'Description': 'no label', });
lyr_A20CapelLeFerne7yrPICExcelReport_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});