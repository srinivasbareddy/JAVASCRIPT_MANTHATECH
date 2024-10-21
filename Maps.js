const map = new Map([
    ["stringkey", 20],
    [2, "numberedkey"]
]);
map.set(false,0);
map.set(1,true);
console.log(map.get("stringkey"),
            map.get(2),
            map.get(false),
            map.get(1));
console.log(map);