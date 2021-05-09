const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create demand', async () => {
    expect.assertions(1);
    const demand = await db.Demand.create({
        id: 1,
        action: 'Feed me!',
    });
    expect(demand.id).toEqual(1);
});

test('get demand', async () => {
    expect.assertions(1);
    const demand = await db.Demand.findByPk(1);
    expect(demand.action).toEqual('Feed me!');
});

test('delete demand', async () => {
    expect.assertions(1);
    await db.Demand.destroy({
        where: {
            id: 1
        }
    });
    const demand = await db.Demand.findByPk(1);
    expect(demand).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});
