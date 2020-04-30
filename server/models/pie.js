module.exports = (sequelize, DataTypes) => {


const Pie = sequelize.define('pie',{
    nameOfPie: {
        type: DataTypes.STRING,
        allowNull: false /// have to have something in nameOfPie or error
    },
    baseOfPie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    crust: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timeToBake: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

return Pie;
}