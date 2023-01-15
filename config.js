'use strict'


// Export

module.exports = {

	app: {
		name: 'Demo',
	},

	use: {
		templates: '.html',
		scripts: '.js',
		styles: '.css',
	},

	build: {
		imagemin: [ 'png', 'jpg' ],
		sourcemaps: [ 'js', 'css' ],
		autoprefixer: [ 'last 3 versions'],
		globalStyles: [ 'app/blocks/develop/app/base/variables.css', 'app/blocks/develop/app/base/mixins.css' ],
	},

	autoCreate: {
		onlyOnWatch: true, // создаем файлы только во время watch'а
		folders: [ 'assets' ], // у новых блоков сразу будет создана папка assets
		files: [ '.css', '.js' ], // у новых сущностей будет стиль и скрипт
		levels: [ 'develop' ], // новые блоки создаются только на уровне develop
	},

	dist: {
		styles: 'styles',
		fonts: 'styles/fonts',
		img: 'styles/img',
		symbol: 'styles/img',
		scripts: 'scripts',
		static: 'static',
		favicons: 'favicons',
	},

	favicons: {
		android: false,
		appleIcon: false,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		windows: false,
		yandex: false,
	},

	HTMLBeautify: {
		preserve_newlines: false,
	},

	addContent: {
		page: `extends ../blocks/layout\n\nblock data\n\t-\n\t\tconst page = {\n\n\t\t\tpath: '[name]',\n\t\t\ttitle: '',\n\t\t\tdescription: '',\n\t\t\tattrs: []\n\n\t\t};\n\nblock content\n\n\n\t// GAP:Header \n\t+header\n\n`,
		css: '.[name]{}',
	},

}