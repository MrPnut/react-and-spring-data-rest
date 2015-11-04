(function () {

	requirejs.config({
		packages: [
			{name: 'rest', location: 'bower_components/rest', main: 'browser'},
			{name: 'when', location: 'bower_components/when', main: 'when'},
			{name: 'react', location: 'bower_components/react', main: 'react'},
			{name: 'jsx', location: 'bower_components/requirejs-react-jsx', main: 'jsx'},
			{name: 'text', location: 'bower_components/requirejs-text', main: 'text'},
			{name: 'sockjs-client', location: 'bower_components/sockjs-client', main: 'dist/sockjs'},
			{name: 'stomp-websocket', location: 'bower_components/stomp-websocket', main: 'lib/stomp'},
			{name: 'babel', location: 'bower_components/requirejs-babel', main: 'babel-5.8.22.min'}
		],
		shim: {
			"react": {
				"exports": "React"
			}
		},
		deps: ['main'],
		jsx: {
			fileExtension: ".jsx",
			transformer: "babel",
			babelOptions: {
				sourceMaps: 'inline'
			},
			transformOptions: {
				harmony: true,
				stripTypes: false,
				inlineSourceMap: true
			},
			usePragma: true
		}

	});

}());