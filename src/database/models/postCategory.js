const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    { 
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogpost',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId'
          });
    
          models.BlogPost.belongsToMany(models.Category, {
            as: 'category',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId'
            });
    }
  
    return PostCategory;
  }
  
  module.exports = PostCategory;