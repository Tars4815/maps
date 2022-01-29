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
    subtitle: "<hr><i>Mappa interattiva delle locations dell'ultimo film di Paolo Sorrentino</i>",
    byline: "</br><img src='https://www.gliacchiappafilm.it/wp-content/uploads/2021/11/e-stata-la-mano-di-dio.jpg' width='400'></br> <blockquote>Mentre i cinefili di tutto il mondo si interrogano su quali saranno i titoli a riservarsi un posto nella cinquina finalista dei migliori film internazionali agli Oscar, <b>È stata la mano di Dio</b> di Paolo Sorrentino conquista il cuore del grande pubblico con la sua narrazione intima e autobiografica. Dopo il Leone d'argento ottenuto alla 78esima edizione della Mostra del cinema di Venezia, il film del regista partenopeo ha infatti raccolto un ottimo consenso sia in sala - diventando il film italiano più visto al cinema nel 2021 - che su Netflix, piattaforma che ha contribuito alla distribuzione dello stesso anche a livello internazionale.</br></br>In questo nuovo appuntamento di <i>Movie Locations</i> a cura de IlTermopolio, esploriamo i luoghi che sono stati palcoscenico di questa storia del grande schermo, tuffandoci nella Napoli animata dalla regia di Sorrentino.</blockquote>",
    also: '<p style="color:white">Leggi anche la <a href="https://www.iltermopolio.com/cinema/e-stata-la-mano-di-dio-la-recensione" target=_"blank">recensione</a> di <i><b>È stata la mano di Dio</b></i></p>',
    footer: 'Mappa a cura di <a href="https://tars4815.github.io/" target="_blank">Federica Gaspari</a> per la redazione cinema de <a href="https://www.iltermopolio.com/" target="_blank">IlTermopolio</a>',
    chapters: [
        {
            id: 'Napoli',
            alignment: 'left',
            hidden: false,
            title: 'Napoli secondo Paolo Sorrentino',
            image: 'https://artesettima.it/wp-content/uploads/2021/12/e-stata-la-mano-di-dio-film-1280x720-1.jpg',
            description: "Partenopeo classe 1970, <b>Paolo Sorrentino</b> è, sin dai suoi esordi, considerato uno dei nomi di maggiore rilievo nel panorama cinematografico italiano. Film dopo film ha trovato un ruolo prestigioso anche a livello internazionale con riconoscimenti nei principali festival (Cannes, Venezia e non solo) e grandi premi del settore. È indimenticabile il trionfo agli Oscar nel 2014 de <i>La grande bellezza</i>, film che sotto molti aspetti ha segnato l'inizio di una nuova fase per il regista, sempre più coinvolto in progetti di respiro internazionale. Questo lungo viaggio artistico, tuttavia, nel 2021 ha (ri)portato Sorrentino a Napoli, il luogo dove i suoi sogni hanno avuto origine tra ricordi di famiglia e legami spezzati. Con il suo ultimo film compone un'ode alla sua città, una vera e propria mappa cinematografica ricca di ispirazioni e pulsante di memorie e storie vissute nella sua giovinezza.",
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
            description: 'Il primo vero incontro tra il giovane protagonista Fabio (alter ego di Sorrentino) e la settima arte ha luogo in uno dei luoghi pià iconici del capoluogo campano. La maestosa galleria commerciale Umberto I di Via Toledo, infatti, è un set nel set del film stesso, poiché proprio sotto le sue volte della finzione cinematografica vanno in scena le riprese di un film di Antonio Capuano, regista napoletano che negli anni Novanta è stato davvero una figura di riferimento per Sorrentino stesso.</br>📍 <a href="https://it.wikipedia.org/wiki/Galleria_Umberto_I" target="_blank">Maggiori info</a>',
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
            description: "In una delle prime sequenze del film con l'ampio prologo guidato da Luisa Ranieri, fa capolino anche l'inconfondibile Piazza Plebiscito, cuore pulsante della storia di Napoli. Nel film, in particolare, viene ritratta in una veste insolita, ovvero quasi interamente occupata da automobili come accadeva negli anni dell'adolescenza del regista. La piazza è ormai chiusa al traffico dagli anni Novanta.</br>📍 <a href='https://it.wikipedia.org/wiki/Piazza_del_Plebiscito' target='_blank'>Maggiori informazioni</a>",
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
            alignment: 'right',
            hidden: false,
            title: 'Piscine Mirabilis',
            image: 'https://www.barbadillo.it/wp-content/uploads/2021/12/lamanodidio2.jpg',
            description: "Le piscine mirabilis fanno da sfondo a un altro dei momenti cardine del film e cruciale per le ambizioni del giovane Fabietto. Proprio all'ombra delle costruzioni di questo sito archeologico dei Campi Flegrei viene infatti ritratto il secondo incontro con Capuano che apre l'emozionante sequenza finale del film.</br>📍 <a href='https://it.wikipedia.org/wiki/Piscina_mirabilis' target='_blank'>Maggiori informazioni</a>",
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
            description: "Nella celebrazione della città a cura di Sorrentino non manca nemmeno lo Stadio San Paolo, ora ribattezzato Stadio Diego Armando Maradona in onore di un'altra figura sportiva che spesso ha rappresentato un elemento ricorrente - direttamente o indirettamente - nella filmografia del regista. Nel film la struttura è stata modificata con alcuni effetti digitali per ricostruire alcune sue parti non più presenti nello stadio visitabile a Fuorigrotta.</br>📍 <a href='https://it.wikipedia.org/wiki/Stadio_Diego_Armando_Maradona_(Napoli)' target='_blank'>Maggiori informazioni</a>",
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
