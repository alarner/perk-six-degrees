module.exports = bookshelf.model('Image', {
	tableName: 'images',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});