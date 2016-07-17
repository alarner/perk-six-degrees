module.exports = bookshelf.model('Link', {
	tableName: 'links',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});