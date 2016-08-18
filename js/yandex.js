
     ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map ("map-canvas", {
                center: [44.607012, 33.508135],
                zoom: 16
            }); 
            
   

var myPlacemark = new ymaps.Placemark([44.607012, 33.508135], {
	hintContent: 'TEXT'
}, 
{
        preset: 'twirl#redDotIcon' 
    });


			// Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
			myMap.geoObjects.add(myPlacemark);
        }
