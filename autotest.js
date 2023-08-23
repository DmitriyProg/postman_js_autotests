pm.test("Проверка, что поле pilots пустое", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.pilots).to.eql([]);
});
pm.test("Проверка, что в статусе есть слово ОК", function () {
    pm.response.to.have.status("OK");
});
pm.test("Проверка успешного статуса", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201, 202]);
});

pm.test("Проверяем, что население планеты 30000000", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.population).to.eql("30000000");
});
pm.test("Проверка, что пришёл статус не 404!!!", function () {
    pm.response.to.not.have.status(404);
});
pm.test("Body содержит строку с forests, mountains, lakes", function () {
    pm.expect(pm.response.text()).to.include("forests, mountains, lakes");
});

pm.test("Проверка успешного статуса 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Проверка, что нашли Obi-Wan Kenobi", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Obi-Wan Kenobi");
});
pm.test("Проверка, что ответ пришёл быстрее, чем 80ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(80);
});
