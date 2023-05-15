import { sequelize} from './database.js'
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
});

/* Проекты*/
const Project = sequelize.define('project', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

/* Связь проекта с  программами */
const ProjectProgram = sequelize.define('project_program', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

/** программы */
const Program = sequelize.define('program', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER, allowNull: false },
});

/** категории программ */
const Categories = sequelize.define('categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const Tehno = sequelize.define('tehno', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const CategoriesTehno = sequelize.define('categories_tehno', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Project);
Project.belongsTo(User);

Project.hasMany(ProjectProgram);
ProjectProgram.belongsTo(Project);

Categories.hasMany(Program);
Program.belongsTo(Categories);

Tehno.hasMany(Program);
Program.belongsTo(Tehno);

Program.hasMany(ProjectProgram);
ProjectProgram.belongsTo(Program);

Categories.belongsToMany(Tehno, { through: CategoriesTehno });
Tehno.belongsToMany(Categories, { through: CategoriesTehno });




export { User, Project, ProjectProgram, Program, Categories, Tehno, CategoriesTehno };
