var prihoda = "../src/location-pin-solid-blue.svg";

    var m = new SMap(JAK.gel("m"));
    m.addControl(new SMap.Control.Sync()); /* Aby mapa reagovala na změnu velikosti průhledu */
    m.addDefaultLayer(SMap.DEF_BASE).enable(); /* Turistický podklad */
    var mouse = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM); /* Ovládání myší */
    m.addControl(mouse); 
    m.addDefaultControls();

    var vrstva = new SMap.Layer.Marker();     /* Vrstva se značkami */
    var souradnice = [];
    // data pro markery
    var markers = [{
        name: "Alžbětín",
    id: 1,
    coords: "49°07'24.06\"N,13°12'18.4\"E"
    }];

    // vytvoreni markeru
    markers.forEach(function(marker) {
        var c = SMap.Coords.fromWGS84(marker.coords); /* Souřadnice značky, z textového formátu souřadnic */
    
        var options = {
                url: prihoda,
                title: marker.name,
                anchor: {left:10, bottom: 1}  /* Ukotvení značky za bod uprostřed dole */
        }
        
        // duletize je prirazeni id jednotlivemu markeru - vlastni id, jinak se generuje nahodne
        var znacka = new SMap.Marker(c, marker.id, options);
        souradnice.push(c);
        vrstva.addMarker(znacka);
    });

    // zobrazime a povolime vrstvu - pokud by se vrstva povolila pred vkladanim markeru, tak by se s kazdym vlozenym markerem prekreslovala mapa a pocitaly pozice vsech markeru
    m.addLayer(vrstva);                          /* Přidat ji do mapy */
    vrstva.enable();                         /* A povolit */

    var cz = m.computeCenterZoom(souradnice); /* Spočítat pozici mapy tak, aby značky byly vidět */
    m.setCenterZoom(cz[0], cz[1]);        

    // poslouchani na kliknuti u markeru
    m.getSignals().addListener(this, "marker-click", function(e) {
        // vybrany marker
        var marker = e.target;
        var id = marker.getId();
        // zobrazime jeho jmeno - parovani vybraneho markeru pomoci jeho id a nasich vstupnich dat
        if (id == 1) {
            window.location.href = "adventures-Alzbetin.html";
        }
    });