var config = {
    // Chosing map style
    style: 'mapbox://styles/mapbox/streets-v11',
    // Insert personal Mapbox token
    accessToken: 'pk.eyJ1IjoiZmVkZXN0b3JpZXMiLCJhIjoiY2t4NXh1ZTZ2MGVlMDJvcW9kNTZ4Z3d5eiJ9.lNsYRKc8pGGZjHcTKeWLPA',
    // Including the default markers in the map
    showMarkers: true,
    markerColor: '#7b0e0e',
    theme: 'dark',
    use3dTerrain: true,
    title: '<a href="https://www.iltermopolio.com/" target="_blank"><img src="https://iltermopoliocinematv.files.wordpress.com/2021/09/cropped-cropped-logo-termopolio-cinema.png?w=1024&h=1024" width="80" height="80"></a></br></br> Movie Locations - È stata la mano di Dio',
    subtitle: "Mappa interattiva delle locations dell'ultimo film di Paolo Sorrentino.",
    byline: '<img src="https://www.gliacchiappafilm.it/wp-content/uploads/2021/11/e-stata-la-mano-di-dio.jpg" width="400"></br> <blockquote>Testo testo testo testo </blockquote>',
    footer: 'Mappa a cura di <a href="https://tars4815.github.io/" target="_blank">Federica Gaspari</a> per la redazione cinema de <a href="https://www.iltermopolio.com/" target="_blank">IlTermopolio</a>',
    chapters: [
        {
            id: 'Napoli',
            alignment: 'left',
            hidden: false,
            title: 'Napoli secondo Paolo Sorrentino',
            image: 'https://artesettima.it/wp-content/uploads/2021/12/e-stata-la-mano-di-dio-film-1280x720-1.jpg',
            description: '<a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cinematographe.it%2Frubriche-cinema%2Ffocus%2Fe-stata-la-mano-di-dio-film-spiegazione-finale%2F&psig=AOvVaw2BHiBMBpp_4cpK2Uvb8C_J&ust=1642763548433000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCIDi_Z-ZwPUCFQAAAAAdAAAAABAK">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [14.256050858085274, 40.84527557362108],
                zoom: 10,
                pitch: 57.00,
                bearing: -50.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Galleria Umberto I',
            image: 'https://www.npcmagazine.it/wp-content/uploads/2021/11/4-1-1024x576.jpg',
            description: 'La famosa Galleria commerciale che si trova in via Toledo è uno dei luoghi fondamentali per la vita di Fabio perché qui incontra il regista Capuano a cui confiderà le sue passioni e le sue speranze di fare carriera nel cinema. Qui ammira anche le prove di una particolare piéce teatrale che lo ispirerà.</br>Fonte: <a href="https://www.napolike.it/e-stata-la-mano-di-dio-di-sorrentino-le-curiosita-i-luoghi-e-cosa-non-perdere-del-film#Il_Vomero_e_la_vera_casa_di_Sorrentino" target="_blank">Napolike</a>',
            location: {
                center: [ 14.2495153379846, 40.83851675969711],
                zoom: 15.34,
                pitch: 33.00,
                bearing: -59.98
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-element',
            alignment: 'left',
            hidden: false,
            title: 'Piazza Plebiscito',
            image: 'https://www.npcmagazine.it/wp-content/uploads/2021/11/IMMAGINE-IN-EVIDENZA-ARTICOLI4-1024x576.jpg',
            description: "Proprio in una delle scene iniziali del film vediamo Piazza del Plebiscito com'era negli anni '80, cioè non ancora chiusa al traffico e davvero piena di auto e traffico. In questa location, di notte, avviene l'incontro tra la zia di Fabietto e addirittura San Gennaro.",
            location: {
                center: [14.248583097637937, 40.83598792493707],
                zoom: 16.43,
                pitch: 44.00,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-element',
            alignment: 'left',
            hidden: false,
            title: 'Piscine Mirabilis',
            image: 'https://www.barbadillo.it/wp-content/uploads/2021/12/lamanodidio2.jpg',
            description: "In questo bellissimo sito storico ed archeologico dei Campi Flegrei si svolge una delle scene finali più rappresentative del film: l'incontro e lo scambio di intense battute tra Fabietto ed il regista Antonio Capuano in una notte di confessioni.",
            location: {
                center: [14.079993653459056, 40.795605523792815],
                zoom: 16.43,
                pitch: 44.00,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-element',
            alignment: 'left',
            hidden: false,
            title: 'Stadio San Paolo',
            image: 'https://techprincess.it/wp-content/uploads/2021/07/E-stata-la-mano-di-Dio.jpg',
            description: "L'allora Stadio San Paolo di Fuorigrotta appare in alcune scene. Tempio del calcio e di Maradona, meta quasi spirituale per il protagonista. È riprodotto con la computer grafica poiché negli anni'80 la struttura era leggermente diversa da oggi..",
            location: {
                center: [14.193061097637647, 40.82809884425576],
                zoom: 16.43,
                pitch: 44.00,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-element',
            alignment: 'right',
            hidden: false,
            title: 'Villa Giusso Astapiana',
            image: 'https://www.napolike.it/wp-content/uploads/2021/12/e-stata-la-mano-di-dio-villa-1250x782.jpg',
            description: "Villa Giusso Astapiana a Vico Equense è la grande villa in cui tutta la famiglia di Fabio e dei suoi genitori trascorre un giorno di spensieratezza tra pranzo e bagni. ",
            location: {
                center: [14.425444624619095, 40.642305798334945],
                zoom: 16.43,
                pitch: 44.00,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-element',
            alignment: 'left',
            hidden: false,
            title: 'Stromboli',
            image: 'https://www.napolike.it/wp-content/uploads/2021/12/e%CC%80-stata-la-mano-di-dio-stromboli.jpg',
            description: "Anche alcuni luoghi ed il mare di Stromboli, nonché l'omonimo vulcano, appaiono nel film durante una triste vacanza fatta da Fabio ed il fratello dopo la morte dei genitori. In questa location Fabio capisce di essere 'diventato grande' e si separa dal fratello cercando una propria via, ormai solo nel mondo. ",
            location: {
                center: [15.21409017162607, 38.793780881782084],
                zoom: 16.43,
                pitch: 44.00,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
