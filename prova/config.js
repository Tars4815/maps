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
    title: 'Prova Scrollytelling',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Federica Gaspari',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [8.55965, 45.76021],
                zoom: 14.43,
                pitch: 57.00,
                bearing: -98.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [8.52690, 45.75535],
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
            title: 'Politecnico di Milano',
            image: './path/to/image/source.png',
            description: 'This is the position of Politecnico di Milano - Campus Leonardo.',
            location: {
                center: [9.22851, 45.47788],
                zoom: 16.43,
                pitch: 44.00,
                bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
