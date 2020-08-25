// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');
const slugify = require('slugify');
// slugify('some string', {
// 	replacement: '-',  // replace spaces with replacement character, defaults to `-`
// 	remove: undefined, // remove characters that match regex, defaults to `undefined`
// 	lower: false,      // convert to lower case, defaults to `false`
// 	strict: false,     // strip special characters except replacement, defaults to `false`
// 	locale: 'vi'       // language code of the locale to use
// })


module.exports = function (api) {
	try {
		api.loadSource(async actions => {
			const { data } = await axios.get('https://lem.toc-editions.com/lem-biblio/collections')
			const collection = actions.addCollection('LemColls')
			let count = 1;
			for (item of data.data) {
				if (item.managed) {
					var slink = slugify(item.collection, { lower: true });

					collection.addNode({
						id: count,
						title: item.collection,
						managed: item.managed,
						translation: item.translation,
						note: item.note,
						link: slink,
					})
					count++;
				}
			}
		})
	} catch (error) {
		console.log(error)
	}


	api.loadSource(({ addCollection }) => {
		// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
	})

	api.createPages(({ createPage }) => {
		// Use the Pages API here: https://gridsome.org/docs/pages-api/
	})
}

