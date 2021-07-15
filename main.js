var fs = require('fs');
const pr = require('prompt-sync')();
const identifier = pr("Identifier:");
const displayName = pr("Display Name:");
const cooldownDur = pr("Cooldown Duration:");

idName = identifier.split(":")[1];
idNamespace = identifier.split(":")[0];

let item = {};
item.format_version = "1.16.100",
item["minecraft:item"] = {};
item["minecraft:item"].description = {};
item["minecraft:item"].description.identifier = identifier;
item["minecraft:item"].description.category = "Items";
item["minecraft:item"].components = {};
item["minecraft:item"].components["minecraft:icon"] = {};
item["minecraft:item"].components["minecraft:icon"].texture = idName + ".texture";
item["minecraft:item"].components["minecraft:display_name"] = {};
item["minecraft:item"].components["minecraft:display_name"].value = `${idNamespace}.${idName}`;
item["minecraft:item"].components["minecraft:max_stack_size"] = 1;
item["minecraft:item"].components["minecraft:use_duration"] = 999999999;
item["minecraft:item"].components["minecraft:stacked_by_data"] = true;
item["minecraft:item"].components["minecraft:hand_equipped"] = true;
item["minecraft:item"].components["minecraft:creative_category"] = {};
item["minecraft:item"].components["minecraft:creative_category"].parent = "itemGroup.name.tools";
item["minecraft:item"].components["minecraft:food"] = {};
item["minecraft:item"].components["minecraft:food"].can_always_eat = true;
item["minecraft:item"].components["minecraft:cooldown"] = {};
item["minecraft:item"].components["minecraft:cooldown"].category = idNamespace;
item["minecraft:item"].components["minecraft:cooldown"].duration = parseFloat(cooldownDur);
item["minecraft:item"].components["minecraft:render_offsets"] = {};
item["minecraft:item"].components["minecraft:render_offsets"].main_hand = {};
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.first_person = {};
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.first_person.scale = [];
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.first_person.scale[0] = 0;
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.first_person.scale[1] = 0;
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.first_person.scale[2] = 0;
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.third_person = {};
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.third_person.scale = [];
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.third_person.scale[0] = 0;
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.third_person.scale[1] = 0;
item["minecraft:item"].components["minecraft:render_offsets"].main_hand.third_person.scale[2] = 0;

let lang = `${idNamespace}.${idName}=${displayName}`;
//console.log(JSON.stringify(item, null, 2));
//console.log(lang);

var path = `./output/${idName}`;

if (!fs.existsSync(path)){
    fs.mkdirSync(path);
    fs.writeFile(`./output/${idName}/${idName}.json`, JSON.stringify(item, null, 2), function (err) {
        if (err) throw err;
    });
    fs.writeFile(`./output/${idName}/en_US.lang`, lang, function (err) {
        if (err) throw err;
    });
}