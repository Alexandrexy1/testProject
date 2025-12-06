const TaskSchema = (sequelize, DataTypes) => {
  const TaskTable = sequelize.define(
    "Task", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // SQL Server → IDENTITY(1,1)
    },

    title: {
      type: DataTypes.STRING(255), // NVARCHAR(255)
      allowNull: false,
    },

    completed: {
      type: DataTypes.BOOLEAN, // SQL Server → BIT
      allowNull: false,
      defaultValue: false,
    },
  },
    {
      tableName: "Tasks",
      timestamps: false,
      underscored: false,
    }
);
  return  TaskTable;
};

module.exports =  TaskSchema;
