require('@babel/register')({
	ignore: [/(node_modules)/],
	presets: ['@babel/preset-env', '@babel/preset-react']
});

const router = require('./sitemap-router').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
	return new Sitemap(router)
		.build('https://www.abdallaahmed.co')
		.save('./public/sitemap.xml');
}

generateSitemap();
