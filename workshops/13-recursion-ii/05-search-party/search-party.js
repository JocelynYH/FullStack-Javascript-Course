function searchParty(name, world) {
    var locations = Object.values(world);
    for (location in world) {
        var value = world[location];

        if (value === name) {
            return [location];
        }

        else if (Array.isArray(value)) {
            if (value.indexOf(name) > -1) return [location];
        }

        else if (typeof value === 'object') {
            var result = searchParty(name, value);
            if (result) return [location].concat(result);
        }
       
    }

    return null;
}

