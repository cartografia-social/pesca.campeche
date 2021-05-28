var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WikimediaMaps_1 = new ol.layer.Tile({
            'title': 'Wikimedia Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
            })
        });
var format_DistritoAdministrativodoCampeche_2 = new ol.format.GeoJSON();
var features_DistritoAdministrativodoCampeche_2 = format_DistritoAdministrativodoCampeche_2.readFeatures(json_DistritoAdministrativodoCampeche_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritoAdministrativodoCampeche_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritoAdministrativodoCampeche_2.addFeatures(features_DistritoAdministrativodoCampeche_2);
var lyr_DistritoAdministrativodoCampeche_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistritoAdministrativodoCampeche_2, 
                style: style_DistritoAdministrativodoCampeche_2,
                interactive: true,
                title: '<img src="styles/legend/DistritoAdministrativodoCampeche_2.png" /> Distrito Administrativo do Campeche'
            });
var format_Fontesdguaantigas_3 = new ol.format.GeoJSON();
var features_Fontesdguaantigas_3 = format_Fontesdguaantigas_3.readFeatures(json_Fontesdguaantigas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fontesdguaantigas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fontesdguaantigas_3.addFeatures(features_Fontesdguaantigas_3);
var lyr_Fontesdguaantigas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fontesdguaantigas_3, 
                style: style_Fontesdguaantigas_3,
                interactive: true,
                title: '<img src="styles/legend/Fontesdguaantigas_3.png" /> Fontes d\'água antigas'
            });
var format_Lagoa_4 = new ol.format.GeoJSON();
var features_Lagoa_4 = format_Lagoa_4.readFeatures(json_Lagoa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagoa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagoa_4.addFeatures(features_Lagoa_4);
var lyr_Lagoa_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagoa_4, 
                style: style_Lagoa_4,
                interactive: true,
                title: '<img src="styles/legend/Lagoa_4.png" /> Lagoa'
            });
var format_Rio_5 = new ol.format.GeoJSON();
var features_Rio_5 = format_Rio_5.readFeatures(json_Rio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_5.addFeatures(features_Rio_5);
var lyr_Rio_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rio_5, 
                style: style_Rio_5,
                interactive: true,
                title: '<img src="styles/legend/Rio_5.png" /> Rio'
            });
var format_readepescapredatriaporatuneiros_6 = new ol.format.GeoJSON();
var features_readepescapredatriaporatuneiros_6 = format_readepescapredatriaporatuneiros_6.readFeatures(json_readepescapredatriaporatuneiros_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readepescapredatriaporatuneiros_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readepescapredatriaporatuneiros_6.addFeatures(features_readepescapredatriaporatuneiros_6);
var lyr_readepescapredatriaporatuneiros_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readepescapredatriaporatuneiros_6, 
                style: style_readepescapredatriaporatuneiros_6,
                interactive: true,
                title: '<img src="styles/legend/readepescapredatriaporatuneiros_6.png" /> Área de pesca predatória por atuneiros'
            });
var format_reademinerao_7 = new ol.format.GeoJSON();
var features_reademinerao_7 = format_reademinerao_7.readFeatures(json_reademinerao_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reademinerao_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reademinerao_7.addFeatures(features_reademinerao_7);
var lyr_reademinerao_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reademinerao_7, 
                style: style_reademinerao_7,
                interactive: true,
                title: '<img src="styles/legend/reademinerao_7.png" /> Área de mineração'
            });
var format_readeexploraoimobiliria_8 = new ol.format.GeoJSON();
var features_readeexploraoimobiliria_8 = format_readeexploraoimobiliria_8.readFeatures(json_readeexploraoimobiliria_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeexploraoimobiliria_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeexploraoimobiliria_8.addFeatures(features_readeexploraoimobiliria_8);
var lyr_readeexploraoimobiliria_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeexploraoimobiliria_8, 
                style: style_readeexploraoimobiliria_8,
                interactive: true,
                title: '<img src="styles/legend/readeexploraoimobiliria_8.png" /> Área de exploração imobiliária'
            });
var format_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9 = new ol.format.GeoJSON();
var features_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9 = format_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9.readFeatures(json_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9.addFeatures(features_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9);
var lyr_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9, 
                style: style_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9,
                interactive: true,
                title: '<img src="styles/legend/ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9.png" /> Reivindicação para delimitação do Corredor Ecológico Morro do Lampião-Pacuca'
            });
var format_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10 = new ol.format.GeoJSON();
var features_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10 = format_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10.readFeatures(json_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10.addFeatures(features_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10);
var lyr_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10, 
                style: style_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10,
                interactive: true,
                title: '<img src="styles/legend/ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10.png" /> Reivindicação de área para Parque Cultural do Campeche - PACUCA'
            });
var format_DespejodeesgotonaLagoadaConceio_11 = new ol.format.GeoJSON();
var features_DespejodeesgotonaLagoadaConceio_11 = format_DespejodeesgotonaLagoadaConceio_11.readFeatures(json_DespejodeesgotonaLagoadaConceio_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DespejodeesgotonaLagoadaConceio_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DespejodeesgotonaLagoadaConceio_11.addFeatures(features_DespejodeesgotonaLagoadaConceio_11);
var lyr_DespejodeesgotonaLagoadaConceio_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DespejodeesgotonaLagoadaConceio_11, 
                style: style_DespejodeesgotonaLagoadaConceio_11,
                interactive: true,
                title: '<img src="styles/legend/DespejodeesgotonaLagoadaConceio_11.png" /> Despejo de esgoto na Lagoa da Conceição'
            });
var format_RompimentodalagoaartificialdaCASAN_12 = new ol.format.GeoJSON();
var features_RompimentodalagoaartificialdaCASAN_12 = format_RompimentodalagoaartificialdaCASAN_12.readFeatures(json_RompimentodalagoaartificialdaCASAN_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RompimentodalagoaartificialdaCASAN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RompimentodalagoaartificialdaCASAN_12.addFeatures(features_RompimentodalagoaartificialdaCASAN_12);
var lyr_RompimentodalagoaartificialdaCASAN_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RompimentodalagoaartificialdaCASAN_12, 
                style: style_RompimentodalagoaartificialdaCASAN_12,
                interactive: true,
                title: '<img src="styles/legend/RompimentodalagoaartificialdaCASAN_12.png" /> Rompimento da lagoa artificial da CASAN'
            });
var format_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13 = new ol.format.GeoJSON();
var features_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13 = format_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13.readFeatures(json_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13.addFeatures(features_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13);
var lyr_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13, 
                style: style_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13,
                interactive: true,
                title: '<img src="styles/legend/RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13.png" /> Rota de embarcações de turismo legalizadas para a Ilha do Campeche'
            });
var format_Picadascomacessopraiarestringidoouproibido_14 = new ol.format.GeoJSON();
var features_Picadascomacessopraiarestringidoouproibido_14 = format_Picadascomacessopraiarestringidoouproibido_14.readFeatures(json_Picadascomacessopraiarestringidoouproibido_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Picadascomacessopraiarestringidoouproibido_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Picadascomacessopraiarestringidoouproibido_14.addFeatures(features_Picadascomacessopraiarestringidoouproibido_14);
var lyr_Picadascomacessopraiarestringidoouproibido_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Picadascomacessopraiarestringidoouproibido_14, 
                style: style_Picadascomacessopraiarestringidoouproibido_14,
                interactive: true,
                title: '<img src="styles/legend/Picadascomacessopraiarestringidoouproibido_14.png" /> Picadas com acesso à praia restringido ou proibido'
            });
var format_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15 = new ol.format.GeoJSON();
var features_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15 = format_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15.readFeatures(json_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15.addFeatures(features_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15);
var lyr_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15, 
                style: style_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15,
                interactive: true,
                title: '<img src="styles/legend/ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15.png" /> Projeto do Emissário Submarino para lançamento de esgoto'
            });
var format_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16 = new ol.format.GeoJSON();
var features_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16 = format_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16.readFeatures(json_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16.addFeatures(features_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16);
var lyr_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16, 
                style: style_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16,
                interactive: true,
                title: '<img src="styles/legend/Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16.png" /> Antiga delimitação legal para pesca artesanal da tainha (1.500m da Costa)'
            });
var format_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17 = new ol.format.GeoJSON();
var features_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17 = format_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17.readFeatures(json_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17.addFeatures(features_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17);
var lyr_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17, 
                style: style_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17,
                interactive: true,
                title: '<img src="styles/legend/Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17.png" /> Delimitação legal vigente da pesca artesanal da tainha (800m da Costa)'
            });
var format_Altaconcentraodebanhistas_18 = new ol.format.GeoJSON();
var features_Altaconcentraodebanhistas_18 = format_Altaconcentraodebanhistas_18.readFeatures(json_Altaconcentraodebanhistas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Altaconcentraodebanhistas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Altaconcentraodebanhistas_18.addFeatures(features_Altaconcentraodebanhistas_18);
var lyr_Altaconcentraodebanhistas_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Altaconcentraodebanhistas_18, 
                style: style_Altaconcentraodebanhistas_18,
                interactive: true,
                title: '<img src="styles/legend/Altaconcentraodebanhistas_18.png" /> Alta concentração de banhistas'
            });
var format_Altaconcentraoturstica_19 = new ol.format.GeoJSON();
var features_Altaconcentraoturstica_19 = format_Altaconcentraoturstica_19.readFeatures(json_Altaconcentraoturstica_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Altaconcentraoturstica_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Altaconcentraoturstica_19.addFeatures(features_Altaconcentraoturstica_19);
var lyr_Altaconcentraoturstica_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Altaconcentraoturstica_19, 
                style: style_Altaconcentraoturstica_19,
                interactive: true,
                title: '<img src="styles/legend/Altaconcentraoturstica_19.png" /> Alta concentração turística'
            });
var format_Ranchodepescaincendiado_20 = new ol.format.GeoJSON();
var features_Ranchodepescaincendiado_20 = format_Ranchodepescaincendiado_20.readFeatures(json_Ranchodepescaincendiado_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ranchodepescaincendiado_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ranchodepescaincendiado_20.addFeatures(features_Ranchodepescaincendiado_20);
var lyr_Ranchodepescaincendiado_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ranchodepescaincendiado_20, 
                style: style_Ranchodepescaincendiado_20,
                interactive: true,
                title: '<img src="styles/legend/Ranchodepescaincendiado_20.png" /> Rancho de pesca incendiado'
            });
var format_Lanamentodeesgoto_21 = new ol.format.GeoJSON();
var features_Lanamentodeesgoto_21 = format_Lanamentodeesgoto_21.readFeatures(json_Lanamentodeesgoto_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lanamentodeesgoto_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lanamentodeesgoto_21.addFeatures(features_Lanamentodeesgoto_21);
var lyr_Lanamentodeesgoto_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lanamentodeesgoto_21, 
                style: style_Lanamentodeesgoto_21,
                interactive: true,
                title: '<img src="styles/legend/Lanamentodeesgoto_21.png" /> Lançamento de esgoto'
            });
var format_DunasdaJoaquina_22 = new ol.format.GeoJSON();
var features_DunasdaJoaquina_22 = format_DunasdaJoaquina_22.readFeatures(json_DunasdaJoaquina_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DunasdaJoaquina_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DunasdaJoaquina_22.addFeatures(features_DunasdaJoaquina_22);
var lyr_DunasdaJoaquina_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DunasdaJoaquina_22, 
                style: style_DunasdaJoaquina_22,
                interactive: true,
                title: '<img src="styles/legend/DunasdaJoaquina_22.png" /> Dunas da Joaquina'
            });
var format_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23 = new ol.format.GeoJSON();
var features_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23 = format_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23.readFeatures(json_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23.addFeatures(features_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23);
var lyr_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23, 
                style: style_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23,
                interactive: true,
                title: '<img src="styles/legend/PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23.png" /> Patrimônio Arqueológico e Paisagístico Nacional - Ilha do Campeche'
            });
var format_ParquedoMorrodasPedras_24 = new ol.format.GeoJSON();
var features_ParquedoMorrodasPedras_24 = format_ParquedoMorrodasPedras_24.readFeatures(json_ParquedoMorrodasPedras_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquedoMorrodasPedras_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedoMorrodasPedras_24.addFeatures(features_ParquedoMorrodasPedras_24);
var lyr_ParquedoMorrodasPedras_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParquedoMorrodasPedras_24, 
                style: style_ParquedoMorrodasPedras_24,
                interactive: true,
                title: '<img src="styles/legend/ParquedoMorrodasPedras_24.png" /> Parque do Morro das Pedras'
            });
var format_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25 = new ol.format.GeoJSON();
var features_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25 = format_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25.readFeatures(json_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25.addFeatures(features_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25);
var lyr_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25, 
                style: style_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25,
                interactive: true,
                title: '<img src="styles/legend/ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25.png" /> Parque Natural Municipal das Dunas da Lagoa da Conceição'
            });
var format_Vendasmercadosmaiscitados_26 = new ol.format.GeoJSON();
var features_Vendasmercadosmaiscitados_26 = format_Vendasmercadosmaiscitados_26.readFeatures(json_Vendasmercadosmaiscitados_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vendasmercadosmaiscitados_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vendasmercadosmaiscitados_26.addFeatures(features_Vendasmercadosmaiscitados_26);
var lyr_Vendasmercadosmaiscitados_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vendasmercadosmaiscitados_26, 
                style: style_Vendasmercadosmaiscitados_26,
                interactive: true,
                title: '<img src="styles/legend/Vendasmercadosmaiscitados_26.png" /> Vendas / mercados|mais citados'
            });
var format_OutrasEscolas_27 = new ol.format.GeoJSON();
var features_OutrasEscolas_27 = format_OutrasEscolas_27.readFeatures(json_OutrasEscolas_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutrasEscolas_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutrasEscolas_27.addFeatures(features_OutrasEscolas_27);
var lyr_OutrasEscolas_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OutrasEscolas_27, 
                style: style_OutrasEscolas_27,
                interactive: true,
                title: '<img src="styles/legend/OutrasEscolas_27.png" /> Outras Escolas'
            });
var format_EscolaBigadeiro_28 = new ol.format.GeoJSON();
var features_EscolaBigadeiro_28 = format_EscolaBigadeiro_28.readFeatures(json_EscolaBigadeiro_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EscolaBigadeiro_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaBigadeiro_28.addFeatures(features_EscolaBigadeiro_28);
var lyr_EscolaBigadeiro_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EscolaBigadeiro_28, 
                style: style_EscolaBigadeiro_28,
                interactive: true,
                title: '<img src="styles/legend/EscolaBigadeiro_28.png" /> Escola Bigadeiro'
            });
var format_PontedoOdorico_29 = new ol.format.GeoJSON();
var features_PontedoOdorico_29 = format_PontedoOdorico_29.readFeatures(json_PontedoOdorico_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontedoOdorico_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontedoOdorico_29.addFeatures(features_PontedoOdorico_29);
var lyr_PontedoOdorico_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PontedoOdorico_29, 
                style: style_PontedoOdorico_29,
                interactive: true,
                title: '<img src="styles/legend/PontedoOdorico_29.png" /> Ponte do Odorico'
            });
var format_Cabosubmarino_30 = new ol.format.GeoJSON();
var features_Cabosubmarino_30 = format_Cabosubmarino_30.readFeatures(json_Cabosubmarino_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabosubmarino_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabosubmarino_30.addFeatures(features_Cabosubmarino_30);
var lyr_Cabosubmarino_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabosubmarino_30, 
                style: style_Cabosubmarino_30,
                interactive: true,
                title: '<img src="styles/legend/Cabosubmarino_30.png" /> Cabo submarino'
            });
var format_PistadoCampodeAviao_31 = new ol.format.GeoJSON();
var features_PistadoCampodeAviao_31 = format_PistadoCampodeAviao_31.readFeatures(json_PistadoCampodeAviao_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PistadoCampodeAviao_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PistadoCampodeAviao_31.addFeatures(features_PistadoCampodeAviao_31);
var lyr_PistadoCampodeAviao_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PistadoCampodeAviao_31, 
                style: style_PistadoCampodeAviao_31,
                interactive: true,
                title: '<img src="styles/legend/PistadoCampodeAviao_31.png" /> Pista do Campo de Aviação'
            });
var format_HangardoCampodeAviao_32 = new ol.format.GeoJSON();
var features_HangardoCampodeAviao_32 = format_HangardoCampodeAviao_32.readFeatures(json_HangardoCampodeAviao_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HangardoCampodeAviao_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HangardoCampodeAviao_32.addFeatures(features_HangardoCampodeAviao_32);
var lyr_HangardoCampodeAviao_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HangardoCampodeAviao_32, 
                style: style_HangardoCampodeAviao_32,
                interactive: true,
                title: '<img src="styles/legend/HangardoCampodeAviao_32.png" /> Hangar do Campo de Aviação'
            });
var format_Cemitrio_33 = new ol.format.GeoJSON();
var features_Cemitrio_33 = format_Cemitrio_33.readFeatures(json_Cemitrio_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cemitrio_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cemitrio_33.addFeatures(features_Cemitrio_33);
var lyr_Cemitrio_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cemitrio_33, 
                style: style_Cemitrio_33,
                interactive: true,
                title: '<img src="styles/legend/Cemitrio_33.png" /> Cemitério'
            });
var format_IgrejadePedra_34 = new ol.format.GeoJSON();
var features_IgrejadePedra_34 = format_IgrejadePedra_34.readFeatures(json_IgrejadePedra_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IgrejadePedra_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IgrejadePedra_34.addFeatures(features_IgrejadePedra_34);
var lyr_IgrejadePedra_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IgrejadePedra_34, 
                style: style_IgrejadePedra_34,
                interactive: true,
                title: '<img src="styles/legend/IgrejadePedra_34.png" /> Igreja de Pedra'
            });
var format_CapelaSoSebastio_35 = new ol.format.GeoJSON();
var features_CapelaSoSebastio_35 = format_CapelaSoSebastio_35.readFeatures(json_CapelaSoSebastio_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapelaSoSebastio_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapelaSoSebastio_35.addFeatures(features_CapelaSoSebastio_35);
var lyr_CapelaSoSebastio_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CapelaSoSebastio_35, 
                style: style_CapelaSoSebastio_35,
                interactive: true,
                title: '<img src="styles/legend/CapelaSoSebastio_35.png" /> Capela São Sebastião'
            });
var format_Picadasdeacessopraia_36 = new ol.format.GeoJSON();
var features_Picadasdeacessopraia_36 = format_Picadasdeacessopraia_36.readFeatures(json_Picadasdeacessopraia_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Picadasdeacessopraia_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Picadasdeacessopraia_36.addFeatures(features_Picadasdeacessopraia_36);
var lyr_Picadasdeacessopraia_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Picadasdeacessopraia_36, 
                style: style_Picadasdeacessopraia_36,
                interactive: true,
                title: '<img src="styles/legend/Picadasdeacessopraia_36.png" /> Picadas de acesso à praia'
            });
var format_MorrodoLampio_37 = new ol.format.GeoJSON();
var features_MorrodoLampio_37 = format_MorrodoLampio_37.readFeatures(json_MorrodoLampio_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MorrodoLampio_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MorrodoLampio_37.addFeatures(features_MorrodoLampio_37);
var lyr_MorrodoLampio_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MorrodoLampio_37, 
                style: style_MorrodoLampio_37,
                interactive: true,
                title: '<img src="styles/legend/MorrodoLampio_37.png" /> Morro do Lampião'
            });
var format_Camposdefutebolantigos_38 = new ol.format.GeoJSON();
var features_Camposdefutebolantigos_38 = format_Camposdefutebolantigos_38.readFeatures(json_Camposdefutebolantigos_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camposdefutebolantigos_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camposdefutebolantigos_38.addFeatures(features_Camposdefutebolantigos_38);
var lyr_Camposdefutebolantigos_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Camposdefutebolantigos_38, 
                style: style_Camposdefutebolantigos_38,
                interactive: true,
                title: '<img src="styles/legend/Camposdefutebolantigos_38.png" /> Campos de futebol antigos'
            });
var format_Camposdefutebolatuais_39 = new ol.format.GeoJSON();
var features_Camposdefutebolatuais_39 = format_Camposdefutebolatuais_39.readFeatures(json_Camposdefutebolatuais_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camposdefutebolatuais_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camposdefutebolatuais_39.addFeatures(features_Camposdefutebolatuais_39);
var lyr_Camposdefutebolatuais_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Camposdefutebolatuais_39, 
                style: style_Camposdefutebolatuais_39,
                interactive: true,
                title: '<img src="styles/legend/Camposdefutebolatuais_39.png" /> Campos de futebol atuais'
            });
var format_Salesdedanaantigos_40 = new ol.format.GeoJSON();
var features_Salesdedanaantigos_40 = format_Salesdedanaantigos_40.readFeatures(json_Salesdedanaantigos_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salesdedanaantigos_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salesdedanaantigos_40.addFeatures(features_Salesdedanaantigos_40);
var lyr_Salesdedanaantigos_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Salesdedanaantigos_40, 
                style: style_Salesdedanaantigos_40,
                interactive: true,
                title: '<img src="styles/legend/Salesdedanaantigos_40.png" /> Salões de dança antigos'
            });
var format_Stioarqueolgico_41 = new ol.format.GeoJSON();
var features_Stioarqueolgico_41 = format_Stioarqueolgico_41.readFeatures(json_Stioarqueolgico_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stioarqueolgico_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stioarqueolgico_41.addFeatures(features_Stioarqueolgico_41);
var lyr_Stioarqueolgico_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stioarqueolgico_41, 
                style: style_Stioarqueolgico_41,
                interactive: true,
                title: '<img src="styles/legend/Stioarqueolgico_41.png" /> Sítio arqueológico'
            });
var format_CasaguardadoBoideMamo_42 = new ol.format.GeoJSON();
var features_CasaguardadoBoideMamo_42 = format_CasaguardadoBoideMamo_42.readFeatures(json_CasaguardadoBoideMamo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasaguardadoBoideMamo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasaguardadoBoideMamo_42.addFeatures(features_CasaguardadoBoideMamo_42);
var lyr_CasaguardadoBoideMamo_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasaguardadoBoideMamo_42, 
                style: style_CasaguardadoBoideMamo_42,
                interactive: true,
                title: '<img src="styles/legend/CasaguardadoBoideMamo_42.png" /> Casa guarda do Boi de Mamão'
            });
var format_CasadaantigaBenzedeira_43 = new ol.format.GeoJSON();
var features_CasadaantigaBenzedeira_43 = format_CasadaantigaBenzedeira_43.readFeatures(json_CasadaantigaBenzedeira_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasadaantigaBenzedeira_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasadaantigaBenzedeira_43.addFeatures(features_CasadaantigaBenzedeira_43);
var lyr_CasadaantigaBenzedeira_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasadaantigaBenzedeira_43, 
                style: style_CasadaantigaBenzedeira_43,
                interactive: true,
                title: '<img src="styles/legend/CasadaantigaBenzedeira_43.png" /> Casa da antiga Benzedeira'
            });
var format_CasadaChica_44 = new ol.format.GeoJSON();
var features_CasadaChica_44 = format_CasadaChica_44.readFeatures(json_CasadaChica_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasadaChica_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasadaChica_44.addFeatures(features_CasadaChica_44);
var lyr_CasadaChica_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CasadaChica_44, 
                style: style_CasadaChica_44,
                interactive: true,
                title: '<img src="styles/legend/CasadaChica_44.png" /> Casa da Chica'
            });
var format_CaminhodaBandeiradoDivino_45 = new ol.format.GeoJSON();
var features_CaminhodaBandeiradoDivino_45 = format_CaminhodaBandeiradoDivino_45.readFeatures(json_CaminhodaBandeiradoDivino_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaminhodaBandeiradoDivino_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminhodaBandeiradoDivino_45.addFeatures(features_CaminhodaBandeiradoDivino_45);
var lyr_CaminhodaBandeiradoDivino_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaminhodaBandeiradoDivino_45, 
                style: style_CaminhodaBandeiradoDivino_45,
                interactive: true,
                title: '<img src="styles/legend/CaminhodaBandeiradoDivino_45.png" /> Caminho da Bandeira do Divino'
            });
var format_LocaldaMissadaTainha_46 = new ol.format.GeoJSON();
var features_LocaldaMissadaTainha_46 = format_LocaldaMissadaTainha_46.readFeatures(json_LocaldaMissadaTainha_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocaldaMissadaTainha_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocaldaMissadaTainha_46.addFeatures(features_LocaldaMissadaTainha_46);
var lyr_LocaldaMissadaTainha_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocaldaMissadaTainha_46, 
                style: style_LocaldaMissadaTainha_46,
                interactive: true,
                title: '<img src="styles/legend/LocaldaMissadaTainha_46.png" /> Local da Missa da Tainha'
            });
var format_Roasdemandiocaantigas_47 = new ol.format.GeoJSON();
var features_Roasdemandiocaantigas_47 = format_Roasdemandiocaantigas_47.readFeatures(json_Roasdemandiocaantigas_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roasdemandiocaantigas_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roasdemandiocaantigas_47.addFeatures(features_Roasdemandiocaantigas_47);
var lyr_Roasdemandiocaantigas_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roasdemandiocaantigas_47, 
                style: style_Roasdemandiocaantigas_47,
                interactive: true,
                title: '<img src="styles/legend/Roasdemandiocaantigas_47.png" /> Roças de mandioca antigas'
            });
var format_Engenhosdecanadeacarantigos_48 = new ol.format.GeoJSON();
var features_Engenhosdecanadeacarantigos_48 = format_Engenhosdecanadeacarantigos_48.readFeatures(json_Engenhosdecanadeacarantigos_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Engenhosdecanadeacarantigos_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Engenhosdecanadeacarantigos_48.addFeatures(features_Engenhosdecanadeacarantigos_48);
var lyr_Engenhosdecanadeacarantigos_48 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Engenhosdecanadeacarantigos_48, 
                style: style_Engenhosdecanadeacarantigos_48,
                interactive: true,
                title: '<img src="styles/legend/Engenhosdecanadeacarantigos_48.png" /> Engenhos de cana-de-açúcar antigos'
            });
var format_Engenhosdefarinhademandiocaantigos_49 = new ol.format.GeoJSON();
var features_Engenhosdefarinhademandiocaantigos_49 = format_Engenhosdefarinhademandiocaantigos_49.readFeatures(json_Engenhosdefarinhademandiocaantigos_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Engenhosdefarinhademandiocaantigos_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Engenhosdefarinhademandiocaantigos_49.addFeatures(features_Engenhosdefarinhademandiocaantigos_49);
var lyr_Engenhosdefarinhademandiocaantigos_49 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Engenhosdefarinhademandiocaantigos_49, 
                style: style_Engenhosdefarinhademandiocaantigos_49,
                interactive: true,
                title: '<img src="styles/legend/Engenhosdefarinhademandiocaantigos_49.png" /> Engenhos de farinha de mandioca antigos'
            });
var format_Engenhosdefarinhademandiocaatuais_50 = new ol.format.GeoJSON();
var features_Engenhosdefarinhademandiocaatuais_50 = format_Engenhosdefarinhademandiocaatuais_50.readFeatures(json_Engenhosdefarinhademandiocaatuais_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Engenhosdefarinhademandiocaatuais_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Engenhosdefarinhademandiocaatuais_50.addFeatures(features_Engenhosdefarinhademandiocaatuais_50);
var lyr_Engenhosdefarinhademandiocaatuais_50 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Engenhosdefarinhademandiocaatuais_50, 
                style: style_Engenhosdefarinhademandiocaatuais_50,
                interactive: true,
                title: '<img src="styles/legend/Engenhosdefarinhademandiocaatuais_50.png" /> Engenhos de farinha de mandioca atuais'
            });
var format_readeriscodurantearessaca_51 = new ol.format.GeoJSON();
var features_readeriscodurantearessaca_51 = format_readeriscodurantearessaca_51.readFeatures(json_readeriscodurantearessaca_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeriscodurantearessaca_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeriscodurantearessaca_51.addFeatures(features_readeriscodurantearessaca_51);
var lyr_readeriscodurantearessaca_51 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeriscodurantearessaca_51, 
                style: style_readeriscodurantearessaca_51,
                interactive: true,
                title: '<img src="styles/legend/readeriscodurantearessaca_51.png" /> Área de risco durante a ressaca'
            });
var format_Ranchosdepescafluvialantigos_52 = new ol.format.GeoJSON();
var features_Ranchosdepescafluvialantigos_52 = format_Ranchosdepescafluvialantigos_52.readFeatures(json_Ranchosdepescafluvialantigos_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ranchosdepescafluvialantigos_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ranchosdepescafluvialantigos_52.addFeatures(features_Ranchosdepescafluvialantigos_52);
var lyr_Ranchosdepescafluvialantigos_52 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ranchosdepescafluvialantigos_52, 
                style: style_Ranchosdepescafluvialantigos_52,
                interactive: true,
                title: '<img src="styles/legend/Ranchosdepescafluvialantigos_52.png" /> Ranchos de pesca fluvial antigos'
            });
var format_Ranchosdepescaantigos_53 = new ol.format.GeoJSON();
var features_Ranchosdepescaantigos_53 = format_Ranchosdepescaantigos_53.readFeatures(json_Ranchosdepescaantigos_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ranchosdepescaantigos_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ranchosdepescaantigos_53.addFeatures(features_Ranchosdepescaantigos_53);
var lyr_Ranchosdepescaantigos_53 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ranchosdepescaantigos_53, 
                style: style_Ranchosdepescaantigos_53,
                interactive: true,
                title: '<img src="styles/legend/Ranchosdepescaantigos_53.png" /> Ranchos de pesca antigos'
            });
var format_Ranchosdepescaatuais_54 = new ol.format.GeoJSON();
var features_Ranchosdepescaatuais_54 = format_Ranchosdepescaatuais_54.readFeatures(json_Ranchosdepescaatuais_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ranchosdepescaatuais_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ranchosdepescaatuais_54.addFeatures(features_Ranchosdepescaatuais_54);
var lyr_Ranchosdepescaatuais_54 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ranchosdepescaatuais_54, 
                style: style_Ranchosdepescaatuais_54,
                interactive: true,
                title: '<img src="styles/legend/Ranchosdepescaatuais_54.png" /> Ranchos de pesca atuais'
            });
var format_realegaldePescaArtesanaldaTainha_55 = new ol.format.GeoJSON();
var features_realegaldePescaArtesanaldaTainha_55 = format_realegaldePescaArtesanaldaTainha_55.readFeatures(json_realegaldePescaArtesanaldaTainha_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_realegaldePescaArtesanaldaTainha_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_realegaldePescaArtesanaldaTainha_55.addFeatures(features_realegaldePescaArtesanaldaTainha_55);
var lyr_realegaldePescaArtesanaldaTainha_55 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_realegaldePescaArtesanaldaTainha_55, 
                style: style_realegaldePescaArtesanaldaTainha_55,
                interactive: true,
                title: '<img src="styles/legend/realegaldePescaArtesanaldaTainha_55.png" /> Área legal de Pesca Artesanal da Tainha'
            });
var format_Principaisdunasdevigiaatuais_56 = new ol.format.GeoJSON();
var features_Principaisdunasdevigiaatuais_56 = format_Principaisdunasdevigiaatuais_56.readFeatures(json_Principaisdunasdevigiaatuais_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Principaisdunasdevigiaatuais_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Principaisdunasdevigiaatuais_56.addFeatures(features_Principaisdunasdevigiaatuais_56);
var lyr_Principaisdunasdevigiaatuais_56 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Principaisdunasdevigiaatuais_56, 
                style: style_Principaisdunasdevigiaatuais_56,
                interactive: true,
                title: '<img src="styles/legend/Principaisdunasdevigiaatuais_56.png" /> Principais dunas de vigia atuais'
            });
var group_Cadeiadapesca = new ol.layer.Group({
                                layers: [lyr_readeriscodurantearessaca_51,lyr_Ranchosdepescafluvialantigos_52,lyr_Ranchosdepescaantigos_53,lyr_Ranchosdepescaatuais_54,lyr_realegaldePescaArtesanaldaTainha_55,lyr_Principaisdunasdevigiaatuais_56,],
                                title: "Cadeia da pesca"});
var group_Formastradicionaisdeproduo = new ol.layer.Group({
                                layers: [lyr_Roasdemandiocaantigas_47,lyr_Engenhosdecanadeacarantigos_48,lyr_Engenhosdefarinhademandiocaantigos_49,lyr_Engenhosdefarinhademandiocaatuais_50,],
                                title: "Formas tradicionais de produção"});
var group_Manifestaesculturaisreligiosasartsticasdelazer = new ol.layer.Group({
                                layers: [lyr_Camposdefutebolantigos_38,lyr_Camposdefutebolatuais_39,lyr_Salesdedanaantigos_40,lyr_Stioarqueolgico_41,lyr_CasaguardadoBoideMamo_42,lyr_CasadaantigaBenzedeira_43,lyr_CasadaChica_44,lyr_CaminhodaBandeiradoDivino_45,lyr_LocaldaMissadaTainha_46,],
                                title: "Manifestações culturais/religiosas/|artísticas/de lazer"});
var group_PontosdeReferncia = new ol.layer.Group({
                                layers: [lyr_Vendasmercadosmaiscitados_26,lyr_OutrasEscolas_27,lyr_EscolaBigadeiro_28,lyr_PontedoOdorico_29,lyr_Cabosubmarino_30,lyr_PistadoCampodeAviao_31,lyr_HangardoCampodeAviao_32,lyr_Cemitrio_33,lyr_IgrejadePedra_34,lyr_CapelaSoSebastio_35,lyr_Picadasdeacessopraia_36,lyr_MorrodoLampio_37,],
                                title: "Pontos de Referência"});
var group_reasdeProteoAmbientaleCultural = new ol.layer.Group({
                                layers: [lyr_DunasdaJoaquina_22,lyr_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23,lyr_ParquedoMorrodasPedras_24,lyr_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25,],
                                title: "Áreas de Proteção Ambiental e Cultural"});
var group_Conflitosatuais = new ol.layer.Group({
                                layers: [lyr_readepescapredatriaporatuneiros_6,lyr_reademinerao_7,lyr_readeexploraoimobiliria_8,lyr_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9,lyr_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10,lyr_DespejodeesgotonaLagoadaConceio_11,lyr_RompimentodalagoaartificialdaCASAN_12,lyr_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13,lyr_Picadascomacessopraiarestringidoouproibido_14,lyr_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15,lyr_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16,lyr_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17,lyr_Altaconcentraodebanhistas_18,lyr_Altaconcentraoturstica_19,lyr_Ranchodepescaincendiado_20,lyr_Lanamentodeesgoto_21,],
                                title: "Conflitos atuais"});
var group_Recursoshdricos = new ol.layer.Group({
                                layers: [lyr_Fontesdguaantigas_3,lyr_Lagoa_4,lyr_Rio_5,],
                                title: "Recursos hídricos"});
var group_Outroslimites = new ol.layer.Group({
                                layers: [lyr_DistritoAdministrativodoCampeche_2,],
                                title: "Outros limites"});
var group_BaseRaster = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_WikimediaMaps_1,],
                                title: "Base Raster"});

lyr_GoogleSatellite_0.setVisible(true);lyr_WikimediaMaps_1.setVisible(true);lyr_DistritoAdministrativodoCampeche_2.setVisible(true);lyr_Fontesdguaantigas_3.setVisible(true);lyr_Lagoa_4.setVisible(true);lyr_Rio_5.setVisible(true);lyr_readepescapredatriaporatuneiros_6.setVisible(true);lyr_reademinerao_7.setVisible(true);lyr_readeexploraoimobiliria_8.setVisible(true);lyr_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9.setVisible(true);lyr_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10.setVisible(true);lyr_DespejodeesgotonaLagoadaConceio_11.setVisible(true);lyr_RompimentodalagoaartificialdaCASAN_12.setVisible(true);lyr_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13.setVisible(true);lyr_Picadascomacessopraiarestringidoouproibido_14.setVisible(true);lyr_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15.setVisible(true);lyr_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16.setVisible(true);lyr_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17.setVisible(true);lyr_Altaconcentraodebanhistas_18.setVisible(true);lyr_Altaconcentraoturstica_19.setVisible(true);lyr_Ranchodepescaincendiado_20.setVisible(true);lyr_Lanamentodeesgoto_21.setVisible(true);lyr_DunasdaJoaquina_22.setVisible(true);lyr_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23.setVisible(true);lyr_ParquedoMorrodasPedras_24.setVisible(true);lyr_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25.setVisible(true);lyr_Vendasmercadosmaiscitados_26.setVisible(true);lyr_OutrasEscolas_27.setVisible(true);lyr_EscolaBigadeiro_28.setVisible(true);lyr_PontedoOdorico_29.setVisible(true);lyr_Cabosubmarino_30.setVisible(true);lyr_PistadoCampodeAviao_31.setVisible(true);lyr_HangardoCampodeAviao_32.setVisible(true);lyr_Cemitrio_33.setVisible(true);lyr_IgrejadePedra_34.setVisible(true);lyr_CapelaSoSebastio_35.setVisible(true);lyr_Picadasdeacessopraia_36.setVisible(true);lyr_MorrodoLampio_37.setVisible(true);lyr_Camposdefutebolantigos_38.setVisible(true);lyr_Camposdefutebolatuais_39.setVisible(true);lyr_Salesdedanaantigos_40.setVisible(true);lyr_Stioarqueolgico_41.setVisible(true);lyr_CasaguardadoBoideMamo_42.setVisible(true);lyr_CasadaantigaBenzedeira_43.setVisible(true);lyr_CasadaChica_44.setVisible(true);lyr_CaminhodaBandeiradoDivino_45.setVisible(true);lyr_LocaldaMissadaTainha_46.setVisible(true);lyr_Roasdemandiocaantigas_47.setVisible(true);lyr_Engenhosdecanadeacarantigos_48.setVisible(true);lyr_Engenhosdefarinhademandiocaantigos_49.setVisible(true);lyr_Engenhosdefarinhademandiocaatuais_50.setVisible(true);lyr_readeriscodurantearessaca_51.setVisible(true);lyr_Ranchosdepescafluvialantigos_52.setVisible(true);lyr_Ranchosdepescaantigos_53.setVisible(true);lyr_Ranchosdepescaatuais_54.setVisible(true);lyr_realegaldePescaArtesanaldaTainha_55.setVisible(true);lyr_Principaisdunasdevigiaatuais_56.setVisible(true);
var layersList = [group_BaseRaster,group_Outroslimites,group_Recursoshdricos,group_Conflitosatuais,group_reasdeProteoAmbientaleCultural,group_PontosdeReferncia,group_Manifestaesculturaisreligiosasartsticasdelazer,group_Formastradicionaisdeproduo,group_Cadeiadapesca];
lyr_DistritoAdministrativodoCampeche_2.set('fieldAliases', {'mslink': 'mslink', 'cd_dist_ad': 'cd_dist_ad', 'nm_dist_ad': 'nm_dist_ad', 'cd_regiao': 'cd_regiao', 'cd_ibge200': 'cd_ibge200', 'cd_ibge201': 'cd_ibge201', 'lei': 'lei', 'dt_cadastr': 'dt_cadastr', 'nm_user_ca': 'nm_user_ca', 'dt_atualiz': 'dt_atualiz', 'nm_user_at': 'nm_user_at', 'nu_tmp': 'nu_tmp', 'nm_tmp': 'nm_tmp', 'controle': 'controle', 'flag_geo': 'flag_geo', 'label': 'label', 'geom2': 'geom2', 'xc': 'xc', 'yc': 'yc', });
lyr_Fontesdguaantigas_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Lagoa_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Rio_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_readepescapredatriaporatuneiros_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_reademinerao_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_readeexploraoimobiliria_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_DespejodeesgotonaLagoadaConceio_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_RompimentodalagoaartificialdaCASAN_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_Picadascomacessopraiarestringidoouproibido_14.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Tipo_MPF': 'Tipo_MPF', 'Tipo_MPF_num': 'Tipo_MPF_num', });
lyr_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'geometriaaproximada': 'geometriaaproximada', 'geocodigo': 'geocodigo', 'anodereferencia': 'anodereferencia', });
lyr_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_Altaconcentraodebanhistas_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Altaconcentraoturstica_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Ranchodepescaincendiado_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Lanamentodeesgoto_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_DunasdaJoaquina_22.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'categoria': 'categoria', 'descricao': 'descricao', 'tema': 'tema', });
lyr_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'categoria': 'categoria', 'descricao': 'descricao', 'tema': 'tema', });
lyr_ParquedoMorrodasPedras_24.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'categoria': 'categoria', 'descricao': 'descricao', 'tema': 'tema', });
lyr_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'categoria': 'categoria', 'descricao': 'descricao', 'tema': 'tema', });
lyr_Vendasmercadosmaiscitados_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_OutrasEscolas_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_EscolaBigadeiro_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_PontedoOdorico_29.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Cabosubmarino_30.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_PistadoCampodeAviao_31.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_HangardoCampodeAviao_32.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Cemitrio_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_IgrejadePedra_34.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_CapelaSoSebastio_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Picadasdeacessopraia_36.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Tipo_MPF': 'Tipo_MPF', 'Tipo_MPF_num': 'Tipo_MPF_num', });
lyr_MorrodoLampio_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Camposdefutebolantigos_38.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Camposdefutebolatuais_39.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Salesdedanaantigos_40.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Stioarqueolgico_41.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_CasaguardadoBoideMamo_42.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_CasadaantigaBenzedeira_43.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_CasadaChica_44.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_CaminhodaBandeiradoDivino_45.set('fieldAliases', {'origem': 'origem', 'nome': 'nome', });
lyr_LocaldaMissadaTainha_46.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Roasdemandiocaantigas_47.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_Engenhosdecanadeacarantigos_48.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Engenhosdefarinhademandiocaantigos_49.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Engenhosdefarinhademandiocaatuais_50.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_readeriscodurantearessaca_51.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_Ranchosdepescafluvialantigos_52.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Ranchosdepescaantigos_53.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_Ranchosdepescaatuais_54.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_realegaldePescaArtesanaldaTainha_55.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'layer': 'layer', 'path': 'path', });
lyr_Principaisdunasdevigiaatuais_56.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'folha': 'folha', 'descricao': 'descricao', 'Elementos oficina comunidade-Planilha1_nome': 'Elementos oficina comunidade-Planilha1_nome', 'Elementos oficina comunidade-Planilha1_categoria': 'Elementos oficina comunidade-Planilha1_categoria', 'Elementos oficina comunidade-Planilha1_folha': 'Elementos oficina comunidade-Planilha1_folha', 'Elementos oficina comunidade-Planilha1_descricao': 'Elementos oficina comunidade-Planilha1_descricao', 'tipo': 'tipo', 'responsavel': 'responsavel', 'operacao': 'operacao', 'lincenca': 'lincenca', 'tipo_pesca': 'tipo_pesca', 'atividade_extra': 'atividade_extra', 'observacao': 'observacao', 'layer': 'layer', 'path': 'path', });
lyr_DistritoAdministrativodoCampeche_2.set('fieldImages', {'mslink': '', 'cd_dist_ad': '', 'nm_dist_ad': '', 'cd_regiao': '', 'cd_ibge200': '', 'cd_ibge201': '', 'lei': '', 'dt_cadastr': '', 'nm_user_ca': '', 'dt_atualiz': '', 'nm_user_at': '', 'nu_tmp': '', 'nm_tmp': '', 'controle': '', 'flag_geo': '', 'label': '', 'geom2': '', 'xc': '', 'yc': '', });
lyr_Fontesdguaantigas_3.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Lagoa_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Rio_5.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'layer': '', 'path': '', });
lyr_readepescapredatriaporatuneiros_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_reademinerao_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_readeexploraoimobiliria_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DespejodeesgotonaLagoadaConceio_11.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_RompimentodalagoaartificialdaCASAN_12.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'layer': '', 'path': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_Picadascomacessopraiarestringidoouproibido_14.set('fieldImages', {'fid': '', 'Nome': '', 'Tipo_MPF': '', 'Tipo_MPF_num': '', });
lyr_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'layer': '', 'path': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16.set('fieldImages', {'id': '', 'nome': '', 'geometriaaproximada': '', 'geocodigo': '', 'anodereferencia': '', });
lyr_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'layer': '', 'path': '', });
lyr_Altaconcentraodebanhistas_18.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Altaconcentraoturstica_19.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Ranchodepescaincendiado_20.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Lanamentodeesgoto_21.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_DunasdaJoaquina_22.set('fieldImages', {'fid': '', 'nome': '', 'categoria': '', 'descricao': '', 'tema': '', });
lyr_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23.set('fieldImages', {'fid': '', 'nome': '', 'categoria': '', 'descricao': '', 'tema': '', });
lyr_ParquedoMorrodasPedras_24.set('fieldImages', {'fid': '', 'nome': '', 'categoria': '', 'descricao': '', 'tema': '', });
lyr_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25.set('fieldImages', {'fid': '', 'nome': '', 'categoria': '', 'descricao': '', 'tema': '', });
lyr_Vendasmercadosmaiscitados_26.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_OutrasEscolas_27.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_EscolaBigadeiro_28.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_PontedoOdorico_29.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Cabosubmarino_30.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_PistadoCampodeAviao_31.set('fieldImages', {'fid': '', 'id': '', 'nome': 'TextEdit', 'categoria': '', 'folha': '', 'descricao': '', 'layer': '', 'path': '', });
lyr_HangardoCampodeAviao_32.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Cemitrio_33.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_IgrejadePedra_34.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_CapelaSoSebastio_35.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Picadasdeacessopraia_36.set('fieldImages', {'fid': '', 'Nome': '', 'Tipo_MPF': '', 'Tipo_MPF_num': '', });
lyr_MorrodoLampio_37.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Camposdefutebolantigos_38.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Camposdefutebolatuais_39.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Salesdedanaantigos_40.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Stioarqueolgico_41.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_CasaguardadoBoideMamo_42.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_CasadaantigaBenzedeira_43.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_CasadaChica_44.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_CaminhodaBandeiradoDivino_45.set('fieldImages', {'origem': 'TextEdit', 'nome': 'TextEdit', });
lyr_LocaldaMissadaTainha_46.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Roasdemandiocaantigas_47.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Engenhosdecanadeacarantigos_48.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Engenhosdefarinhademandiocaantigos_49.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Engenhosdefarinhademandiocaatuais_50.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_readeriscodurantearessaca_51.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ranchosdepescafluvialantigos_52.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Ranchosdepescaantigos_53.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_Ranchosdepescaatuais_54.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_realegaldePescaArtesanaldaTainha_55.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'folha': 'TextEdit', 'descricao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Principaisdunasdevigiaatuais_56.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'categoria': '', 'folha': '', 'descricao': '', 'Elementos oficina comunidade-Planilha1_nome': '', 'Elementos oficina comunidade-Planilha1_categoria': '', 'Elementos oficina comunidade-Planilha1_folha': '', 'Elementos oficina comunidade-Planilha1_descricao': '', 'tipo': '', 'responsavel': '', 'operacao': '', 'lincenca': '', 'tipo_pesca': '', 'atividade_extra': '', 'observacao': '', 'layer': '', 'path': '', });
lyr_DistritoAdministrativodoCampeche_2.set('fieldLabels', {});
lyr_Fontesdguaantigas_3.set('fieldLabels', {});
lyr_Lagoa_4.set('fieldLabels', {});
lyr_Rio_5.set('fieldLabels', {});
lyr_readepescapredatriaporatuneiros_6.set('fieldLabels', {});
lyr_reademinerao_7.set('fieldLabels', {});
lyr_readeexploraoimobiliria_8.set('fieldLabels', {});
lyr_ReivindicaoparadelimitaodoCorredorEcolgicoMorrodoLampioPacuca_9.set('fieldLabels', {});
lyr_ReivindicaodereaparaParqueCulturaldoCampechePACUCA_10.set('fieldLabels', {});
lyr_DespejodeesgotonaLagoadaConceio_11.set('fieldLabels', {});
lyr_RompimentodalagoaartificialdaCASAN_12.set('fieldLabels', {});
lyr_RotadeembarcaesdeturismolegalizadasparaaIlhadoCampeche_13.set('fieldLabels', {});
lyr_Picadascomacessopraiarestringidoouproibido_14.set('fieldLabels', {});
lyr_ProjetodoEmissrioSubmarinoparalanamentodeesgoto_15.set('fieldLabels', {});
lyr_Antigadelimitaolegalparapescaartesanaldatainha1500mdaCosta_16.set('fieldLabels', {});
lyr_Delimitaolegalvigentedapescaartesanaldatainha800mdaCosta_17.set('fieldLabels', {});
lyr_Altaconcentraodebanhistas_18.set('fieldLabels', {});
lyr_Altaconcentraoturstica_19.set('fieldLabels', {});
lyr_Ranchodepescaincendiado_20.set('fieldLabels', {});
lyr_Lanamentodeesgoto_21.set('fieldLabels', {});
lyr_DunasdaJoaquina_22.set('fieldLabels', {});
lyr_PatrimnioArqueolgicoePaisagsticoNacionalIlhadoCampeche_23.set('fieldLabels', {});
lyr_ParquedoMorrodasPedras_24.set('fieldLabels', {});
lyr_ParqueNaturalMunicipaldasDunasdaLagoadaConceio_25.set('fieldLabels', {});
lyr_Vendasmercadosmaiscitados_26.set('fieldLabels', {});
lyr_OutrasEscolas_27.set('fieldLabels', {});
lyr_EscolaBigadeiro_28.set('fieldLabels', {});
lyr_PontedoOdorico_29.set('fieldLabels', {});
lyr_Cabosubmarino_30.set('fieldLabels', {});
lyr_PistadoCampodeAviao_31.set('fieldLabels', {});
lyr_HangardoCampodeAviao_32.set('fieldLabels', {});
lyr_Cemitrio_33.set('fieldLabels', {});
lyr_IgrejadePedra_34.set('fieldLabels', {});
lyr_CapelaSoSebastio_35.set('fieldLabels', {});
lyr_Picadasdeacessopraia_36.set('fieldLabels', {});
lyr_MorrodoLampio_37.set('fieldLabels', {});
lyr_Camposdefutebolantigos_38.set('fieldLabels', {});
lyr_Camposdefutebolatuais_39.set('fieldLabels', {});
lyr_Salesdedanaantigos_40.set('fieldLabels', {});
lyr_Stioarqueolgico_41.set('fieldLabels', {});
lyr_CasaguardadoBoideMamo_42.set('fieldLabels', {});
lyr_CasadaantigaBenzedeira_43.set('fieldLabels', {});
lyr_CasadaChica_44.set('fieldLabels', {});
lyr_CaminhodaBandeiradoDivino_45.set('fieldLabels', {});
lyr_LocaldaMissadaTainha_46.set('fieldLabels', {});
lyr_Roasdemandiocaantigas_47.set('fieldLabels', {});
lyr_Engenhosdecanadeacarantigos_48.set('fieldLabels', {});
lyr_Engenhosdefarinhademandiocaantigos_49.set('fieldLabels', {});
lyr_Engenhosdefarinhademandiocaatuais_50.set('fieldLabels', {});
lyr_readeriscodurantearessaca_51.set('fieldLabels', {});
lyr_Ranchosdepescafluvialantigos_52.set('fieldLabels', {});
lyr_Ranchosdepescaantigos_53.set('fieldLabels', {});
lyr_Ranchosdepescaatuais_54.set('fieldLabels', {});
lyr_realegaldePescaArtesanaldaTainha_55.set('fieldLabels', {});
lyr_Principaisdunasdevigiaatuais_56.set('fieldLabels', {});
lyr_Principaisdunasdevigiaatuais_56.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});